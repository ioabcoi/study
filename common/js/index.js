// index_link
document.querySelectorAll(".index_area .list").forEach(list => {
    list.querySelectorAll(".link_box").forEach(linkBox => {
        const link = linkBox.querySelector(".link");
    
        if (link) {
            const hrefValue = link.textContent.trim();
            link.setAttribute("href", hrefValue);
    
            if (hrefValue.includes("_old")) {
                link.classList.add("old");
            }
    
            const preview = linkBox.querySelector(".preview");
            if (preview) {
                preview.setAttribute("data-href", hrefValue);
            }
        }
    });
});

// mobile_preview
const mobilePreviewFrame = document.querySelector("#mobile_preview");
if (mobilePreviewFrame) {
    document.querySelectorAll(".preview").forEach(preview => {
        preview.addEventListener('click', event => {
            event.preventDefault();
            const src = preview.getAttribute("data-href");
            if (src) {
                mobilePreviewFrame.setAttribute("src", src);
            }
        });
    });
}

// mobile_size
const mobileBox = document.querySelector(".mobile_box");
if (mobileBox) {
    document.querySelectorAll(".mobile_size ul li a").forEach(anchor => {
        anchor.addEventListener('click', event => {
            event.preventDefault();
            const width = parseInt(anchor.querySelector('.width').textContent.trim(), 10) + 17;
            const height = parseInt(anchor.querySelector('.height').textContent.trim(), 10);
            mobileBox.style.width = `${width}px`;
            mobileBox.style.height = `${height}px`;
        });
    });
}