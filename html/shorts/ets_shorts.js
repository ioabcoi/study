var etsShorts = etsShorts || {};

etsShorts.main = {
    shortsFunc() {
        const _this = this;
        let currentVideo = null;
        
        _this.shortsFunc.init = () => {
            const main = document.querySelector('.shorts_main');
            const videoContainers = main.querySelectorAll('.video-container');
            const videos = main.querySelectorAll('.video-container video');
            const muteButton = document.querySelector('.mute-button');
            const container = document.querySelector('.shorts_container');

            // Video playback control with IntersectionObserver (IntersectionObserver를 이용한 비디오 재생 제어)
            const observerOptions = {
                root: null,
                threshold: 0.8
            };

            // observer (IntersectionObserver 초기화)
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const videoContainer = entry.target.closest('.video-container');
                    const videoURL = videoContainer ? videoContainer.getAttribute('data-url') : null;
                    const btn = entry.target.parentNode.parentNode.querySelector('.btn_play');

                    if (entry.isIntersecting) {
                        currentVideo = entry.target; // Track the currently visible video

                        // 비디오가 화면에 보일 때 자동 재생 시도
                        entry.target.play().catch(error => {
                            console.log('Auto-play prevented, user interaction required.');
                        });
                        btn.classList.remove('stop');

                        // data-url : URL 주소 표시줄만 변경
                        if (videoURL) {
                            // 주소 표시줄 변경 (페이지 새로 고침 없음)
                            history.pushState(null, null, `#${videoURL}`);
                        }
                    } else {
                        if (entry.target === currentVideo) {
                            currentVideo = null; // Reset currentVideo if it goes out of view
                        }
                            
                        // 비디오가 화면에서 벗어나면 일시정지
                        entry.target.pause();
                        btn.classList.add('stop');
                    }
                });
            }, observerOptions);

            // gnb open, close - video play, pause
            if (!document.querySelector('.ets_wrap.main').classList.contains('shorts')) {
                // main + shorts (shorts와 main 페이지에서 공통적으로 실행되는 로직)
                const layerButton = document.querySelector('.ets_header .btn_side');
                const layerButtonClose = document.querySelector('.ets_gnb .btn_close');

                // 사이드 메뉴 열기 시 모든 비디오 일시정지
                layerButton.addEventListener('click', () => {
                    main.querySelectorAll('.video-container video').forEach(video => {
                        video.pause();
                        const playstop = video.closest('.video-container').querySelector('.btn_play');
                        playstop.classList.add('stop');
                    });
                });
                
                // 사이드 메뉴 닫기 시 이전 비디오 재생
                layerButtonClose.addEventListener('click', () => {
                    if (currentVideo) {
                        currentVideo.play().catch(error => {
                            console.log('Playback failed, user interaction might be required.');
                        });
                    }
                    main.querySelectorAll('.video-container video').forEach(video => {
                        const playstop = video.closest('.video-container').querySelector('.btn_play');
                        playstop.classList.remove('stop');
                    });
                });
            }

            // 비디오와 관련된 이벤트 추가 (비디오 컨테이너와 observer 전달)
            _this.shortsFunc.addEvents(videoContainers, videos, observer);

            // 스크롤 이벤트 추가 (스크롤 관련 처리)
            _this.shortsFunc.addScrollEvents(container);

            // Mute 버튼 클릭 이벤트
            muteButton.addEventListener('click', () => {
                _this.shortsFunc.toggleMute(main, muteButton);
            });

            // 새로운 비디오를 추가하는 버튼 이벤트
            const btnAppend = document.querySelector('.btn_append');
            if (btnAppend) {
                btnAppend.addEventListener('click', () => {
                    const videos = main.querySelectorAll('.video-container video'); // 모든 비디오를 가져옴
                    const isMuted = videos[0].muted; // 현재 mute 상태 가져오기
                    
                    const newVideoContainer = _this.shortsFunc.appendNewVideo(main); // 새로운 비디오 추가
                    // etoosUI.main.shortsFunc.appendNewVideo(main);
                    _this.shortsFunc.applyEventsToNewVideo(newVideoContainer, observer, main, muteButton, isMuted); // mute 상태 적용 
                    // etoosUI.main.shortsFunc.appendEvent(observer, main, muteButton);
                });
            }
        }

        // 각 비디오에 필요한 이벤트 추가
        _this.shortsFunc.addEvents = (videoContainers, videos, observer) => {
            videos.forEach(video => {
                observer.observe(video); // IntersectionObserver로 비디오 관찰
    
                video.addEventListener('timeupdate', () => {
                    const progressBar = video.closest('.video-container').querySelector('.progress-bar');
                    const percentage = (video.currentTime / video.duration) * 100;
                    progressBar.style.width = `${percentage}%`; // 재생 시간에 따른 진행바 업데이트
                });
            });

            videoContainers.forEach(container => {
                const videoBox = container.querySelector('.video-box');
                const video = container.querySelector('video');

                // 비디오 박스를 클릭하면 play/pause 전환
                videoBox.addEventListener('click', () => {
                    _this.shortsFunc.playPauseVideo(video, container);
                });

                // 재생/일시정지 버튼 클릭
                container.querySelector('.btn_play').addEventListener('click', (e) => {
                    _this.shortsFunc.playPauseVideo(video, container);
                });

                // 좋아요 버튼 클릭 시 상태 변경
                if (container.getElementsByClassName('btn_like').length > 0) {
                    const btnLike = container.querySelector('.btn_like');
                    btnLike.addEventListener('click', (event) => {
                        event.target.classList.toggle('on');
                    });
                }

                // 제목 클릭 시 ellipsis 토글 (줄임말 효과 토글)
                if (container.getElementsByClassName('description-title').length > 0) {
                    const descriptionTitle = container.querySelector('.description-title');
                    descriptionTitle.addEventListener('click', (event) => {
                        event.target.classList.toggle('ellipsis');
                    });
                }
            });
        };

        // 비디오 play/pause 기능
        _this.shortsFunc.playPauseVideo = (video, container) => {
            const playstop = container.querySelector('.btn_play');
            if (video.paused) {
                video.play();
                playstop.classList.remove('stop');
            } else {
                video.pause();
                playstop.classList.add('stop');
            }
        };

        // 비디오의 초기 상태를 설정 (비디오 추가 시)
        _this.shortsFunc.initMute = (main, muteButton) => {
            const isMuted = main.querySelectorAll('video')[0].muted;
            main.querySelectorAll('video').forEach(video => {
                video.muted = isMuted; // 비디오의 음소거 상태를 설정
            });
            if (isMuted) {
                muteButton.classList.add('mute');
                muteButton.querySelector('.blind').textContent = 'Mute All';
                main.querySelectorAll('.video-container').forEach(volume => {
                    volume.querySelector('.btn_volume').classList.add('mute');
                });
            } else {
                muteButton.classList.remove('mute');
                muteButton.querySelector('.blind').textContent = 'Unmute All';
                main.querySelectorAll('.video-container').forEach(volume => {
                    volume.querySelector('.btn_volume').classList.remove('mute');
                });
            }
        };
        
        // 음소거 상태를 전환 (사용자 인터페이스에서 클릭 시)
        _this.shortsFunc.toggleMute = (main, muteButton) => {
            const isMuted = main.querySelectorAll('video')[0].muted;
            main.querySelectorAll('video').forEach(video => {
                video.muted = !isMuted; // 현재 상태 반전
            });
            if (!isMuted) {
                muteButton.classList.add('mute');
                muteButton.querySelector('.blind').textContent = 'Mute All';
                main.querySelectorAll('.video-container').forEach(volume => {
                    volume.querySelector('.btn_volume').classList.add('mute');
                });
            } else {
                muteButton.classList.remove('mute');
                muteButton.querySelector('.blind').textContent = 'Unmute All';
                main.querySelectorAll('.video-container').forEach(volume => {
                    volume.querySelector('.btn_volume').classList.remove('mute');
                });
            }
        };

        // 새로운 비디오 생성
        _this.shortsFunc.createNewVideoContainer = () => {
            const newVideoContainer = document.createElement('div');
            newVideoContainer.classList.add('video-container');
            newVideoContainer.setAttribute('data-url', 'video-4');
            newVideoContainer.innerHTML = `
                <div class="video-box">
                    <video class="video" src="https://freevod.etoos.com/qr/shorts/sample/youtube/11sec_200391_720.mp4"  playsinline loop muted></video>
                </div>
                <!-- video-control -->
                <div class="btn_play">play</div>
                <div class="video-description">
                    <div class="description-teacher">
                        <span class="img"><img src="https://img.etoos.com/teacher/teacher/200391/m300x300.png" alt=""></span>
                        <span class="name"><strong class="subj">사탐</strong> 이지영</span>
                    </div>
                    <div class="description-info">
                        <p class="description-title ellipsis">영상 제목 노출(1줄 글자수 까지만 노출 이하 ‘...’  처리, 글자수 최대 80 자) 까지 작성 가능, 두 줄 이상 시 해당 글 클릭하면 상단 높이가 길어지며 전체 글자수 노출)</p>
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
                    <div class="btn_ico btn_volume mute"><span class="txt">소리</span></div>
                    <button class="btn_ico btn_view"><span class="blind">조회수</span><span class="txt">1.8만</span></button>
                    <button class="btn_ico btn_like"><span class="blind">좋아요</span><span class="txt">1.8만</span></button>
                    <button class="btn_ico btn_share"><span class="blind">공유</span><span class="txt">공유</span></button>
                    <button class="btn_ico btn_more"><span class="blind">더보기</span><span class="txt">더보기</span></button>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar"></div>
                </div>
            `;
            return newVideoContainer;
        };
        
        // 새로운 비디오를 DOM에 추가
        _this.shortsFunc.appendNewVideo = (main) => {
            const newVideoContainer = _this.shortsFunc.createNewVideoContainer(); // 새 비디오 컨테이너 생성
            main.appendChild(newVideoContainer); // 메인 컨테이너에 새 비디오 추가
            return newVideoContainer; // 새 비디오 컨테이너 반환
        };

        // append 후 이벤트 적용
        _this.shortsFunc.applyEventsToNewVideo = (newVideoContainer, observer, main, muteButton, isMuted) => {
            const newVideo = newVideoContainer.querySelector('video');
            observer.observe(newVideo); // 새로운 비디오 관찰 시작

            newVideo.addEventListener('timeupdate', () => {
                const progressBar = newVideoContainer.querySelector('.progress-bar');
                const percentage = (newVideo.currentTime / newVideo.duration) * 100;
                progressBar.style.width = `${percentage}%`;
            });

            // 기존의 비디오와 동일한 방식으로 이벤트 추가
            const videoBox = newVideoContainer.querySelector('.video-box');
            videoBox.addEventListener('click', () => {
                _this.shortsFunc.playPauseVideo(newVideo, newVideoContainer);
            });
    
            const playButton = newVideoContainer.querySelector('.btn_play');
            playButton.addEventListener('click', () => {
                _this.shortsFunc.playPauseVideo(newVideo, newVideoContainer);
            });
    
            if (newVideoContainer.getElementsByClassName('btn_like').length > 0) {
                const btnLike = newVideoContainer.querySelector('.btn_like');
                btnLike.addEventListener('click', (event) => {
                    event.target.classList.toggle('on');
                });
            }
    
            if (newVideoContainer.getElementsByClassName('description-title').length > 0) {
                const descriptionTitle = newVideoContainer.querySelector('.description-title');
                descriptionTitle.addEventListener('click', (event) => {
                    event.target.classList.toggle('ellipsis');
                });
            }

            // 추가된 비디오에 mute 상태 초기화
            newVideo.muted = isMuted;
        
            // 전체 비디오에 mute 상태 적용
            _this.shortsFunc.initMute(main, muteButton);
        };

        // 스크롤 이벤트 추가
        _this.shortsFunc.addScrollEvents = (container) => {
            const isMobile = /iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase());
    
            if (isMobile) {
                if (/android/i.test(navigator.userAgent.toLowerCase())) {
                    _this.shortsFunc.movingAos(container);
                } else {
                    _this.shortsFunc.movingIos(container);
                }
            } else {
                _this.shortsFunc.movingWheel(container);
            }
        };

        // 스크롤 방향에 따라 스크롤을 처리하는 함수
        _this.shortsFunc.scrollHandler = (event, container, direction) => {
            if (event.cancelable) event.preventDefault();
            const scrollAmount = window.innerHeight;
            const newScrollPosition = container.scrollTop + (direction === 'down' ? scrollAmount : -scrollAmount);
    
            container.scrollTo({
                top: Math.min(container.scrollHeight - container.clientHeight, Math.max(0, newScrollPosition)),
                behavior: 'smooth'
            });
        };

        // 마우스 휠을 이용한 스크롤 처리
        _this.shortsFunc.movingWheel = (container) => {
            container.addEventListener('wheel', (event) => {
                if (event.deltaY > 0) {
                    _this.shortsFunc.scrollHandler(event, container, 'down');
                } else if (event.deltaY < 0) {
                    _this.shortsFunc.scrollHandler(event, container, 'up');
                }
            }, { passive: false });
        };

        // 모바일 기기에서 스크롤 처리 (안드로이드)
        _this.shortsFunc.movingAos = (container) => {
            let isScrolling = false;
            let startY = 0;
    
            function handleScroll(event) {
                if (event.cancelable) event.preventDefault();
                if (isScrolling) return;
    
                isScrolling = true;

                // 스크롤 애니메이션의 성능을 개선하고 스크롤이 튀는 현상을 줄이기 위해 requestAnimationFrame을 사용하여 이벤트 핸들러를 호출
                requestAnimationFrame(() => {
                    if (event.deltaY > 0 || (event.touches && event.touches[0].clientY < startY)) {
                        container.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                    } else if (event.deltaY < 0 || (event.touches && event.touches[0].clientY > startY)) {
                        container.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
                    }
                    setTimeout(() => {
                        isScrolling = false;
                    }, 500);
                });
            }
    
            container.addEventListener('touchstart', (event) => {
                startY = event.touches[0].clientY;
            }, { passive: false });
    
            container.addEventListener('touchmove', handleScroll, { passive: false });
        };

        // 모바일 기기에서 스크롤 처리 (iOS)
        _this.shortsFunc.movingIos = (container) => {
            let startY = 0;
            let isDragging = false;
            let threshold = 10;
    
            container.addEventListener('touchstart', (event) => {
                startY = event.touches[0].clientY;
                isDragging = true;
            });
    
            container.addEventListener('touchmove', (event) => {
                if (!isDragging) return;
    
                const currentY = event.touches[0].clientY;
                const deltaY = startY - currentY;
    
                if (Math.abs(deltaY) > threshold) {
                    if (event.cancelable) event.preventDefault();
                }
            }, { passive: false });
    
            container.addEventListener('touchend', (event) => {
                if (!isDragging) return;
    
                const endY = event.changedTouches[0].clientY;
                const deltaY = startY - endY;
                if (Math.abs(deltaY) > threshold) {
                    _this.shortsFunc.scrollHandler(event, container, deltaY > 0 ? 'down' : 'up');
                }
    
                isDragging = false;
            }, { passive: false });
        };

        _this.shortsFunc.init();
    },
    init() {
        this.shortsFunc();
    }
};

/* INIT */
etsShorts.init = () => {
    etsShorts.main.init();
};

etsShorts.init();