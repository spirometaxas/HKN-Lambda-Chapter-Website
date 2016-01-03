//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.scroll-top li a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Navbar swap position of drop-down menu
$(window).scroll(
    function(){
        scrollPos = $(this).scrollTop();
        windowHeight=$(window).height();
        secondPos=$('#nav').offset().top-windowHeight+300;
        if(scrollPos<secondPos){
            $("#projectmenu").removeClass("dropdown");
            $("#projectmenu").addClass("dropup");
        } else {
            $("#projectmenu").removeClass("dropup");
            $("#projectmenu").addClass("dropdown");
        }
});
