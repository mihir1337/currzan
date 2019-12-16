/* ------------------------------------------ */
/*             TABLE OF CONTENTS

1.  preloader
2.  Bootstrap tooltip
3.  Sticky Header
4.  Nice select
5.  Mobile menu js
6.  Search Popup
7.  Counter js
8.  Video play js
9.  WOW Animation
10. IsoTop Js
11. scroll to top js
12. Owl Carousel
    - Homepage Slider
    - case -study carousel
    - service carousel
    - latest news carousel
    - Testimonial carousel
    - Claint carousel
/* ------------------------------------------ */
(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        // preloader
        $(window).on("load", function () {
            $("#preloader").delay(300).animate({
                "opacity": "0"
            }, 300, function () {
                $("#preloader").css("display", "none");
            });
        });

        // Bootstrap tooltip
        $('[data-toggle="tooltip"]').tooltip();

        // Sticky Header
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('.theme-menu-wrapper').addClass("sticky");
            } else {
                $('.theme-menu-wrapper').removeClass("sticky");
            }
        });

        // Nice select
        var niceSelect = $('#lang');
        niceSelect.niceSelect({});

        // Mobile menu js
        $('#navMenu').slicknav({
            prependTo: ".mobile-menu",
            label: ""
        });

        // Search Popup
        var fullscreenSearch = $('.fullscreen-search').hide();
        $('.searchTrigger').on('click', function() {
            fullscreenSearch.fadeIn();
        });
        $('.search-close').on('click', function() {
            fullscreenSearch.fadeOut(600);
        });

        // Counter js
        $(".count").counterUp({
            delay: 15,
            time: 2000
        });

        // Video play js
        $(".video-play-btn").modalVideo({
            youtube: {
                controls: 0,
                nocookie: true
            }
        });

        // WOW Animation 
        new WOW().init();

        // IsoTop Js
        $(".protfolio-filter li").on('click', function () {

            $(".protfolio-filter li").removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $(".protfolio-list").isotope({
                filter: selector
            });
        });

        // scroll to top js
        var scroll = $("#scroll-top");
        scroll.on('click', function () {
            $('html , body').animate({
                scrollTop: 0
            }, 1000);
        });
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                scroll.fadeIn();
            } else {
                scroll.fadeOut();
            }
        });

        // Homepage Slider
        var slider = $('.homepage-slider');
        slider.owlCarousel({
            items: 1,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            loop: true,
            slideSpeed: 3000,
            dots: true,
            autoplay: true,
            nav: true,
            navText: ["<i class='zmdi zmdi zmdi-chevron-left'></i>", "<i class='zmdi zmdi-chevron-right'></>"]
        });
        slider.on('translate.owl.carousel', function() {
            var layer = $("[data-animation]");
            layer.each(function() {
                var s_animation = $(this).data('animation');
                $(this).removeClass('animated ' + s_animation).css('opacity', '0');
            });
        });
        $("[data-delay]").each(function() {
            var animation_del = $(this).data('delay');
            $(this).css('animation-delay', animation_del);
        });
        $("[data-duration]").each(function() {
            var animation_dur = $(this).data('duration');
            $(this).css('animation-duration', animation_dur);
        });
        slider.on('translated.owl.carousel', function() {
            var layer = slider.find('.owl-item.active').find("[data-animation]");
            layer.each(function() {
                var s_animation = $(this).data('animation');
                $(this).addClass('animated ' + s_animation).css("opacity", "1");
            });
        });

        // case-study carousel
        $(".case-study-carousel").owlCarousel({
            items: 3,
            loop: true,
            pagination: true,
            navigation: true,
            navigationText: ["", ""],
            slideSpeed: 2000,
            autoplay: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                }
            }
        });

        // service carousel
        $(".service-carousel").owlCarousel({
            items: 3,
            loop: true,
            pagination: true,
            navigation: true,
            autoplay: true,
            navigationText: ["", ""],
            slideSpeed: 2000,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                }
            }
        });

        // latest-news carousel
        $(".lates-news-carousel").owlCarousel({
            items: 3,
            loop: true,
            pagination: true,
            navigation: true,
            autoplay: true,
            navigationText: ["", ""],
            slideSpeed: 2000,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                }
            }
        });

        // Testimonial carousel
        $(".tesitmonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            pagination: true,
            navigation: true,
            autoplay: true,
            slideSpeed: 2000,
            navigationText: ["", ""],
            slideSpeed: 1000
        });

        // Claint carousel
        $(".claint-carousel").owlCarousel({
            items: 5,
            loop: true,
            margin: 30,
            autoplay: true,
            responsiveClass: true,
            slideSpeed: 2000,
            responsive: {
                0: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                991: {
                    items: 5,
                }
            }
        });

    });


}(jQuery));