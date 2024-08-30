// index_link
document.querySelectorAll(".index_area .list li").forEach(target => {
    const linkBox = target.querySelector(".link_box");
    const link = linkBox?.querySelector(".link");

    if (link) {
        const hrefValue = link.textContent.trim();
        link.setAttribute("href", hrefValue);

        const preview = linkBox.querySelector(".preview");
        if (preview) {
            preview.setAttribute("data-href", hrefValue);
        }
    }
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