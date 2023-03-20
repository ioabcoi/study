// index link
$(function(){
    $(".index_area ul li > div").each(function(){
        $(this).find("> .link").each(function(){
            var $link = $(this);
            var link = $link.text();
            var $preview = $(this).prev('.preview');
            $link.attr("href", link);
            $preview.attr("href", link);
        });
    });

    // iframe
    $(".preview").on("click", function() {
        var href = $(this).attr("href");
        $("#mobile_preview").attr("src", href);
        return false;
    });

    /*
    // ajax
    $(".preview").on("click", function() {
        var href = $(this).attr("href");
        $.ajax({
            url : "href",
            success : function(result) {
                $(".mobile_box").html(result);
            }
        });
        return false;
    });  

    // $("#mobile_preview").mCustomScrollbar();
    $(".mobile_box").mCustomScrollbar();

    $(".preview").on("click", function() {
        var href = $(this).attr("href");
        $(".mobile_box").load(href);
        return false;
    });
    */

    $(".mobile_size ul li a").on("click", function() {
        // var w = Number($(this).find('.width').text()) + 20;
        var w = Number($(this).find('.width').text());
        var h = Number($(this).find('.height').text());
        $(".mobile_box").width(w);
        $(".mobile_box").height(h);
        return false;
    });
});