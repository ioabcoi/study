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
index_area.forEach(function (target) {
    if (target.hasChildNodes() && target.querySelector(".link_box") !== null) {
        const link_box = target.querySelector(".link_box");
        if (target.hasChildNodes() && target.querySelector(".link") !== null) {
            const link = link_box.querySelector(".link");
            const src = link.innerText;
            link.setAttribute("href", src);
            if (link_box.querySelector(".preview") !== null) {
                let preview = link_box.querySelector('.preview');
                preview.setAttribute("data-href", src);
            }
        }
    }
});

// mobile_preview
if (document.getElementsByClassName("mobile_area") !== null) {
    const mobile_preview = document.querySelector("#mobile_preview");
    const preview = document.querySelectorAll(".preview");
    preview.forEach(function (target) {
        target.addEventListener('click', function (e) {
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
    size_list.forEach(function (target) {
        target.querySelector("a").addEventListener('click', function (e) {
            e.preventDefault();
            const w = parseInt(this.querySelector('.width').innerText) + 17;
            const h = parseInt(this.querySelector('.height').innerText);
            mobile_box.setAttribute("style", `width:${w}px;height${h}px;`);
        });
    });
}

/*
조건문 간결화:
querySelector를 사용한 후 해당 요소가 존재하는지 ?. (Optional Chaining)로 간결하게 확인합니다.

이벤트 핸들러 단순화:
이벤트 핸들러에서 event.preventDefault() 호출 후 필요한 작업을 수행하는 방식으로 구조를 간단하게 했습니다.

변수명 명확화:
예를 들어, src 대신 hrefValue, mobile_preview 대신 mobilePreviewFrame 등으로 변수명을 명확하게 정의하여, 코드를 더 쉽게 이해할 수 있도록 했습니다.

스타일 설정:
mobileBox.style.width 및 mobileBox.style.height를 사용해 style 속성을 설정하는 부분을 간결하게 처리했습니다.

중복 코드 제거:
if 조건에서 동일한 요소가 두 번 이상 호출되지 않도록 수정했습니다.

>> index.js
*/