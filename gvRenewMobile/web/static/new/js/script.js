$(function () {
    gvshop_renew.init();
});

var gvshop_renew = {
    init: function () {
        gvshop_renew.custom_selectBox();
        gvshop_renew.slide_setting();
        gvshop_renew.header_action();
        //   gvshop_renew.mainPage_title_moving();
        gvshop_renew.mainPage_visual_slide();
        gvshop_renew.mainPage_event_slide();
        gvshop_renew.sortFilter_click();
        gvshop_renew.seungil_prdDetail_script();
        gvshop_renew.radioBtn();
        gvshop_renew.signUpPage_action();
        gvshop_renew.input_deleteBtn();
        gvshop_renew.mypage_action();
        gvshop_renew.seungil_myorder_dropdown();
        gvshop_renew.payment_page();
        gvshop_renew.seungil_mypage_qna();
        gvshop_renew.event_page();
    },

    slide_setting: function () {
        $('.recent-section .prd-list-style3').slick({
            fade: true,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000
        });

        $('.bigcategory-mainVisual .scene-list').slick({
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 5000
        })
    },

    header_action: function () {
        /*getScroll action*/
        if ($('body').find('.for-moving-header-wrap').length === 0) {
            $('.header').css({
                position: 'relative'
            })
        } else {
            $(window).on('scroll', function () {
                var sct = $(window).scrollTop();
                if (sct > 655) {
                    $('html').addClass('getScroll');
                } else {
                    $('html').removeClass('getScroll');
                }
            });
        }

        /*btn-whole-cate dropdown hover*/
        $('.header .btn-whole-cate').on('mouseenter', function () {
            $(this).next('.dropdown-wrap').addClass('is-active');

        });
        $('.header .dropdown-wrap').on('mouseleave', function () {
            $(this).removeClass('is-active');
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

    mainPage_title_moving: function () {
        var moving_target;
        var section_oft, section_ofb;
        try {
            moving_target = $('.move-wrap');
            section_oft = $('.content-section').offset().top - 150;
            section_ofb = $('.content-section').height() - section_oft;
        } catch (err) {
            return;
        }

        /*        $(window).on('scroll', function () {
                    var sct = $(window).scrollTop();
                    if (sct > section_oft || sct < section_ofb) {
                        moving_target.addClass('is-active');
                    } else {
                        moving_target.removeClass('is-active');
                    }
                })*/
    },

    mainPage_visual_slide: function () {
        left_slide.slick({
            dots: true,
            arrows: true,
            slidesToScroll: 1,
            slidesToShow: 5,
            swipeToSlide: true,
            autoplay: false,
            autoplaySpeed: 3000,
            speed: 250,
            centerMode: true
        });

        /*when the slide is loaded, print total count(fixed)*/
        $(window).on('load', function () {
            $('.left-slide-wrap .play-area .counter .total').html(left_slide.find('.slick-dots li:last-child').text());

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
            self.find('.slick-slide').fadeIn(200).css({
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

        $('.left-slide-wrap .play-area .img-wrap').hover(function () {
            left_slide.slick('slickPause')
        }, function () {
            left_slide.slick('slickPlay');
        });

        right_slide.slick({
            vertical: true,
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
            // currentTarget = $(this).index() + 1;
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
        }, 3000);

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

            get_imgSrc = self.find('images').attr('src');
            img_projector.fadeOut(300).attr('src', get_imgSrc).fadeIn(1000);
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

    sortFilter_click: function () {
        $('.sort-filter li').on('click', function () {
            var self = $(this);
            self.addClass('is-active').siblings().removeClass('is-active');
        }).eq(0).trigger('click');
    },

    seungil_prdDetail_script: function () {
        //  list slide js
        $('.goods-list-wrap .goods-list').slick({
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000
        });

        //fixed header js
        /*fixed header*/
        $('.detail-header').each(function () {
            var $win = $(window),
                $header = $(this),
                headerOffsetTop = $header.offset().top;
            $win.on('scroll', function () {

                var scrollTop = $win.scrollTop(),
                    $section = $('section');
                var scroll = Math.floor(scrollTop),
                    offset = Math.floor(headerOffsetTop);

                if (scroll > offset) {
                    $header.addClass('on')
                } else {
                    $header.removeClass('on')
                }
            });
        });

        //fixed header list js
        var link = $('.detail-header li');
        link.on('click', function (e) {
            e.preventDefault();
            var self = $(this);

            self.addClass('on').siblings().removeClass('on');
            var dataHash = self.find('a').attr('href');
            if (self.hasClass('on')) {
                $(dataHash).addClass('is_current').siblings().removeClass('is_current');
            }
        }).eq(0).trigger('click');

        var sct = $('.detail-header li a');
        sct.on('click', function (e) {
            e.preventDefault();
            var targetPoint = $('.prd-info-detail-wrap').offset().top - 90;
            $('html,body').animate({
                scrollTop: (targetPoint)
            }, 1000);
        });


        //product QnA
        var btnTarget = $('.information-review-list .click-btn-tr');
        var targetContent = $('.information-review-list .click-detail-box');
        targetContent.slideUp();

        btnTarget.on('click', function () {
            var self = $(this);
            self.next().slideToggle(10);
        })
    },

    custom_selectBox: function () {
        var x, i, j, selElmnt, a, b, c;
        /*look for any elements with the class "custom-select":*/
        x = document.getElementsByClassName("custom-select");
        for (i = 0; i < x.length; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);
            /*for each element, create a new DIV that will contain the option list:*/
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            for (j = 1; j < selElmnt.length; j++) {
                /*for each option in the original select element,
                create a new DIV that will act as an option item:*/
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener("click", function (e) {
                    /*when an item is clicked, update the original select box,
                    and the selected item:*/
                    var y, i, k, s, h;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < s.length; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            for (k = 0; k < y.length; k++) {
                                y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            x[i].appendChild(b);
            a.addEventListener("click", function (e) {
                /*when the select box is clicked, close any other select boxes,
                and open/close the current select box:*/
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });
        }


        function closeAllSelect(elmnt) {
            /*a function that will close all select boxes in the document,
            except the current select box:*/
            var x, y, i, arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected");
            for (i = 0; i < y.length; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i)
                } else {
                    y[i].classList.remove("select-arrow-active");
                }
            }
            for (i = 0; i < x.length; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide");
                }
            }
        }

        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);
    }

    ,

    radioBtn: function () {
        var btnRadio = $('.btn-radio');
        btnRadio.on('click', function () {
            var self = $(this);
            self.addClass('is-active').siblings().removeClass('is-active');
        }).eq(0).trigger('click');
    },

    signUpPage_action: function () {
        /*type of member selection (personal / company)*/
        var personal_member = $('.sign-up-wrap #type1');
        var company_member = $('.sign-up-wrap #type2');
        var form_Area = $('.sign-up-wrap .form-area');
        var btnRadio = $('.sign-up-wrap .btn-radio');

        btnRadio.on('click', function () {
            if (personal_member.hasClass('is-active')) {
                form_Area.attr('class', 'form-area personal-member');
            }

            if (company_member.hasClass('is-active')) {
                form_Area.attr('class', 'form-area company-member');
            }
        }).eq(0).trigger('click');

        /*when input is on focus, remove .sub-placeholder : vice versa*/
        var input_form = $('.sign-up-wrap .form-ctrl input');
        input_form.on('focus keydown keypress', function () {
            var self = $(this);
            self.siblings('.sub-placeholder').css({
                display: 'none'
            });
        });

        input_form.on('blur', function () {
            var self = $(this);
            if (self.val().length === 0) {
                self.siblings('.sub-placeholder').css({
                    display: 'block'
                });
            }
        });


        /*email-dropdown*/
        var form_ctrl = $('.sign-up-wrap .form-ctrl');
        form_ctrl.find('.dropdown').on('click', function (e) {
            var self = $(this);
            self.toggleClass('is-active');
            self.find('li').on('click', function () {
                var self_child = $(this);
                var the_value = self_child.text();
                if (the_value === '직접입력') {
                    self_child.parents('.form-ctrl').prev('.col1').find('.email-domain').focus().val('').attr('readonly', false);
                } else {
                    self_child.parents('.form-ctrl').prev('.col1').find('.email-domain').val(the_value).attr('readonly', true);
                }
            })
        });

        /*when click out of email-dropdown*/
        /*form_ctrl.find('.dropdown .head').on('change', function(){
            $(this).removeClass('is-active');
        });*/
        $(window).on('click', function (e) {
            if (!form_ctrl.find('.dropdown').is(e.target) && form_ctrl.find('.dropdown').has(e.target).length === 0) {
                form_ctrl.find('.dropdown').removeClass('is-active');
            }
        });
    },

    input_deleteBtn: function () {
        var form_group = $('.form-group.has-delete-btn');
        var form_ctrl = form_group.find('.form-ctrl');
        var inputArea = form_ctrl.find('input');
        var btn_delete = form_ctrl.find('.btn-clear');

        /*when inputArea clicked, btn_delete shows up*/
        inputArea.on('focus', function () {
            var self = $(this);
            self.parent('.form-ctrl').addClass('btn-del-active');
        });
        /*when inputArea focused out, btn_delete disappears*/
        $(window).on('click', function (e) {
            if (!form_ctrl.is(e.target) && form_ctrl.has(e.target).length === 0) {
                form_ctrl.removeClass('btn-del-active');
            }
        });

        /*input clear action*/
        btn_delete.on('click', function () {
            var self = $(this);
            self.prev('input').val('');
        });
    },

    mypage_action: function () {
        /*mypage-header-action : IS-NOT-NEEDED*/
        /*       var mypage_header= $('.mypage-header .nav li');
               mypage_header.on('click', function(){
                   var self = $(this);
                   self.addClass('is-active').siblings().removeClass('is-active');
               }).eq(0).trigger('click');
       */

        /*month-sort-is-active*/
        /*  var btn_month_sorter = $('.month-sorter-wrap .btns-wrap li');
          btn_month_sorter.on('click', function (e) {
              e.preventDefault();
              var self = $(this);
              self.addClass('is-active').siblings().removeClass('is-active');
          }).eq(0).trigger('click');
        */

        /*mypage-tab-action(basic)*/
        $('[class^="mypage-"] .tab-links-wrap .tab-link').on('click', function (e) {
            e.preventDefault();
            var self = $(this);

            if (self.parent('.tab-links-wrap').hasClass('prevent-action')) {

            } else {
                self.addClass('is-active').siblings().removeClass('is-active');
                var data_hash = $(self.attr('href'));
                data_hash.show().siblings().hide();//.addClass('is-active').siblings().removeClass('is-active');
            }
        }).eq(0).trigger('click');
    },

    seungil_myorder_dropdown: function () {
        var btnTarget = $('.order-history-list .click-btn-tr');
        var btnTargeticon = $('.order-history-list .click-btn-tr .detail-view-more span i');
        var targetContent = $('.order-history-list .click-detail-box');
        targetContent.slideUp();

        btnTarget.on('click', function () {
            var self = $(this);
            self.prev().slideToggle(10);
            self.find('span i').toggleClass('js-icon');
        });
    },

    payment_page: function () {
        var shipment_msg = $('.mypage-payment .for-shipment-msg .select-selected');
        shipment_msg.next('.select-items').on('click', function () {
            if ($(this).find('.same-as-selected').text() === '메세지 직접 입력') {
                $(this).parents('.custom-select').prev('.input-wrap').find('input.large').focus().val('').attr('readonly', false);
            } else {
                $(this).parents('.custom-select').prev('.input-wrap').find('input.large').val($(this).find('.same-as-selected').text()).attr('readonly', true);
            }
        })
    },

    seungil_mypage_qna: function () {
        var btnTarget = $('.click-btn-qna');
        var targetContent = $('.click-detail-box');
        targetContent.slideUp();

        btnTarget.on('click', function () {
            var self = $(this);
            self.parent().next().slideToggle(10);
        })
    },

    event_page: function () {
        var event_main_slide = $('.event-main-visual .scene-list');
        event_main_slide.slick({
            dots: true,
            arrows: true,
            fade:true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3500,
            speed: 100
        });

        /*when the slide is loaded, print total count(fixed)*/
        $(window).on('load', function () {
            $('.event-main-visual .slide-tools .counter .total').html(event_main_slide.find('.slick-dots li:last-child').text());

            var data_bgc = $('[data-slick-index="0"]').data('bg');
            $('.event-main-visual').find('.slick-slide.slick-current').css('backgroundColor', data_bgc);
        });

        event_main_slide.on('afterChange', function (event, slick, currentSlide) {
            $('.event-main-visual .slide-tools .counter .bold').html(event_main_slide.find('.slick-dots .slick-active button').text());
            var data_bgc = $('[data-slick-index="' + currentSlide + '"]').data('bg');
            $('.event-main-visual').css('backgroundColor', data_bgc);
        });
    }

};