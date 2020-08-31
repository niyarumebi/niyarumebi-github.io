$(function () {
    gvshop_renew.init();
});

var gvshop_renew = {
    init: function () {
        gvshop_renew.slide_setting();
    },

    slide_setting: function () {
        //recent-section : slick slide init
        $('.recent-section .prd-list-style3').slick({
            fade: true,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000
        });

        //bigcategory page-mainVisual : slick slide init
        $('.bigcategory-mainVisual .scene-list').slick({
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 5000
        })
    },

    go_top: function () {
        //when clicked, go to top
        var btn_go_top = $('.btn-page-top');
        btn_go_top.on('click', function (e) {
            e.preventDefault();
            $('html').scrollTop(0);
        });
    },

    header_action: function () {
        /*getScroll action*/
        if ($('body').find('.for-moving-header-wrap').length === 1) {
            $(window).on('scroll', function () {
                var sct = $(window).scrollTop();
                if (sct > 655) {
                    $('body').addClass('getScroll');
                } else {
                    $('body').removeClass('getScroll');
                }
            });
        } else {
            $('.header').css({
                position: 'fixed'
            })
        }

        /*btn-whole-cate dropdown hover*/
        $('.header .btn-whole-cate').on('hover', function (e) {
            e.stopPropagation();
            $(this).addClass('is-active');
        });


        /*subject hover cascading*/
        var target_parent = $('.main-header .navigator .bigcate-column li');
        var target_subParent = $('.main-header .navigator .sub-column li');

        target_parent.on('mouseenter', function () {
            $(this).find('.bigcate-link').addClass('is-active');
        });

        target_parent.on('mouseleave', function () {
            $(this).find('.bigcate-link').removeClass('is-active')
        });

        target_subParent.on('mouseenter', function () {
            $(this).find('.sub-link').addClass('is-active');
        });

        target_subParent.on('mouseleave', function () {
            $(this).find('.sub-link').removeClass('is-active')
        });
    },

    mainPage_visual_slide: function () {
        var left_slide = $('.main-visual .left-slide');
        var right_slide = $('.main-visual .right-slide');
        // slides_toShow:  set among odds, recommend set less than 5. it doesn't look pretty in aspect of layout
        var slides_toShow = 3;
        var center_mode = true;
        var count_slides = left_slide.find('.scene').length;

        left_slide.slick({
            dots: true,
            arrows: true,
            slidesToScroll: 1,
            slidesToShow: slides_toShow,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 250,
            pauseOnHover: false,
            centerMode: center_mode
        });
        if (center_mode) {
            if (slides_toShow < count_slides) {
                //enough slide amount for slick to work properly (when clones are created)
                count_slides = left_slide.find('.scene').length - ((slides_toShow + 1) * 2); //Math.abs()
            } else {
                //less slide amount for slick to work properly (when clones are not created)
                if (count_slides === 1) {
                    left_slide.slick('slickSetOption', 'slidesToShow', 1, true);
                    left_slide.slick('slickSetOption', 'centerMode', false, true);
                } else {
                    left_slide.slick('slickSetOption', 'slidesToShow', (count_slides - 1), true);
                }
            }
        }

        if (!center_mode) {
            if (slides_toShow < count_slides) {
                //enough slide amount for slick to work properly (when clones are created)
                count_slides = left_slide.find('.scene').length - (slides_toShow * 2); //Math.abs()
            } else {
                //less slide amount for slick to work properly (when clones are not created)
                if (count_slides === 1) {
                    left_slide.slick('slickSetOption', 'slidesToShow', 1, true);
                    left_slide.slick('slickSetOption', 'centerMode', false, true);
                } else {
                    left_slide.slick('slickSetOption', 'slidesToShow', (count_slides - 1), true);
                }
            }
        }

        /*when the slide is loaded, print total count(fixed)*/
        $(window).on('load', function () {
            $('.left-slide-wrap .play-area .counter .total').html(count_slides);

            var data_color = $('[data-slick-index="0"]').data('color');
            $('.left-slide-wrap .play-area .img-wrap img').css({'opacity': 1});
            left_slide.find('.slick-slide.slick-current').css({
                'borderColor': data_color, 'fontWeight': '500',
                'color': data_color
            });
        });

        /*animation which should be played when the slide is changed : beforeChange & afterChange*/
        left_slide.on('beforeChange', function (event, slick, currentSlide) {
            var self = $(this);
            self.find('.slick-slide').css({
                'borderColor': 'transparent', 'fontWeight': '400',
                'color': '#7b7b7b7'
            });
            $('.left-slide-wrap .play-area .img-wrap img').css({'opacity': 0});
        });
        left_slide.on('afterChange', function (event, slick, currentSlide) {
            var self = $(this);

            /*current-slide count*/
            $('.left-slide-wrap .play-area .counter .bold').html(left_slide.find('.slick-dots .slick-active button').text());

            /*current-color change*/
            var data_color = $('[data-slick-index="' + currentSlide + '"]').data('color');
            self.find('.slick-slide.slick-current').css({
                'borderColor': data_color, 'fontWeight': '500',
                'color': data_color
            });

            /*img change*/
            var data_src = $('[data-slick-index="' + currentSlide + '"]').data('src');
            $('.left-slide-wrap .play-area .img-wrap img').css('opacity', 1).attr('src', data_src);
            //$('.left-slide-wrap .play-area .pager .bold').html(left_slide.find('.slick-dots li:last-child').text());

            /*href change*/
            var data_href = $('[data-slick-index="' + currentSlide + '"]').data('href');
            $('.left-slide-wrap .play-area .img-wrap').attr('href', data_href);
        });

        /* when hovered, to make the slide to go that index,
        * loops infinitely, as I tried and find to solution up to now
        * suggest to change action:hover -> click* below is the result*
        */
        left_slide.find('.scene .txt-wrap').on('click', function () {
            var actioned_slide_index = parseInt(this.parentNode.getAttribute('data-slick-index'));
            left_slide.slick('slickGoTo', actioned_slide_index, true);
            left_slide.slick('slickPlay');
        });

        /*left-slide-wrap*/
        $('.left-slide-wrap .tool .play').on('click', function () {
            $(this).addClass('is-active').siblings().removeClass('is-active');
            left_slide.slick('slickPlay');
        });

        $('.left-slide-wrap .tool .pause').on('click', function () {
            $(this).addClass('is-active').siblings().removeClass('is-active');
            left_slide.slick('slickPause');
        });

        //when hovered, pause slick
        /*  $('.left-slide-wrap .play-area .img-wrap').hover(function () {
            left_slide.slick('slickPause')
          }, function () {
            left_slide.slick('slickPlay');
          });*/

        right_slide.slick({
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000
        });
    },

    mainPage_event_slide: function () {
        var img_projector = $('.exhibition-area .main-thumb img');
        var bg_line = $('.exhibition-area .bg-line');
        var msg_wrap = $('.exhibition-area .msg-wrap');
        var img_href = $('.exhibition-area .main-thumb > a');
        var target = $('.exhibition-area .mini-thumb .item');
        var isPaused = false;
        var currentTarget;

        /*state if (paused or not)*/
        $('.exhibition-area').on('mouseenter', function () {
            isPaused = true;
        });

        $('.exhibition-area').on('mouseleave', function () {
            isPaused = false;
        });

        /*click Event*/
        //  var currentIndex_forClick;
        target.on('click mouseenter', function () {
            beforeChange();
            playAction.call(this);
            currentIndex_forAutoPlay = $(this).index() - (target.length - 1);
            afterChange();
        }).eq(0).trigger('click');


        /*autoPlay*/
        var currentIndex_forAutoPlay;
        if ($('.exhibition-area').hasClass('init')) {
            currentIndex_forAutoPlay = 1;
        } else {
            currentIndex_forAutoPlay = -1;
        }

        window.setInterval(function () {
            currentTarget = $('.exhibition-area .mini-thumb .item:eq(' + currentIndex_forAutoPlay + ')');
            if (!isPaused) {
                var list = $('.exhibition-area .mini-thumb li').length;
                beforeChange();
                currentTarget.addClass('is-active').siblings().removeClass('is-active');
                playAction.call(currentTarget);
                currentIndex_forAutoPlay++;
                afterChange();

                if (currentIndex_forAutoPlay === list - 1) {
                    window.clearInterval(currentIndex_forAutoPlay = -1);
                    if ($('.exhibition-area').hasClass(('init'))) {
                        $('.exhibition-area').removeClass('init');
                    }
                }
            } else {
            }
        }, 6000);

        /* function declaration*/
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
            img_projector.attr('src', get_imgSrc);
        }

        function beforeChange() {
            $('.exhibition-area').removeClass('after-change');
        }

        function afterChange() {
            window.setTimeout(function () {
                $('.exhibition-area').addClass('after-change');
            }, 500);
        }
    },



};
