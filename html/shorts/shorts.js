var shortsEvent = shortsEvent || {};

shortsEvent.main = {
    shortsFunc() {
        const _this = this;

        // 디바운스 함수
        const debounce = (func, delay) => {
            let timeoutId;
            return (...args) => {
                if (timeoutId) clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func.apply(null, args);
                }, delay);
            };
        };

        const container = document.querySelector('.container'); // 여기서 한 번만 정의
        const containers = document.querySelectorAll('.video-container');
        const videos = document.querySelectorAll('.video');

        let lastVolume = 0; // 마지막 볼륨 값 초기화 (기본값: 0)
        let isMobile = /iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase());
        let videoIndex = 0;
        
        _this.shortsFunc.init = () => {
            _this.shortsFunc.preloadVideosInRange(0, 3); // 초기 3개의 비디오 미리 로드
            _this.shortsFunc.addEvents();
            _this.shortsFunc.scrollHandler();
            _this.shortsFunc.addScrollEvents();
            _this.shortsFunc.addGnbEvents(); // GNB 이벤트 추가

            // 볼륨 슬라이더를 통해 볼륨 조절
            const volumeSlider = document.querySelector('.volume-slider');
            volumeSlider.addEventListener('input', () => {
                lastVolume = volumeSlider.value; // 슬라이더 값에 맞게 비디오 볼륨 조정
                document.querySelectorAll('.video').forEach((video) => {
                    video.volume = lastVolume;
                    video.muted = lastVolume == 0; // 볼륨이 0이면 음소거
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
    
            // 음소거 버튼 클릭 이벤트 처리
            const muteToggleButton = document.getElementById('mute-toggle-button');
            const muteIcon = muteToggleButton.querySelector('i');
            let isMuted = videos[0].muted;
            muteToggleButton.addEventListener('click', () => {
                document.querySelectorAll('.video').forEach((video) => {
                    video.muted = !isMuted; // 현재 상태 반전
                    if (!isMuted) {
                        video.volume = 0;
                    } else {
                        video.volume = lastVolume == 0 ? 1 : lastVolume; // 음소거 해제 시 마지막 볼륨 값 사용 (마지막 볼륨 값이 0이면 1로 설정)
                    }
                });

                // 볼륨 슬라이더와 음소거 버튼 아이콘 업데이트
                volumeSlider.value = isMuted ? (lastVolume == 0 ? 1 : lastVolume) : 0;
                muteIcon.classList.toggle('fa-volume-mute', !isMuted);
                muteIcon.classList.toggle('fa-volume-up', isMuted);
            });
        };

        // 비디오를 미리 로드하는 함수
        _this.shortsFunc.preloadVideo = (video) => {
            const src = video.getAttribute('data-src');
            if (src && !video.src) {
                video.src = src;
                video.setAttribute('data-number', videoIndex++);
            }
        };

        // 주어진 범위의 비디오를 미리 로드하는 함수
        _this.shortsFunc.preloadVideosInRange = (start, end) => {
            const videos = document.querySelectorAll('.video');
            for (let i = start; i <= end && i < videos.length; i++) {
                if (i >= 0) {
                    _this.shortsFunc.preloadVideo(videos[i]);
                }
            }
        };

        // 화면에 보이는 비디오를 재생하고 나머지 비디오는 일시 정지하는 함수
        _this.shortsFunc.playVisibleVideo = () => {
            const container = document.querySelector('.container');
            const videos = document.querySelectorAll('.video');
            let containerRect = container.getBoundingClientRect();

            videos.forEach((video, index) => {
                let videoRect = video.getBoundingClientRect();

                if (videoRect.top >= containerRect.top && videoRect.bottom <= containerRect.bottom) {
                    video.play();
                    _this.shortsFunc.preloadVideosInRange(index - 3, index + 3);
                } else {
                    video.pause();
                }
            });
        };

        // 화면에 보이는 비디오를 재생하는 함수
        _this.shortsFunc.playVisibleVideos = () => {
            const videos = document.querySelectorAll('.video');
            let containerRect = container.getBoundingClientRect();
            videos.forEach((video) => {
                let videoRect = video.getBoundingClientRect();
                if (videoRect.top >= containerRect.top && videoRect.bottom <= containerRect.bottom) {
                    video.play();
                }
            });
        };

        // 화면에 보이는 비디오를 일시 정지하는 함수
        _this.shortsFunc.pauseVisibleVideos = () => {
            const videos = document.querySelectorAll('.video');
            let containerRect = container.getBoundingClientRect();
            videos.forEach((video) => {
                let videoRect = video.getBoundingClientRect();
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

        // GNB open/close 이벤트 추가
        _this.shortsFunc.addGnbEvents = () => {
            const gnbOpen = document.querySelector('.gnb_open');
            const gnbClose = document.querySelector('.gnb_close');

            gnbOpen.addEventListener('click', () => {
                _this.shortsFunc.pauseVisibleVideos(); // GNB가 열릴 때 비디오 일시 정지
                gnbOpen.classList.remove('on');
                gnbClose.classList.add('on');
            });

            gnbClose.addEventListener('click', () => {
                _this.shortsFunc.playVisibleVideos(); // GNB가 닫힐 때 비디오 재생
                gnbClose.classList.remove('on');
                gnbOpen.classList.add('on');
            });
        };

        // 기존 비디오와 추가되는 비디오에 필요한 공통 이벤트
        _this.shortsFunc.addCommonVideoEvents = (video, playPauseButton, seekbar, container) => {
            // 더블 클릭 방지
            video.addEventListener('dblclick', (event) => event.preventDefault());
        
            // 재생/일시 정지 버튼 상태 업데이트
            video.addEventListener('play', () => _this.shortsFunc.updatePlayPauseButton(video, playPauseButton));
            video.addEventListener('pause', () => _this.shortsFunc.updatePlayPauseButton(video, playPauseButton));
        
            // seekbar 업데이트
            video.addEventListener('timeupdate', () => {
                const value = (100 / video.duration) * video.currentTime;
                seekbar.value = value;
                const progressBar = container.querySelector('.progress-bar');
                const percentage = (video.currentTime / video.duration) * 100;
                progressBar.style.width = `${percentage}%`;
            });
        
            // seekbar 변경
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
                newVideo.muted = isMuted;
                lastVolume = volumeSlider.value; // 슬라이더 값에 맞게 비디오 볼륨 조정
                newVideo.volume = lastVolume;
                newVideo.muted = lastVolume == 0; // 볼륨이 0이면 음소거

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
            // 디바운스를 사용한 playVisibleVideo 호출
            container.addEventListener('scroll', debounce(() => _this.shortsFunc.playVisibleVideo(), 100));
        };

        // 스크롤 핸들러
        _this.shortsFunc.scrollHandler = (event, direction) => {
            const container = document.querySelector('.container');
            const scrollAmount = window.innerHeight;
            const newScrollPosition = container.scrollTop + (direction === 'down' ? scrollAmount : -scrollAmount);
            container.scrollTo({
                top: Math.min(container.scrollHeight - container.clientHeight, Math.max(0, newScrollPosition)),
                behavior: 'smooth',
            });
        };

        // 마우스 휠로 스크롤 처리
        _this.shortsFunc.movingWheel = () => {
            const container = document.querySelector('.container');
            container.addEventListener('wheel', (event) => {
                if (event.deltaY > 0) {
                    _this.shortsFunc.scrollHandler(event, 'down');
                } else {
                    _this.shortsFunc.scrollHandler(event, 'up');
                }
            }, { passive: false });
        };

        // 모바일 기기에서 스크롤 처리 (안드로이드)
        _this.shortsFunc.movingAos = () => {
            let isScrolling = false;
            let startY = 0;
            const container = document.querySelector('.container');

            function handleScroll(event) {
                if (isScrolling) return;
                isScrolling = true;
                requestAnimationFrame(() => {
                    if (event.touches[0].clientY < startY) {
                        container.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                    } else {
                        container.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
                    }
                    setTimeout(() => {
                        isScrolling = false;
                    }, 500);
                });
            }

            container.addEventListener('touchstart', (event) => startY = event.touches[0].clientY);
            container.addEventListener('touchmove', handleScroll, { passive: false });
        };

        // 모바일 기기에서 스크롤 처리 (iOS)
        _this.shortsFunc.movingIos = () => {
            let startY = 0;
            let isDragging = false;
            const container = document.querySelector('.container');

            container.addEventListener('touchstart', (event) => {
                startY = event.touches[0].clientY;
                isDragging = true;
            });

            container.addEventListener('touchmove', (event) => {
                if (!isDragging) return;
                const deltaY = startY - event.touches[0].clientY;
                if (Math.abs(deltaY) > 10) {
                    event.preventDefault();
                    _this.shortsFunc.scrollHandler(event, deltaY > 0 ? 'down' : 'up');
                }
            }, { passive: false });

            container.addEventListener('touchend', () => isDragging = false);
        };

        // 모바일 장치 감지 및 적절한 스크롤 핸들러 호출
        _this.shortsFunc.detectDeviceAndScroll = () => {
            if (isMobile) {
                if (/android/i.test(navigator.userAgent.toLowerCase())) {
                    _this.shortsFunc.movingAos();
                } else {
                    _this.shortsFunc.movingIos();
                }
            } else {
                _this.shortsFunc.movingWheel();
            }
        };

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

document.addEventListener('DOMContentLoaded', () => {
    shortsEvent.init();
});