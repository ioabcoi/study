// index link
$(function(){
    $(".index_area ul li > div").each(function(){
        $(this).find("> a").each(function(){
            var $link = $(this);
            var link = $link.text();
            $link.attr("href", link);
        });
    });
});