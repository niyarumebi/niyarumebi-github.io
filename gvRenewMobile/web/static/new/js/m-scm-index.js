$(function () {
    gvshop_renew_scm_index.init();
});

var gvshop_renew_scm_index = {
    init: function () {
        gvshop_renew_scm_index.index_slide();
        gvshop_renew_scm_index.ani_fadeInUp();
    },

    index_slide : function(){
        var main_page_slide = $('.m-scm-index-wrap .main-visual-wrap .scene-list');
        var slides_toShow = 1;
        var count_slides = main_page_slide.find('.scene').length;

        main_page_slide.slick({
            dots: true,
            arrows: true,
            fade: true,
            autoplay: false,
            autoplaySpeed: 4000,
            speed: 300,
            slidesToScroll: 1,
            slidesToShow: slides_toShow
        });

        $(window).on('load', function () {
            $('.m-scm-index-wrap .main-visual-wrap .slide-tool .counter .total').html(count_slides);
        });

        main_page_slide.on('beforeChange', function (event, slick, currentSlide) {
            $(this).find('.link-wrap').removeClass('flip');
        });

        main_page_slide.on('afterChange', function (event, slick, currentSlide) {
            $('.m-scm-index-wrap .main-visual-wrap .slide-tool .counter .bold').html(main_page_slide.find('.slick-dots .slick-active button').text());
            $('[data-slick-index="' + currentSlide + '"]').find('.link-wrap').addClass('flip');
        });

        $('.m-scm-index-wrap .main-visual-wrap .slide-tool .play').on('click', function () {
            $(this).addClass('is-active').siblings().removeClass('is-active');
            main_page_slide.slick('slickPlay');
        });

        $('.m-scm-index-wrap .main-visual-wrap .slide-tool .pause').on('click', function () {
            $(this).addClass('is-active').siblings().removeClass('is-active');
            main_page_slide.slick('slickPause');
        });
    },

    ani_fadeInUp : function(){
        var controller = new ScrollMagic.Controller();

        $('.section-fadeInUp').each(function () {
            var self = $(this);
            var scene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.7
            });

            scene.addTo(controller);

            scene.on("start", function (event) {
                self.find('.row').addClass('showUp-active')
            });
        })
    }
};