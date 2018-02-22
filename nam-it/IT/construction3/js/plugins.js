// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*=======================================
        PRELOADER                     
   ======================================= */
$(window).on('load', function() {
    $('#preloader').fadeOut('slow', function() {
        $(this).remove();
    });

    $(".slides__preload_wrapper").fadeOut(1500);
});

/*=======================================
        Slider                      
   ======================================= */
jQuery(document).ready(function($) {

    $(".slider_home").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        loop: true,
        autoplayTimeout: 3000, // Default is 5000
        smartSpeed: 1000, // Default is 250
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        mouseDrag: false,
        touchDrag: false,
    });

    $(".slider_home").on("translate.owl.carousel", function() {
        $(".single_slider h2, .single_slider h4, .single_slider p").removeClass("animated fadeInUp").css("opacity", "0");
        $(".single_slider .slider_btn").removeClass("animated fadeInDown").css("opacity", "0");
    });

    $(".slider_home").on("translated.owl.carousel", function() {
        $(".single_slider h2, .single_slider h4, .single_slider p").addClass("animated fadeInUp").css("opacity", "1");
        $(".single_slider .slider_btn").addClass("animated fadeInDown").css("opacity", "1");
    });

    $(".search_icon").on('click', function() {
        $(".search_icon_inr").slideToggle();
    });
    $(".shop_setting").on('click', function() {
        $(".shop_setting_inr").slideToggle();
    });

    jQuery.stellar({
        horizontalScrolling: false,
    });
});


// Place any jQuery/helper plugins in here.