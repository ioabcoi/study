
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const containers = document.querySelectorAll('.video-container');
    const videos = document.querySelectorAll('.video');
    const muteToggleButton = document.getElementById('mute-toggle-button');
    const muteIcon = muteToggleButton.querySelector('i');
    const volumeSlider = document.querySelector('.volume-slider');
    let lastVolume = 1; // ������ ���� �� �ʱ�ȭ (�⺻��: 1)

    // ������ �̸� �ε��ϴ� �Լ�
    function preloadVideo(video) {
        const src = video.getAttribute('data-src');
        if (src && !video.src) {
            video.src = src;
        }
    }

    // �־��� ������ ������ �̸� �ε��ϴ� �Լ�
    function preloadVideosInRange(start, end) {
        for (let i = start; i <= end && i < videos.length; i++) {
            if (i >= 0) {
                preloadVideo(videos[i]);
            }
        }
    }

    // ȭ�鿡 ���̴� ������ ����ϰ� ������ ������ �Ͻ� �����ϴ� �Լ�
    function playVisibleVideo() {
        let containerRect = container.getBoundingClientRect();

        videos.forEach((video, index) => {
            let videoRect = video.getBoundingClientRect();

            if (videoRect.top >= containerRect.top && videoRect.bottom <= containerRect.bottom) {
                video.play();
                // ������ ���� 10���� ������ �̸� �ε�
                preloadVideosInRange(index - 10, index + 10);
            } else {
                video.pause();
            }
        });
    }

    // ���� ȭ�鿡 ���̴� ������ ����ϴ� �Լ�
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

    // ���� ȭ�鿡 ���̴� ������ �Ͻ� �����ϴ� �Լ�
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

    // �ʱ� �ε� �� ù 10���� ���� �̸� �ε�
    preloadVideosInRange(0, 9);

    // ���/�Ͻ� ���� ��ư ���� ������Ʈ �Լ�
    function updatePlayPauseButton(video, button) {
        if (video.paused) {
            button.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            button.innerHTML = '<i class="fas fa-pause"></i>';
        }
    }

    // ���� Ŭ�� ���� �� ���� ��Ʈ�� ����
    videos.forEach((video, index) => {
        const container = containers[index];
        const playPauseButton = container.querySelector('.play-pause');
        const seekbar = container.querySelector('.seekbar'); // seekbar

        // ���� Ŭ�� �̺�Ʈ ����
        video.addEventListener('dblclick', (event) => {
            event.preventDefault();
        });

        // ���� ��� �� �Ͻ� ���� ���¿� ���� ��ư ������Ʈ
        video.addEventListener('play', () => updatePlayPauseButton(video, playPauseButton));
        video.addEventListener('pause', () => updatePlayPauseButton(video, playPauseButton));

        // ������ ���� �ð��� ���� seekbar �� ������Ʈ
        video.addEventListener('timeupdate', () => { // seekbar
            const value = (100 / video.duration) * video.currentTime;
            seekbar.value = value;
        });

        // ���� ���� ���¿� ���� progress-bar ������Ʈ
        video.addEventListener('timeupdate', () => { // progress-bar
            const progressBar = video.closest('.video-container').querySelector('.progress-bar');
            const percentage = (video.currentTime / video.duration) * 100;
            progressBar.style.width = `${percentage}%`;
        });

        // ���/�Ͻ� ���� ��ư Ŭ�� �̺�Ʈ
        playPauseButton.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });

        // seekbar ���� �̺�Ʈ
        seekbar.addEventListener('input', () => { // seekbar
            const time = video.duration * (seekbar.value / 100);
            video.currentTime = time;
        });
    });

    // ���� �����̴� ���� �̺�Ʈ
    volumeSlider.addEventListener('input', () => {
        lastVolume = volumeSlider.value; // ���� ���� ���� ����
        videos.forEach((video) => {
            video.volume = lastVolume;
            video.muted = lastVolume == 0; // ������ 0�̸� ���Ұ�
        });
    });

    // �ʱ� ���Ұ� ����
    videos.forEach(video => {
        video.muted = true;

        // ���� ���� ���� �̺�Ʈ
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

    // ���Ұ�/�Ҹ� ���� ��ư Ŭ�� �̺�Ʈ
    muteToggleButton.addEventListener('click', () => {
        let isMuted = videos[0].muted;

        videos.forEach((video) => {
            if (!isMuted) {
                video.muted = true;
                video.volume = 0;
            } else {
                video.muted = false;
                video.volume = lastVolume == 0 ? 1 : lastVolume; // ���Ұ� ���� �� ������ ���� �� ��� (������ ���� ���� 0�̸� 1�� ����)
            }
        });

        // ���� �����̴��� ���Ұ� ��ư ������ ������Ʈ
        volumeSlider.value = isMuted ? (lastVolume == 0 ? 1 : lastVolume) : 0;
        muteIcon.classList.toggle('fa-volume-mute', isMuted);
        muteIcon.classList.toggle('fa-volume-up', !isMuted);
    });

    // ��ũ�� �̺�Ʈ ó��
    container.addEventListener('scroll', () => {
        playVisibleVideo();
    });

    // �ʱ� �ε� �� ù ���� ���
    playVisibleVideo();

    // ��ũ�� ���⿡ ���� ��ũ���� ó���ϴ� �Լ�
    function scrollHandler(event, direction) {
        event.preventDefault();
        const scrollAmount = window.innerHeight;
        const newScrollPosition = container.scrollTop + (direction === 'down' ? scrollAmount : -scrollAmount);

        container.scrollTo({
            top: Math.min(container.scrollHeight - container.clientHeight, Math.max(0, newScrollPosition)),
            behavior: 'smooth'
        });
    }

    // ���콺 ���� �̿��� ��ũ�� ó��
    function movingWheel() {
        container.addEventListener('wheel', (event) => {
            if (event.deltaY > 0) {
                scrollHandler(event, 'down');
            } else if (event.deltaY < 0) {
                scrollHandler(event, 'up');
            }
        }, { passive: false });
    }

    // ����� ��⿡�� ��ũ�� ó�� (�ȵ���̵�)
    function movingAos() {
        let isScrolling = false;
        let startY = 0;

        function handleScroll(event) {
            event.preventDefault();

            if (isScrolling) return;
            isScrolling = true;

            // ��ũ�� �ִϸ��̼��� ������ �����ϰ� ��ũ���� Ƣ�� ������ ���̱� ���� requestAnimationFrame�� ����Ͽ� �̺�Ʈ �ڵ鷯�� ȣ��
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

    // ����� ��⿡�� ��ũ�� ó�� (iOS)
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

    // ����� ��ġ ���� �� ������ ��ũ�� �ڵ鷯 ȣ��
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