/**
* Main script files
*/

// On scroll effect
AOS.init( {
    once: true,
    offset: 0
});

jQuery(document).ready( function($){
    var swiper = new Swiper('.services-section .swiper-container', {
        spaceBetween: 30,
        slidesPerView: 3,
        navigation: {
            nextEl: '.services-navigation-next',
            prevEl: '.services-navigation-prev',
        },
        breakpoints: {
            768: {
              slidesPerView: 2
            },
            576: {
              slidesPerView: 1
            }
        }
    });

    /**
     * Show/hide fullscreen menu
     */
    ( function openCloseFullScreenMenu(){
        var menuToggleButton = $('.menu-toggle.menu-toggle--fullscreen'),
        fullscreenMenu = $('.navigation-fullscreen');

        menuToggleButton.click(function(){
            $(document.body).toggleClass('fullscreen-navigation--open');
        });
    }) ();


    /**
     * Show cookie popup and close it
     */
    ( function showCookiePopup(){
        var popup = $('.popup-cookie'),
        closeButton = $('.popup-cookie .cookie__button');

        setTimeout( function() {
            popup.addClass('popup-cookie--show')
        }, 2000 );

        // close popup on button click
        closeButton.click(function(e){
            e.preventDefault();
            popup.removeClass('popup-cookie--show');
        });
    }) ();


    /**
     * Make sticky header
     */
    ( function stickyHeader(){
        var stickyHeader = document.querySelector('.header-main'),
        headroom = new Headroom(stickyHeader, {
            classes: {
                initial: 'header-sticky',
                pinned: 'header-sticky--pinned',
                unpinned: 'header-sticky--unpinned',
                top: 'header-sticky--top',
                notTop: 'header-sticky--not-top',
                bottom: 'header-sticky--bottom',
                notBottom: 'header-sticky--not-bottom',
            }
        });

        headroom.init();
    }) ();
            
    /**
     * Scroll to top
     */
    ( function scrollToTop() {
        var scrollToTopButton = $('.scroll-to-top');

        $(window).scroll(function(){
            if ($(window).scrollTop() > 300) {
                scrollToTopButton.addClass('scroll-to-top--show');
            } else {
                scrollToTopButton.removeClass('scroll-to-top--show');
            }
        });

        scrollToTopButton.click(function(e) {
            e.preventDefault();
            
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        });
    }) ();
    
    /**
     * Smooth scrolling
     */
    ( function smoothScroll() {
        // active smooth scroll on link click
        var scroll = new SmoothScroll('a[href*="#"', {
            speed: 500
        });

        if ( typeof gumshoe !== 'undefined'	) {
            gumshoe.init({
                selector: '.menu-primary li > a',
                selectorHeader: '.header-main',
                activeClass: 'active',
            });
        }
    }) ();
});

