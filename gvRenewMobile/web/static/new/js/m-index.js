$(function () {
    var exhi_slide = $('.exhibition-section .scene-list');

    exhi_slide.slick({
        dots: false,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000
    });



    $(window).on('load', function(){
        exhi_slide.find('.scene:first-child').addClass('after-change');
    });

    exhi_slide.on('beforeChange', function (event, slick, currentSlide) {
        $('[data-slick-index="' + currentSlide + '"]').removeClass('after-change');
    });

    exhi_slide.on('afterChange', function (event, slick, currentSlide) {
        $('[data-slick-index="' + currentSlide + '"]').addClass('after-change');
    });
});


/*
$(function(){
    var img_projector = $('.exhibition-section .main-thumb img');
    var bg_line = $('.exhibition-section .bg-line');
    var msg_wrap = $('.exhibition-section .msg-wrap');
    var img_href = $('.exhibition-section .main-thumb > a');
    var target = $('.exhibition-section .mini-thumb .item');
    var isPaused = false;
    var currentTarget;

    /!*state if (paused or not)*!/
    $('.exhibition-section').on('mouseenter', function () {
        isPaused = true;
    });

    $('.exhibition-section').on('mouseleave', function () {
        isPaused = false;
    });

    /!*click Event*!/
//  var currentIndex_forClick;
    target.on('click mouseenter', function () {
        beforeChange();
        playAction.call(this);
        // currentTarget = $(this).index() + 1;
        currentIndex_forAutoPlay = $(this).index() - (target.length - 1);
        afterChange();
    }).eq(0).trigger('click');


    /!*autoPlay*!/
    var currentIndex_forAutoPlay;
    if ($('.exhibition-section').hasClass('init')) {
        currentIndex_forAutoPlay = 1;
    } else {
        currentIndex_forAutoPlay = -1;
    }

    window.setInterval(function () {
        currentTarget = $('.exhibition-section .mini-thumb .item:eq(' + currentIndex_forAutoPlay + ')');
        if (!isPaused) {
            var list = $('.exhibition-section .mini-thumb li').length;
            beforeChange();
            currentTarget.addClass('is-active').siblings().removeClass('is-active');
            playAction.call(currentTarget);
            currentIndex_forAutoPlay++;
            afterChange();

            if (currentIndex_forAutoPlay === list - 1) {
                window.clearInterval(currentIndex_forAutoPlay = -1);
                if ($('.exhibition-section').hasClass(('init'))) {
                    $('.exhibition-section').removeClass('init');
                }
            }
        } else {
        }
    }, 6000);

    /!* function declaration*!/
    function playAction() {
        var self = $(this);
        self.addClass('is-active').siblings().removeClass('is-active');

        var color_to = $(this).data('color');
        bg_line.css({backgroundColor: color_to});
        self.find('.border').css({borderColor: color_to});

        var main_txt = $(this).data('main-t');
        msg_wrap.find('.main-t-wrap .txt').text(main_txt);

        var sub_txt = $(this).data('sub-t');
        msg_wrap.find('.sub-t-wrap .txt').text(sub_txt);

        var href = $(this).data('href');
        img_href.attr('href', href);

        get_imgSrc = self.find('img').attr('src');
        img_projector.fadeOut(300).attr('src', get_imgSrc).fadeIn(1000);
    }

    function beforeChange() {
        $('.exhibition-section').removeClass('after-change');
    }

    function afterChange() {
        window.setTimeout(function () {
            $('.exhibition-section').addClass('after-change');
        }, 500);
    }
});*/
