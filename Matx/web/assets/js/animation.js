$(function () {
    uiAnimation.init();

});

var uiAnimation = {
    init: function () {
        uiAnimation.currentSection();
        // uiAnimation.countUp();
        uiAnimation.parallaxBg();
        uiAnimation.ripple();
    },

    //
    currentSection: function () {
        var controller = new ScrollMagic.Controller();

        $('section').each(function () {
            var self = $(this);
            var tween = TweenMax.staggerFrom(self.find('.item'), 0.6, {y: 30, opacity: 0}, 0.2);
            var scene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.7,
                // duration : '100%'
            });

            scene
                .setTween(tween)
                //    .addIndicators()
                .addTo(controller)
        })
    },

    parallaxBg: function () {
        var self = $(this);
        var controller = new ScrollMagic.Controller();

        $('.parallax-trigger').each(function () {
            var tween = TweenMax.to($(this).find('.parallax-bg'), 1, {y: '-50%'});
            var scene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 1,
                duration: '150%'
            });
            scene.setTween(tween)
            //    .addIndicators()
                .addTo(controller);
        });
    },

    ripple: function () {
        $.ripple('.aniRipple', {
            debug: false, // Turn Ripple.js logging on/off
            on: 'mousedown', // The event to trigger a ripple effect

            opacity: 0.4, // The opacity of the ripple
            color: "auto", // Set the background color. If set to "auto", it will use the text color
            multi: false, // Allow multiple ripples per element

            duration: 0.3, // The duration of the ripple

            // Filter function for modifying the speed of the ripple
            rate: function (pxPerSecond) {
                return pxPerSecond;
            },

            easing: 'linear' // The CSS3 easing function of the ripple
        });
    },

  /*  test: function () {
        !function (a) {
            "use strict";

            function b(b) {
                var c = a('link[href*="color-"]'), b = b + ".css";
                if (c.length > 0) {
                    var d, e, f;
                    if (d = c.attr("href"), e = d.split("/").pop(), e == b) return;
                    f = d.replace(e, b), c.attr("href", f)
                } else {
                    var g, h, f;
                    g = a('link[href*="common.css"]').attr("href"), h = g.substring(0, g.lastIndexOf("/") + 1), f = h + b, a("head").append('<link rel="stylesheet" href="' + f + '" >')
                }
            }

            a("document").ready(function () {
                a("#matx-option-panel-toggle").on("click", function (b) {
                    b.preventDefault(), a(this).closest(".matx-option-panel-box").toggleClass("active-panel")
                })
            }), a(".matx-colors li a").on("click", function (c) {
                c.preventDefault(), b(a(this).attr("id"))
            })
        }(jQuery);
    }*/

};