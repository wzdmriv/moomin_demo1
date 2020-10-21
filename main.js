$(function(){
    $(window).load(function(){
        $('.contents li').each(function(i){
            $(this).delay(i * 100).css({visibility:'visible',opacity:'0'}).animate({opacity:'1'},1000);
        });
    });
});