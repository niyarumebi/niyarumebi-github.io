$(function () {
    matx.init();
});


var matx = {
    init: function () {
        matx.getScroll('html', 'getScroll', 100);
        matx.getScroll('.scroll-to-top', 'is-active', 1000);
        matx.activeSkill('.about-us .gauge');

        // matx.helpBox();
        matx.spyTarget();
        matx.currentNav();
        matx.backToTop();
        matx.openSideBar();
        matx.openOptionPanel();
        matx.colorSet();


        matx.visualSlider();
      //  matx.visualAnimation();

        matx.ourChooseAccordian();
        matx.ourChoosePanel();

        matx.serviceTab();
        matx.tabCategory();
        matx.newsLetter();
        matx.popUpVideo();
    },

    getScroll: function (el, className, point, activeClassName) {

        $(window).on('scroll', function () {
            var sct = $(window).scrollTop();
            if(sct > point){
                $(el).addClass(className);
            } else {
                $(el).removeClass(className);
            }
        })
    },

    helpBox: function () {
        var box = $('.help-box');

        box.on('click', function () {
            $(this).toggleClass('is-active');
        })
    },

    backToTop: function () {
        var btnTop = $('.scroll-to-top');
        btnTop.on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            })
        });
    },

    openSideBar: function () {
        var btnOpen = $('.btn-menu'),
            btnClose = $('.browser-overlay, .btn-cancel'); //몰아주기 포인트

        btnOpen.on('click', function () {
            $('html').addClass('is-sidebar-open'); //상위 css로 한 번에 몰아서 html에 달아주고, css로 한꺼번에 세팅하는게 포인트
        });

        btnClose.on('click', function () {
            $('html').removeClass('is-sidebar-open');
        });
    },

    colorSet: function () {

        $('.color').on('click', function () {
            var dataStyle = '../assets/css/' + $(this).data('style') + '.css';
            $('#color-set').attr('href', dataStyle);
        })
        // var cssFile = $(document).find('color-set');
        // if (cssFile) {
        //     cssFile.href = ('./' + fName + '.css');
        // }
        //
        // !function (a) {
        //     function b(b) {
        //         var c = a('link[href*="color-"]'),
        //             b = b + ".css";
        //
        //         if (c.length > 0) {
        //             var d, e, f;
        //             if (d = c.attr("href"), e = d.split("/").pop(), e == b)
        //                 return;
        //             f = d.replace(e, b), c.attr("href", f)
        //         }
        //         else {
        //             var g, h, f;
        //
        //             g = a('link[href*="common.css"]').attr("href"),
        //                 h = g.substring(0, g.lastIndexOf("/") + 1),
        //                 f = h + b, a("head").append('<link rel="stylesheet" href="' + f + '" >')
        //         }
        //     }
        //
        //     a("document").ready(function () {
        //         a("#matx-option-panel-toggle").on("click", function (b) {
        //             b.preventDefault(), a(this).closest(".matx-option-panel-box").toggleClass("active-panel")
        //         })
        //     }),
        //         a(".matx-colors li a").on("click", function (c) {
        //             c.preventDefault(), b(a(this).attr("id"))
        //         })
        // }(jQuery);
    },

    //헤더 : 스크롤 다운 시, 헤더에 해당 영역 표시 / 해당 섹션에 맞는 id와 nav의 x값 매칭하여 nav:after 달아주기
    currentNav: function () {
        $(window).on('scroll', function () {
            $('.section-main').each(function () { //section-main만 만나면 반복문 돌리기
                var self = $(this),
                    sct = $(window).scrollTop(),
                    oft = self.offset().top, //섹션.offset().top
                    checkCurrent = oft - sct; //현재 스크롤탑부터 섹션x까지의 간격

                if (checkCurrent < 300) {
                    var dataNav = self.data('nav');
                    //여기에 remveClass를 nav태그에 매칭되는 child있는 지 봐줘서 있으면 removeclass하고 아니면 그냥 두는 걸로 분기해주면 될 듯
                    $('.gnb .nav-link').removeClass('is-active');
                    $(dataNav).addClass(('is-active'));
                } else {

                }
            })
        });
    },

    // 브라우저 : optionPanel 열기
    openOptionPanel: function () {
        var btn = $('.option .btn-option');
        var panel = $('.option .panel-option');
        $(btn).on('click', function () {
            if (btn.hasClass('is-active')) {
                btn.removeClass('is-active');
                panel.removeClass('is-active');
            } else {
                btn.addClass('is-active');
                panel.addClass('is-active');
            }
        })
    },


    //헤더 클릭하면 그 위치로 가지는 것
    spyTarget: function () {
        var navLink = $('.header .gnb .spy-nav, .sidebar .spy-nav');
        var drop = $('.sidebar ul li a');

        drop.on('click', function () {
            var self = $(this);
            if (self.hasClass('arrow')) {
                drop.removeClass('is-active');
                self.addClass('is-active');
            } else {
            }
        });

        navLink.on('click', function (e) {
            e.preventDefault();
            var self = $(this),
                navTargetHash = self.attr('href');

            var oft = $(navTargetHash).offset().top; //offset. 최상위스크롤탑에서 얼마가 떨어져 있느냐
            //top은 offset의 name이라 뒤에 괄호 없는 것(offset = { top: x , left :y }
            $('html, body').animate({ //jquery animate은 trs 기본적으로 가지고 있는 함수
                scrollTop: oft - 58 //px넣으려면 "px"로 해야하고, 생략가능 / 헤더 높이인 58만큼 빼고
            })
        });
    },

    // 섹션 공통 : 애니메이션 주기
    visualAnimation: function () {
        $(window).on('load', function () {
            $('.visual .si1 h2').addClass('fadeInUp1');
            $('.visual .si1 p').addClass('fadeInUp2');
            $('.visual .si1 .call-to-action').addClass('fadeInUp3');
            $('.visual .si1 .learn-more').addClass('fadeInUp3');

            $('.visual .si2 h2').addClass('fadeInUp1');
            $('.visual .si2 p').addClass('fadeInUp2');
            $('.visual .si2 .call-to-action').addClass('fadeInULeft3');

            $('.visual .si3 h2').addClass('fadeInUp1');
            $('.visual .si3 p').addClass('fadeInLeft2');
            $('.visual .si3 .call-to-action').addClass('fadeInLeft3');


            $('.footer-top .footer-logo').fadeIn(1000);
        });
    },


    //섹션 공통 : 슬라이더 설정
    visualSlider: function () {
        $('.slider').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 3500
        });

        $('.visual-slider').slick({
            dots: false,
            autoplay: true,
            autoplaySpeed: 3500
        });

        $('.visual-slider').find('[data-slick-index=0]').addClass('is-current');
        $('.visual-slider').on('afterChange', function(event, slick, currentSlide){
            $('[data-slick-index='+ currentSlide + ']').addClass('is-current').siblings().removeClass('is-current')
        })


        $('.team-slider').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 3500,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });

        $('.tc-slider').slick({
            dots: true,
            autoplay: false,
            infinite: true
        });

        $('.label-slider').slick({
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            responsive: [
                {
                    breakpoint: 3000,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    },

    //about-us : 애니메이션 - 근처 오면(scrollMagic쓰는 게 응용하기 편할듯)
    activeSkill: function (item) {
        $(window).on('scroll', function () {
            var sct = $(window).scrollTop();
            var oft = $('.about-us').offset().top;
            if (sct > oft - 500) {
                $(item).addClass('is-active');
            }
        })
    },

    //why-choose-us : 아코디언 리스트
    ourChooseAccordian: function () {
        var list = $('.why-choose-us li'),
            title = $('.why-choose-us .title-link'),
            desc = $('.why-choose-us .para');

        title.on('click', function (e) {
            var self = $(this);
            e.preventDefault();

            if (self.hasClass('is-active')) {
                //click했는데 열려있는 거(is-active:변화)면 무반응.
                //click했는데 닫혀있는 거면 1.나머지들 변화 초기화시키고(removeClass) 2.펼쳐진desc 닫아주고.
                // 3.click한 self만 변화준다(is-active 달아줌addClass -종류 item+list) + slideDow해준다.
            } else {
                //초기화
                title.removeClass('is-active'); //전체 title
                //list.removeClass('is-active');
                desc.slideUp(400, 'easeInOutExpo');

                //진정해줄 일
                self.addClass('is-active'); //self title만
                //        self.parent(list).addClass('is-active');//self.closest 혹은 self.parent('')
                self.next('.para').slideDown(400, 'easeInOutExpo');
            }
        }).eq(0).trigger('click');
    },


    //why-choose-us : id링크 사용하여 이미지 패널 바꿔주기
    ourChoosePanel: function () {
        var title = $('.why-choose-us .title-link'),
            panelContent = $('why-choose-us .pic .wrap-img');

        title.on('click', function (e) {
            e.preventDefault();

            var self = $(this),
                dataHash = self.attr('href');
            $(dataHash).fadeIn(300).siblings().hide();
            //dataHash.fadein.siblings.fadeout 하면 디스플레이 시간 겹쳐서 밑에 내려간다.
            //한쪽만 fade주거나 이 이미지 패널을 poa로 박아주던가 한다.
        }).eq(0).trigger('click');
    },

    //service : nav-link 누르면 하단에 해당 panel 보여주기 + 애니메이션 - 스크롤 근처 가면 digit count up
    serviceTab: function (i) {
        //탭 연결해 fadeout하는 함수
        var tabNav = $('.service .link-icon');
        
        tabNav.on('click', function (e) {
            e.preventDefault();
            var self = $(this),
                dataHash = self.attr('href');
            self.addClass('is-active').siblings().removeClass('is-active');

            $(dataHash).fadeIn(300).siblings().fadeOut() //show따로/'그리고' 형제들은hide해라. 액션 단위로 끝난다고 생각하면될듯 s + v / s + v


            //숫자 카운팅 함수
            var digit = $('.service .statistics .digit');
            $(window).on('scroll', function () {
                    var sct = $(window).scrollTop();
                    var oft = $('.tab-content-item').offset().top;
                    if (sct > oft - 300) {
                        digit.each(function (i) {
                                var self = $(this),
                                    startNum = $({counting: self.html()}),
                                    finNum = self.data('count'); //<span class="digit" data-count="98"></span>

                                if (finNum - 100 < 0) {
                                } else {
                                    startNum.counting = finNum - 100;
                                }
                                startNum.animate({counting: finNum}, {
                                    duration: 1500, step: function (now) {
                                        digit.eq(i).html(Math.floor(now));
                                    }
                                })
                            }
                        );
                    }
                }
            )
        }).eq(0).trigger('click');


        //tabNav 누르면 해당 패널의 애니메이션도 재트리거 해주는 함수
        $('.link-icon').on('click', function () {
            var digit = $('.service .statistics .digit');
            digit.html('');
            digit.each(function (i) {
                    var self = $(this),
                        startNum = $({counting: self.html()}),
                        finNum = self.data('count'); //<span class="digit" data-count="98"></span>

                    if (finNum - 100 < 0) {
                    } else {
                        startNum.counting = finNum - 100;
                    }
                    startNum.animate({counting: finNum}, {
                        duration: 1500, step: function (now) {
                            digit.eq(i).html(Math.floor(now));
                        }
                    })
                }
            );
        })
    },

     tabCategory: function () {
        var btn = $('.link-item');
        btn.on('click', function(){
            var self = $(this);
            if(self.hasClass('is-active')){
            } else {
                btn.removeClass('is-active');
                self.addClass('is-active');
            }
        });

        $('.mixitup-container').mixItUp();
    },

    newsLetter: function () {
        var btnOk = $('.popup-wrap .ok');

        $('.newsletter .subscribe').on('click', function (e) {
            e.preventDefault();
            if($('.addr').val() == ""){
                // $('.popup-wrap .failed').show();
                $('body').addClass('.popup-wrap .failed');
            } else {
                // $('.popup-wrap .succeed').show();
                $('body').addClass('.popup-wrap .succeed');
            }

            btnOk.on('click', function(){
                // $('.popup-wrap').hide();
                $('body').removeClass('.popup-wrap')
            })
        })
    },


    popUpVideo: function () {
        $('.check-video .btn-play').YouTubePopUp();
        //   $('.check-video .btn-play').YouTubePopUp( { autoplay: 0 } ); // Disable autoplay
    }
};


