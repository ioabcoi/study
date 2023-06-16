// theme
const button = document.createElement("button");
button.innerHTML = "theme";
button.classList.add("theme");
document.querySelector(".code_wrap").prepend(button);
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