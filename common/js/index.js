/*
// jQuery
$(function(){
    // index_link
    $(".index_area ul li > div").each(function(){
        $(this).find("> .link").each(function(){
            var $link = $(this);
            var link = $link.text();
            var $preview = $(this).prev('.preview');
            $link.attr("href", link);
            $preview.attr("href", link);
        });
    });

    // mobile_preview
    $(".preview").on("click", function() {
        var href = $(this).attr("href");
        $("#mobile_preview").attr("src", href);
        return false;
    });

    // mobile_size
    $(".mobile_size ul li a").on("click", function() {
        var w = Number($(this).find('.width').text()) + 17;
        // var w = Number($(this).find('.width').text());
        var h = Number($(this).find('.height').text());
        $(".mobile_box").width(w);
        $(".mobile_box").height(h);
        return false;
    });
});
*/

// index_link
const index_area = document.querySelectorAll(".index_area .list li");
index_area.forEach(function(target) {
    if (!target.classList.contains("line")) {
        let link_box = target.querySelector(".link_box");
        let link = link_box.querySelector(".link");
        let src = link.innerText;
        link.setAttribute("href", src);
    
        if (link_box.querySelector(".preview") !== null) {
            let preview = link_box.querySelector('.preview');
            preview.setAttribute("data-href", src);
        }
    }
});

// mobile_preview
if (document.getElementsByClassName("mobile_area") !== null) {
    const mobile_preview = document.querySelector("#mobile_preview");
    const preview = document.querySelectorAll(".preview");
    preview.forEach(function(target) {
        target.addEventListener('click', function(e){
            e.preventDefault();
            const src = this.getAttribute("data-href");
            mobile_preview.setAttribute("src", src);
        });
    });
}

// mobile_size
if (document.getElementsByClassName("mobile_size") !== null) {
    const mobile_box = document.querySelector(".mobile_box");
    const size_list = document.querySelectorAll(".mobile_size ul li");
    size_list.forEach(function(target) {
        target.querySelector("a").addEventListener('click', function(e){
            e.preventDefault();
            const w = parseInt(this.querySelector('.width').innerText) + 17;
            const h = parseInt(this.querySelector('.height').innerText);
            mobile_box.setAttribute("style", `width:${w}px;height${h}px;`);
        });
    });
}