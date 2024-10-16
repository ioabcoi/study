
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const containers = document.querySelectorAll('.video-container');
    const videos = document.querySelectorAll('.video');
    const muteToggleButton = document.getElementById('mute-toggle-button');
    const muteIcon = muteToggleButton.querySelector('i');
    const volumeSlider = document.querySelector('.volume-slider');
    let lastVolume = 1; // 마지막 볼륨 값 초기화 (기본값: 1)

    // 비디오를 미리 로드하는 함수
    function preloadVideo(video) {
        const src = video.getAttribute('data-src');
        if (src && !video.src) {
            video.src = src;
        }
    }

    // 주어진 범위의 비디오를 미리 로드하는 함수
    function preloadVideosInRange(start, end) {
        for (let i = start; i <= end && i < videos.length; i++) {
            if (i >= 0) {
                preloadVideo(videos[i]);
            }
        }
    }

    // 화면에 보이는 비디오를 재생하고 나머지 비디오는 일시 정지하는 함수
    function playVisibleVideo() {
        let containerRect = container.getBoundingClientRect();

        videos.forEach((video, index) => {
            let videoRect = video.getBoundingClientRect();

            if (videoRect.top >= containerRect.top && videoRect.bottom <= containerRect.bottom) {
                video.play();
                // 다음과 이전 10개의 비디오를 미리 로드
                preloadVideosInRange(index - 10, index + 10);
            } else {
                video.pause();
            }
        });
    }

    // 현재 화면에 보이는 비디오를 재생하는 함수
    function playVisibleVideos() {
        let containerRect = container.getBoundingClientRect();

        videos.forEach((video) => {
            let videoRect = video.getBoundingClientRect();

            if (videoRect.top >= containerRect.top && videoRect.bottom <= containerRect.bottom) {
                video.play();
            }
        });
    }
    // const playVisibleBtn = document.getElementById('play-visible-btn');
    // document.getElementById('play-visible-btn').addEventListener('click', playVisibleVideos);

    // 현재 화면에 보이는 비디오를 일시 정지하는 함수
    function pauseVisibleVideos() {
        let containerRect = container.getBoundingClientRect();

        videos.forEach((video) => {
            let videoRect = video.getBoundingClientRect();

            if (videoRect.top >= containerRect.top && videoRect.bottom <= containerRect.bottom) {
                video.pause();
            }
        });
    }
    // const pauseVisibleBtn = document.getElementById('pause-visible-btn');
    // document.getElementById('pause-visible-btn').addEventListener('click', pauseVisibleVideos);

    // gnb open/close 
    const gnbOpen = document.querySelector('.gnb_open');
    gnbOpen.addEventListener('click', () => {
        pauseVisibleVideos();
        gnbOpen.classList.remove('on');
        gnbClose.classList.add('on');
    });
    const gnbClose = document.querySelector('.gnb_close');
    gnbClose.addEventListener('click', () => {
        playVisibleVideos();
        gnbClose.classList.remove('on');
        gnbOpen.classList.add('on');
    });

    // 초기 로드 시 첫 10개의 비디오 미리 로드
    preloadVideosInRange(0, 9);

    // 재생/일시 정지 버튼 상태 업데이트 함수
    function updatePlayPauseButton(video, button) {
        if (video.paused) {
            button.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            button.innerHTML = '<i class="fas fa-pause"></i>';
        }
    }

    // 더블 클릭 방지 및 비디오 컨트롤 설정
    videos.forEach((video, index) => {
        const container = containers[index];
        const playPauseButton = container.querySelector('.play-pause');
        const seekbar = container.querySelector('.seekbar'); // seekbar

        // 더블 클릭 이벤트 방지
        video.addEventListener('dblclick', (event) => {
            event.preventDefault();
        });

        // 비디오 재생 및 일시 정지 상태에 따른 버튼 업데이트
        video.addEventListener('play', () => updatePlayPauseButton(video, playPauseButton));
        video.addEventListener('pause', () => updatePlayPauseButton(video, playPauseButton));

        // 비디오의 현재 시간에 따라 seekbar 값 업데이트
        video.addEventListener('timeupdate', () => { // seekbar
            const value = (100 / video.duration) * video.currentTime;
            seekbar.value = value;
        });

        // 비디오 진행 상태에 따른 progress-bar 업데이트
        video.addEventListener('timeupdate', () => { // progress-bar
            const progressBar = video.closest('.video-container').querySelector('.progress-bar');
            const percentage = (video.currentTime / video.duration) * 100;
            progressBar.style.width = `${percentage}%`;
        });

        // 재생/일시 정지 버튼 클릭 이벤트
        playPauseButton.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });

        // seekbar 변경 이벤트
        seekbar.addEventListener('input', () => { // seekbar
            const time = video.duration * (seekbar.value / 100);
            video.currentTime = time;
        });
    });

    // 볼륨 슬라이더 변경 이벤트
    volumeSlider.addEventListener('input', () => {
        lastVolume = volumeSlider.value; // 현재 볼륨 값을 저장
        videos.forEach((video) => {
            video.volume = lastVolume;
            video.muted = lastVolume == 0; // 볼륨이 0이면 음소거
        });
    });

    // 초기 음소거 설정
    videos.forEach(video => {
        video.muted = true;

        // 비디오 볼륨 변경 이벤트
        video.addEventListener('volumechange', () => {
            if (video.muted) {
                muteIcon.parentNode.classList.add('mute');
                muteIcon.className = 'fas fa-volume-mute';
            } else {
                muteIcon.parentNode.classList.remove('mute');
                muteIcon.className = 'fas fa-volume-up';
            }
        });
    });

    // 음소거/소리 조절 버튼 클릭 이벤트
    muteToggleButton.addEventListener('click', () => {
        let isMuted = videos[0].muted;

        videos.forEach((video) => {
            if (!isMuted) {
                video.muted = true;
                video.volume = 0;
            } else {
                video.muted = false;
                video.volume = lastVolume == 0 ? 1 : lastVolume; // 음소거 해제 시 마지막 볼륨 값 사용 (마지막 볼륨 값이 0이면 1로 설정)
            }
        });

        // 볼륨 슬라이더와 음소거 버튼 아이콘 업데이트
        volumeSlider.value = isMuted ? (lastVolume == 0 ? 1 : lastVolume) : 0;
        muteIcon.classList.toggle('fa-volume-mute', isMuted);
        muteIcon.classList.toggle('fa-volume-up', !isMuted);
    });

    // 스크롤 이벤트 처리
    container.addEventListener('scroll', () => {
        playVisibleVideo();
    });

    // 초기 로드 시 첫 비디오 재생
    playVisibleVideo();

    // 스크롤 방향에 따라 스크롤을 처리하는 함수
    function scrollHandler(event, direction) {
        event.preventDefault();
        const scrollAmount = window.innerHeight;
        const newScrollPosition = container.scrollTop + (direction === 'down' ? scrollAmount : -scrollAmount);

        container.scrollTo({
            top: Math.min(container.scrollHeight - container.clientHeight, Math.max(0, newScrollPosition)),
            behavior: 'smooth'
        });
    }

    // 마우스 휠을 이용한 스크롤 처리
    function movingWheel() {
        container.addEventListener('wheel', (event) => {
            if (event.deltaY > 0) {
                scrollHandler(event, 'down');
            } else if (event.deltaY < 0) {
                scrollHandler(event, 'up');
            }
        }, { passive: false });
    }

    // 모바일 기기에서 스크롤 처리 (안드로이드)
    function movingAos() {
        let isScrolling = false;
        let startY = 0;

        function handleScroll(event) {
            event.preventDefault();

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
    }

    // 모바일 기기에서 스크롤 처리 (iOS)
    function movingIos() {
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
                event.preventDefault();
            }
        }, { passive: false });

        container.addEventListener('touchend', (event) => {
            if (!isDragging) return;

            const endY = event.changedTouches[0].clientY;
            const deltaY = startY - endY;
            if (Math.abs(deltaY) > threshold) {
                scrollHandler(event, deltaY > 0 ? 'down' : 'up');
            }

            isDragging = false;
        }, { passive: false });
    }

    // 모바일 장치 감지 및 적절한 스크롤 핸들러 호출
    const isMobile = /iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase());
    if (isMobile) {
        if (/android/i.test(navigator.userAgent.toLowerCase())) {
            movingAos();
        } else {
            movingIos();
        }
    } else {
        movingWheel();
    }
});