/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    800,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('#fader').scrollspy({
        target: "#sideNav",
    });

    // Fading in
    $(window).on("load", function () {
        $('#navigationP').collapse('show');
        $('#fader').fadeIn(600);
    });

    // Fading out
    $('#index').click(function (e) {
        e.preventDefault();
        $('#navigationP').collapse('hide');
        $('#fader').fadeOut(200, function() {window.location.replace('index.html');});
    });

    // Fading out
    $('#portfolio').click(function (e) {
        e.preventDefault();
        $('#fader').fadeOut(200, function() {window.location.replace('portfolio.html');});
    });

})(jQuery); // End of use strict
