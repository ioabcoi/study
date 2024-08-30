// theme
const button = document.createElement("button");
button.innerHTML = "theme";
button.classList.add("theme");
if (document.body.querySelectorAll(".code_wrap").length > 0) {
    document.querySelector(".code_wrap").prepend(button);
}
button.addEventListener('click', function(e){
    if (document.body.getAttribute("data-theme") === "light") {
        document.body.setAttribute("data-theme", "dark");
    } else {
        document.body.setAttribute("data-theme", "light");
    }
});

// code_copy
let code_area = document.querySelectorAll(".code_area");
code_area.forEach(function(target) {
    const code_copy = target.querySelector(".code_ui .code_ui_box").innerHTML;
    const code_paste = target.querySelector(".code_view .code_view_box .code_preview");
    code_paste.insertAdjacentHTML("afterbegin", code_copy);
});

/*
변수명 개선:
button을 themeButton으로, code_area를 codeAreas로 변경하여 코드의 의미를 명확히 했습니다.

중복 코드 제거:
themeButton 생성 후 querySelector로 가져온 .code_wrap에 조건적으로 prepend 처리하는 부분을 간결하게 정리했습니다.

Arrow Function 사용:
addEventListener 콜백과 forEach 루프에 화살표 함수를 사용해 코드를 간결하게 작성했습니다.

조건 체크:
코드 복사 부분에서 codeContent와 codePreview가 존재하는지 확인 후 insertAdjacentHTML을 실행하여, 예외 처리의 안정성을 높였습니다.

>> code.js
*/