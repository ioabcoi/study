// 탭 클릭 이동
const tabs = document.querySelectorAll(".tabs button");
const sections = document.querySelectorAll("section");
const tabMap = {};
let isScrollingByClick = false;

tabs.forEach(tab => {
    tabMap[tab.dataset.target] = tab
    tab.addEventListener("click", function(e){
        e.preventDefault();

        // 클릭 중에는 스크롤 이벤트 잠깐 비활성화
        isScrollingByClick = true;

        tabs.forEach(t => t.classList.remove("active"));
        this.classList.add("active");

        const targetSec = document.getElementById(this.dataset.target);
        targetSec.scrollIntoView({ behavior: "smooth", block: "start" });

        // 스크롤 종료 지점까지 약간 대기 후 true 해제
        setTimeout(() => {
            isScrollingByClick = false;
        }, 500); // 필요하면 조절 가능!
    });
});

function updateActiveByScroll() {
    if (isScrollingByClick) return; // ← 깜빡임 방지 핵심

    const scrollY = window.scrollY;
    const offset = 200; // 탭 높이 + 여유값. 필요하면 조정

    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        const top = rect.top + scrollY;
        const bottom = top + sec.offsetHeight;

        if (scrollY + offset >= top && scrollY + offset < bottom) {
            tabs.forEach(t => t.classList.remove("active"));
            tabMap[sec.id].classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveByScroll);
window.addEventListener("resize", updateActiveByScroll);
updateActiveByScroll();

// 마지막 섹션 넘어가면 sticky 해제 로직
const tabsBox = document.querySelector(".tabs");
const lastSec = document.getElementById("sec3");

function checkStickyEnding(){
    const rect = lastSec.getBoundingClientRect();

    // 마지막 섹션의 "아랫부분"이 화면 위로 지나가면 sticky 해제
    const lastSecBottomPass = rect.bottom < 0;

    if(lastSecBottomPass){
        tabsBox.classList.add("unfix");     // sticky 해제 클래스
    } else {
        tabsBox.classList.remove("unfix");  // sticky 정상 유지
    }
}

window.addEventListener("scroll", checkStickyEnding);
window.addEventListener("resize", checkStickyEnding);
checkStickyEnding();