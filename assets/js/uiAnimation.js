$(function () {
    /**
     * portfolio user interface animation
     */

    uiAnimation.init();
});


var uiAnimation = {
    init: function () {
        uiAnimation.fadeInUp();
        uiAnimation.sloganBanner();
        // uiAnimation.miniBubble();
    },

    fadeInUp: function () {
        // TweenMax.staggerFrom('.fadeInUp-item', 1, {y:40, opacity:0}, 0.15);

        $('.trigger-fadeInUp').each(function () {
            var self = $(this);
            var controller = new ScrollMagic.Controller();

            var tween = TweenMax.staggerFrom($(this).find('.fadeInUp-item'), 1, {y: 40, opacity: 0}, 0.15);

            var scene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.7
            });
            scene.setTween(tween)
            //     .addIndicators()
                .addTo(controller);

        })
    },

    miniBubble: function () {
        var tl = new TimelineMax({repeat: -1, yoyo: true}),
            text = $(".mini-bubble"),
            split = new SplitText(text, {type: "chars"}),
            rough = RoughEase.ease.config({strength: 2, clamp: true}),
            i;

        tl.set(text, {autoAlpha: 1})

        for (i = 0; i < split.chars.length; i++) {
            tl.fromTo(split.chars[i], 1, {
                transformOrigin: "center 20px",
                opacity: 0,
                rotation: ((Math.random() < 0.5) ? 90 : -90)
            }, {rotation: 0, opacity: 1, ease: Elastic.easeOut}, 0.3 + i * 0.06);

            //   tl.to(split.chars[i], 0.6, {y:96,  ease:Bounce.easeOut}, 3.4 + Math.random() * 0.6);
            //   tl.to(split.chars[i], 0.6, {autoAlpha:0, ease:rough}, 4.5 + Math.random());
        }

    },

    sloganBanner: function () {

        var self = $(this);
        var controller = new ScrollMagic.Controller();

        var tween = TweenMax.to('.parallax-bg', 1, {y: '-50%'});

        var scene = new ScrollMagic.Scene({
            triggerElement: '.slogan',
            triggerHook: 1,
            duration: '150%'
        });
        scene.setTween(tween)
          //   .addIndicators()
            .addTo(controller);
    }
};