var shortsEvent = shortsEvent || {}; // shortsEvent 객체가 이미 존재하면 사용하고, 없으면 빈 객체를 생성

shortsEvent.main = {
    shortsFunc() {
        const _this = this;

        // 디바운스 함수: 특정 함수가 연속적으로 호출되지 않도록 일정 시간 동안 대기하다가 마지막 호출 후 실행
        const debounce = (func, delay) => {
            let timeoutId;
            return (...args) => {
                if (timeoutId) clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func.apply(null, args);
                }, delay);
            };
        };

        const container = document.querySelector('.container'); // 전체 동영상을 감싸는 컨테이너 요소
        const containers = document.querySelectorAll('.video-container'); // 각각의 동영상 컨테이너들
        const videos = document.querySelectorAll('.video'); // 모든 비디오 요소들
        const volumeSlider = document.querySelector('.volume-slider'); // 볼륨 슬라이더 컨트롤

        let lastVolume = 0; // 마지막 볼륨 값을 저장하는 변수, 기본값은 0
        let isMobile = /iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()); // 모바일 기기인지 확인
        let videoIndex = 0; // 비디오 인덱스, 미리 로드할 비디오의 번호를 지정할 때 사용
        
        // 초기화 함수: 페이지 로드 시 실행되어 필요한 동작들을 설정하는 역할
        _this.shortsFunc.init = () => {
            _this.shortsFunc.preloadVideosInRange(0, 3); // 초기 로드 시 첫 번째부터 세 번째까지의 비디오를 미리 로드
            _this.shortsFunc.addEvents(); // 각 비디오에 필요한 이벤트를 추가
            _this.shortsFunc.scrollHandler(); // 스크롤 핸들러 설정
            _this.shortsFunc.addScrollEvents(); // 스크롤 관련 이벤트 추가
            _this.shortsFunc.addGnbEvents(); // 상단 네비게이션(GNB) 관련 이벤트 추가

            // 볼륨 슬라이더에서 입력이 있을 때 볼륨 조절
            volumeSlider.addEventListener('input', () => {
                lastVolume = volumeSlider.value; // 슬라이더 값을 마지막 볼륨으로 저장
                document.querySelectorAll('.video').forEach((video) => {
                    video.volume = lastVolume; // 각 비디오의 볼륨을 설정
                    video.muted = lastVolume == 0; // 볼륨이 0이면 음소거 설정
                    // 볼륨에 따라 음소거 아이콘을 업데이트
                    if (video.volume === 0) {
                        muteIcon.classList.remove('fa-volume-up');
                        muteIcon.classList.add('fa-volume-mute');
                    } else {
                        muteIcon.classList.remove('fa-volume-mute');
                        muteIcon.classList.add('fa-volume-up');
                    }
                    lastVolume = video.volume; // 마지막 볼륨 값 저장
                });
            });
    
            // 음소거 버튼 클릭 시 처리
            const muteToggleButton = document.getElementById('mute-toggle-button'); // 음소거 버튼
            const muteIcon = muteToggleButton.querySelector('i'); // 음소거 버튼 내 아이콘
            muteToggleButton.addEventListener('click', () => {
                const isMuted = container.querySelectorAll('video')[0].muted; // 첫 번째 비디오의 음소거 상태 확인
                container.querySelectorAll('video').forEach(video => {
                    video.muted = !isMuted; // 현재 상태를 반전하여 음소거 여부 설정
                    if (!isMuted) {
                        video.volume = 0; // 음소거 시 볼륨을 0으로 설정
                    } else {
                        video.volume = lastVolume == 0 ? 1 : lastVolume; // 음소거 해제 시 마지막 볼륨 값 적용
                    }
                });

                // 음소거 버튼 아이콘과 슬라이더 값 업데이트
                volumeSlider.value = isMuted ? (lastVolume == 0 ? 1 : lastVolume) : 0;
                muteIcon.classList.toggle('fa-volume-mute', !isMuted);
                muteIcon.classList.toggle('fa-volume-up', isMuted);
            });
        };

        // 비디오를 미리 로드하는 함수: data-src 속성에 있는 동영상 URL을 로드하여 동영상을 설정
        _this.shortsFunc.preloadVideo = (video) => {
            const src = video.getAttribute('data-src'); // 비디오의 data-src 속성에서 비디오 URL을 가져옴
            if (src && !video.src) { // 비디오에 src가 설정되어 있지 않으면 로드
                video.src = src;
                video.setAttribute('data-number', videoIndex++); // 각 비디오에 인덱스 번호 부여
            }
        };

        // 지정된 범위의 비디오들을 미리 로드하는 함수
        _this.shortsFunc.preloadVideosInRange = (start, end) => {
            const videos = document.querySelectorAll('.video'); // 모든 비디오를 가져옴
            for (let i = start; i <= end && i < videos.length; i++) { // 시작부터 끝까지의 비디오를 반복
                if (i >= 0) { // 인덱스가 유효할 경우에만 로드
                    _this.shortsFunc.preloadVideo(videos[i]);
                }
            }
        };

        // 화면에 보이는 비디오만 재생하고 나머지는 일시 정지하는 함수
        _this.shortsFunc.playVisibleVideo = () => {
            const container = document.querySelector('.container'); // 컨테이너를 가져옴
            const videos = document.querySelectorAll('.video'); // 모든 비디오를 가져옴
            let containerRect = container.getBoundingClientRect(); // 컨테이너의 현재 화면 내 위치를 가져옴

            videos.forEach((video, index) => {
                let videoRect = video.getBoundingClientRect(); // 각 비디오의 화면 내 위치를 가져옴

                // 비디오가 화면에 완전히 보이면 재생, 아니면 일시 정지
                if (videoRect.top >= containerRect.top && videoRect.bottom <= containerRect.bottom) {
                    video.play();
                    _this.shortsFunc.preloadVideosInRange(index - 3, index + 3); // 근처의 비디오들을 미리 로드
                } else {
                    video.pause();
                }
            });
        };

        // 화면에 보이는 비디오를 재생하는 함수
        _this.shortsFunc.playVisibleVideos = () => {
            const videos = document.querySelectorAll('.video'); // 모든 비디오를 가져옴
            let containerRect = container.getBoundingClientRect();
            videos.forEach((video) => {
                let videoRect = video.getBoundingClientRect(); // 각 비디오의 화면 내 위치를 가져옴

                // 비디오가 화면에 완전히 보이면 재생
                if (videoRect.top >= containerRect.top && videoRect.bottom <= containerRect.bottom) {
                    video.play();
                }
            });
        };

        // 화면에 보이는 비디오를 일시 정지하는 함수
        _this.shortsFunc.pauseVisibleVideos = () => {
            const videos = document.querySelectorAll('.video'); // 모든 비디오를 가져옴
            let containerRect = container.getBoundingClientRect();
            videos.forEach((video) => {
                let videoRect = video.getBoundingClientRect(); // 각 비디오의 화면 내 위치를 가져옴

                // 비디오가 화면에 완전히 보이면 일시 정지
                if (videoRect.top >= containerRect.top && videoRect.bottom <= containerRect.bottom) {
                    video.pause();
                }
            });
        };

        // 재생/일시 정지 버튼 상태 업데이트 함수
        _this.shortsFunc.updatePlayPauseButton = (video, button) => {
            if (video.paused) {
                button.innerHTML = '<i class="fas fa-play"></i>';
            } else {
                button.innerHTML = '<i class="fas fa-pause"></i>';
            }
        };

        // GNB(open/close) 이벤트 추가: 상단 네비게이션이 열리고 닫힐 때 발생하는 이벤트 처리
        _this.shortsFunc.addGnbEvents = () => {
            const gnbOpen = document.querySelector('.gnb_open'); // GNB 열기 버튼
            const gnbClose = document.querySelector('.gnb_close'); // GNB 닫기 버튼

            gnbOpen.addEventListener('click', () => {
                _this.shortsFunc.pauseVisibleVideos(); // GNB 열릴 때 비디오 일시 정지
                gnbOpen.classList.remove('on'); // 열림 상태 업데이트
                gnbClose.classList.add('on'); // 닫기 버튼 활성화
            });

            gnbClose.addEventListener('click', () => {
                _this.shortsFunc.playVisibleVideos(); // GNB 닫힐 때 비디오 재생
                gnbClose.classList.remove('on'); // 닫힘 상태 업데이트
                gnbOpen.classList.add('on'); // 열기 버튼 활성화
            });
        };

        // 각 비디오에 공통적으로 필요한 이벤트들을 추가하는 함수
        _this.shortsFunc.addCommonVideoEvents = (video, playPauseButton, seekbar, container) => {
            // 비디오 더블 클릭을 방지하는 이벤트
            video.addEventListener('dblclick', (event) => event.preventDefault());
        
            // 비디오 재생/일시 정지 버튼의 상태를 업데이트
            video.addEventListener('play', () => _this.shortsFunc.updatePlayPauseButton(video, playPauseButton));
            video.addEventListener('pause', () => _this.shortsFunc.updatePlayPauseButton(video, playPauseButton));
        
            // 비디오 재생 시간에 따라 seekbar(progress bar)의 값을 업데이트
            video.addEventListener('timeupdate', () => {
                const value = (100 / video.duration) * video.currentTime;
                seekbar.value = value;
                const progressBar = container.querySelector('.progress-bar');
                const percentage = (video.currentTime / video.duration) * 100;
                progressBar.style.width = `${percentage}%`;
            });
        
            // seekbar 값이 변경되면 해당 위치로 비디오 재생 시간을 이동
            seekbar.addEventListener('input', () => {
                const time = video.duration * (seekbar.value / 100);
                video.currentTime = time;
            });
        
            // 재생/일시 정지 버튼 클릭 이벤트
            playPauseButton.addEventListener('click', () => {
                video.paused ? video.play() : video.pause();
            });
        
            // 좋아요 버튼 클릭 시 상태 변경
            if (container.getElementsByClassName('btn_like').length > 0) {
                const btnLike = container.querySelector('.btn_like');
                btnLike.addEventListener('click', (event) => {
                    event.target.classList.toggle('on');
                });
            }
        
            // 제목 클릭 시 ellipsis 토글
            if (container.getElementsByClassName('description-title').length > 0) {
                const descriptionTitle = container.querySelector('.description-title');
                descriptionTitle.addEventListener('click', (event) => {
                    event.target.classList.toggle('ellipsis');
                });
            }
        };

        // 기존 비디오에 필요한 이벤트 추가
        _this.shortsFunc.addEvents = () => {
            videos.forEach((video, index) => {
                const container = containers[index];
                const playPauseButton = container.querySelector('.play-pause');
                const seekbar = container.querySelector('.seekbar');

                // 공통 비디오 이벤트 추가
                _this.shortsFunc.addCommonVideoEvents(video, playPauseButton, seekbar, container);
            });
        };
        
        // btn_append 버튼 클릭 시 비디오 컨테이너 추가
        const btnAppend = document.querySelector('.btn_append');
        if (btnAppend) {
            btnAppend.addEventListener('click', () => {
                // 새로운 video-container 요소 생성
                const newContainer = document.createElement('div');
                newContainer.classList.add('video-container');
                newContainer.innerHTML = `
                    <div class="video-inner">
                        <div class="video-box">
                            <video class="video" tabindex="-1" data-src="https://s3.ap-northeast-2.amazonaws.com/freevod.etoos.com/qr/shorts/sample/youtube/11sec_200391_720.mp4" loop autoplay playsinline muted></video>
                        </div>
                        <div class="custom-controls">
                            <button class="play-pause control-button" aria-label="Play/Pause video"><i class="fas fa-play"></i></button>
                            <div class="video-description">
                                <div class="description-teacher">
                                    <span class="img"><img src="https://img.etoos.com/teacher/teacher/200391/m300x300.png" alt=""></span>
                                    <span class="name"><strong class="subj">사탐</strong> 이지영</span>
                                </div>
                                <div class="description-info">
                                    <p class="description-title ellipsis">영상 제목 노출(1줄 글자수 까지만 노출 이하 ‘...’ 처리, 글자수 최대 80 자) 까지 작성 가능, 두 줄 이상 시 해당 글 클릭하면 상단 높이가 길어지며 전체 글자수 노출)</p>
                                    <p class="description-tag">
                                        <span class="hashtag"><strong>#</strong>숏츠</span>
                                        <span class="hashtag"><strong>#</strong>사탐</span>
                                        <span class="hashtag"><strong>#</strong>이지영</span>
                                        <span class="hashtag"><strong>#</strong>6평</span>
                                        <span class="hashtag"><strong>#</strong>LIVE</span>
                                    </p>
                                </div>
                            </div>
                            <div class="video-feedback">
                                <button class="btn_ico btn_view"><span class="blind">조회수</span><span class="txt">1.8만</span></button>
                                <button class="btn_ico btn_like"><span class="blind">좋아요</span><span class="txt">1.8만</span></button>
                                <button class="btn_ico btn_share"><span class="blind">공유</span><span class="txt">공유</span></button>
                                <button class="btn_ico btn_more"><span class="blind">더보기</span><span class="txt">더보기</span></button>
                            </div>
                            <div class="control-seekbar"><input type="range" class="seekbar" min="0" max="100" step="0.1" value="0"></div>
                            <div class="progress-bar-container">
                                <div class="progress-bar"></div>
                            </div>
                        </div>
                    </div>
                `;
                
                // 컨테이너를 원하는 위치에 추가
                document.querySelector('.container').appendChild(newContainer);
            
                // 새로운 비디오에 대한 이벤트 추가
                const newVideo = newContainer.querySelector('.video');
                const newPlayPauseButton = newContainer.querySelector('.play-pause');
                const newSeekbar = newContainer.querySelector('.seekbar');

                // 추가된 비디오에 mute 상태 초기화
                const isMuted = container.querySelectorAll('video')[0].muted;
                newVideo.muted = isMuted;
                lastVolume = volumeSlider.value; // 슬라이더 값에 맞게 비디오 볼륨 조정
                newVideo.volume = lastVolume;
                // newVideo.muted = lastVolume == 0; // 볼륨이 0이면 음소거

                // 기존 addVideoEvents 로직을 사용하여 이벤트 연결
                _this.shortsFunc.addVideoEvents(newVideo, newPlayPauseButton, newSeekbar, newContainer);
            });
        }
        
        // 추가되는 비디오에 필요한 이벤트 추가
        _this.shortsFunc.addVideoEvents = (video, playPauseButton, seekbar, container) => {
            // 공통 비디오 이벤트 추가
            _this.shortsFunc.addCommonVideoEvents(video, playPauseButton, seekbar, container);
        };

        // 스크롤 이벤트 추가
        _this.shortsFunc.addScrollEvents = () => {
            const container = document.querySelector('.container');
            // 디바운스를 사용하여 스크롤 시 playVisibleVideo를 호출 (100ms 동안 여러 번 호출되지 않도록 제어)
            container.addEventListener('scroll', debounce(() => _this.shortsFunc.playVisibleVideo(), 100));
        };

        // 스크롤 핸들러: 위/아래 방향으로 스크롤할 때 새로운 위치로 부드럽게 이동
        _this.shortsFunc.scrollHandler = (event, direction) => {
            const container = document.querySelector('.container'); // 전체 컨테이너를 가져옴
            const scrollAmount = window.innerHeight; // 한 번에 스크롤할 양 (화면 높이)
            const newScrollPosition = container.scrollTop + (direction === 'down' ? scrollAmount : -scrollAmount); // 방향에 따른 스크롤 위치 계산
            container.scrollTo({
                top: Math.min(container.scrollHeight - container.clientHeight, Math.max(0, newScrollPosition)), // 최종 스크롤 위치 설정
                behavior: 'smooth', // 부드럽게 스크롤
            });
        };

        // 마우스 휠로 스크롤 처리: 휠 이벤트로 스크롤 방향에 따라 위/아래로 이동
        _this.shortsFunc.movingWheel = () => {
            const container = document.querySelector('.container'); // 컨테이너 선택
            container.addEventListener('wheel', (event) => {
                if (event.deltaY > 0) { // 휠을 아래로 돌리면
                    _this.shortsFunc.scrollHandler(event, 'down'); // 아래로 스크롤
                } else { // 휠을 위로 돌리면
                    _this.shortsFunc.scrollHandler(event, 'up'); // 위로 스크롤
                }
            }, { passive: false }); // 스크롤 이벤트를 제어하기 위해 passive 옵션을 false로 설정
        };

        // 모바일 기기에서 스크롤 처리 (안드로이드): 터치 시작 및 움직임에 따라 스크롤 방향을 결정하여 부드럽게 스크롤
        _this.shortsFunc.movingAos = () => {
            let isScrolling = false; // 현재 스크롤 중인지 여부를 나타내는 변수
            let startY = 0; // 터치가 시작된 y 좌표를 저장
            const container = document.querySelector('.container'); // 컨테이너 선택

            // 스크롤을 제어하는 함수: 터치 위치에 따라 스크롤 처리
            function handleScroll(event) {
                if (isScrolling) return; // 이미 스크롤 중이면 더 이상 실행하지 않음
                isScrolling = true; // 스크롤 중으로 상태 변경
                requestAnimationFrame(() => { // requestAnimationFrame을 사용해 스크롤 처리를 최적화
                    if (event.touches[0].clientY < startY) { // 터치 시작 위치보다 아래로 이동하면
                        container.scrollBy({ top: window.innerHeight, behavior: 'smooth' }); // 아래로 스크롤
                    } else { // 터치 시작 위치보다 위로 이동하면
                        container.scrollBy({ top: -window.innerHeight, behavior: 'smooth' }); // 위로 스크롤
                    }
                    setTimeout(() => { // 스크롤이 완료되면 스크롤 중 상태를 해제
                        isScrolling = false;
                    }, 500); // 0.5초 후에 다시 스크롤 가능
                });
            }

            container.addEventListener('touchstart', (event) => startY = event.touches[0].clientY); // 터치 시작 시 y 좌표 저장
            container.addEventListener('touchmove', handleScroll, { passive: false }); // 터치가 움직일 때 스크롤 처리, passive를 false로 설정하여 이벤트 제어
        };

        // 모바일 기기에서 스크롤 처리 (iOS): iOS에서는 터치 시작과 움직임에 따라 스크롤 방향을 설정
        _this.shortsFunc.movingIos = () => {
            let startY = 0; // 터치가 시작된 y 좌표를 저장
            let isDragging = false; // 드래그 상태를 저장
            const container = document.querySelector('.container'); // 컨테이너 선택
        
            // 터치가 시작되면 y 좌표 저장하고 드래그 상태로 설정
            container.addEventListener('touchstart', (event) => {
                startY = event.touches[0].clientY;
                isDragging = true;
            });

            // 터치가 움직일 때 스크롤 처리
            container.addEventListener('touchmove', (event) => {
                if (!isDragging) return; // 드래그 상태가 아니면 동작하지 않음
                const deltaY = startY - event.touches[0].clientY; // 터치 이동 거리를 계산
                if (Math.abs(deltaY) > 10) { // 움직임이 충분히 크면
                    event.preventDefault(); // 기본 스크롤 동작을 막음
                    _this.shortsFunc.scrollHandler(event, deltaY > 0 ? 'down' : 'up'); // 스크롤 방향에 따라 처리
                }
            }, { passive: false }); // 터치 이벤트 제어를 위해 passive를 false로 설정
        
            container.addEventListener('touchend', () => isDragging = false); // 터치가 끝나면 드래그 상태 해제
        };

        // 모바일 장치 감지 및 적절한 스크롤 핸들러 호출
        _this.shortsFunc.detectDeviceAndScroll = () => {
            if (isMobile) { // 모바일 기기인 경우
                if (/android/i.test(navigator.userAgent.toLowerCase())) { // 안드로이드 기기일 때
                    _this.shortsFunc.movingAos(); // 안드로이드 스크롤 처리 함수 호출
                } else { // iOS 기기일 때
                    _this.shortsFunc.movingIos(); // iOS 스크롤 처리 함수 호출
                }
            } else { // 데스크탑 또는 비모바일 환경일 때
                _this.shortsFunc.movingWheel(); // 마우스 휠로 스크롤 처리
            }
        };

        // 초기화 호출
        _this.shortsFunc.init();
    },

    init() {
        this.shortsFunc();
    }
};

/* INIT */
shortsEvent.init = () => {
    shortsEvent.main.init();
};

// 페이지가 로드되면 shortsFunc 실행
document.addEventListener('DOMContentLoaded', () => {
    shortsEvent.init();
});

/*
addScrollEvents: 스크롤 이벤트에 디바운스를 적용하여 스크롤 중 자주 호출되는 이벤트를 제한하고, 스크롤이 완료된 후에 playVisibleVideo를 호출해 현재 화면에 보이는 동영상을 재생.
scrollHandler: 주어진 방향에 따라 위/아래로 부드럽게 스크롤하는 함수로, 스크롤 이동량을 화면 높이로 설정하여 한 번에 한 화면씩 이동.
movingWheel: 데스크탑 환경에서 마우스 휠로 스크롤을 처리. 휠을 위/아래로 움직일 때 scrollHandler를 호출해 화면 이동을 제어.
movingAos: 안드로이드 기기에서 터치 이벤트를 기반으로 스크롤 처리. 터치 시작 위치를 저장하고 터치가 움직일 때 스크롤 방향을 결정해 부드럽게 스크롤.
movingIos: iOS 기기에서 터치 이벤트를 기반으로 스크롤 처리. 터치 이동 거리를 계산해 위/아래로 스크롤하며, 스크롤이 충분히 크게 이동할 때만 스크롤 동작을 수행.
detectDeviceAndScroll: 현재 장치가 모바일인지 데스크탑인지 감지한 후, 해당하는 스크롤 처리 함수를 호출. Android, iOS, 데스크탑 각각에 맞는 스크롤 동작을 설정.
*/