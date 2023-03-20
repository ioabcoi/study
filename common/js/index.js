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