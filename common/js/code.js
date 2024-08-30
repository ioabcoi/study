// 테마 전환 버튼 생성 및 동작
const themeButton = document.createElement("button");
themeButton.textContent = "theme";
themeButton.classList.add("theme");

const codeWrap = document.querySelector(".code_wrap");
if (codeWrap) {
    codeWrap.prepend(themeButton);
}

themeButton.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", newTheme);
});

// 코드 복사 및 붙여넣기
document.querySelectorAll(".code_area").forEach(codeArea => {
    const codeContent = codeArea.querySelector(".code_ui .code_ui_box").innerHTML;
    const codePreview = codeArea.querySelector(".code_view .code_view_box .code_preview");
    
    if (codeContent && codePreview) {
        codePreview.insertAdjacentHTML("afterbegin", codeContent);
    }
});