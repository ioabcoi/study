// table link
$(function(){
    $("table").each(function(){
        $(this).find("> tbody tr").each(function(){
            $(this).find("> td a").each(function(){
                var $link = $(this);
                var link = $link.text();
                $link.attr("href", link);
            });
        });
    });
});