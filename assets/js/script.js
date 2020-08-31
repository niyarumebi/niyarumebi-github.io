$(function () {
    portfolio.init(); //그냥 한줄로 $(matx).init(); 쓰면 안되나
});


var portfolio = {
    init: function () {
        portfolio.getScroll('html', 'getScroll', 300);
        portfolio.getScroll('.go-top', 'is-active', 500);
        portfolio.openSidebar();
        portfolio.goTop();
        portfolio.slider();
        portfolio.currentNav();
        portfolio.toNextSection();
        portfolio.progressBar();

    },

    getScroll: function (el, className, point) {
        $(window).on('scroll', function () {
            var sct = $(window).scrollTop();
            if (sct > point) {
                $(el).addClass(className);
            } else {
                $(el).removeClass(className);
            }
        })
    },

    openSidebar: function () {
        var btnOpen = $('.side-btn'),
            btnClose = $('.overlay');

        btnOpen.on('click', function () {
            if($('body').hasClass('is-sidebar-open')){
                $('body').removeClass('is-sidebar-open');
            } else {
                $('body').addClass('is-sidebar-open');
            }
        });

        btnClose.on('click', function () {
            $('body').removeClass('is-sidebar-open');
        });
    },

    goTop : function () {
        var btnTop = $('.go-top');

        btnTop.on('click', function () {
            $('html, body').animate({scrollTop:0})
        })
    },

    slider: function () {
        $('.visual .slider').slick({
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            draggable:true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        dots: false
                    }
                }
            ]
        });
    },

    currentNav: function () {
        $(window).on('scroll', function () {
            var sct = $(window).scrollTop();


            $('.section-opt, .section-main').each(function () {
                var self = $(this);
                var dataNav = $(self.data('nav'));
                //        console.log(dataNav);
                //       console.log($('.gnb li'));
                var oft = self.offset().top;
                //        console.log(oft - sct);
                if (oft - sct < 300) {
                    $('.gnb .nav-link').removeClass('is-active');
                    dataNav.addClass('is-active');
                } else {
                }
            })
        })
    },

    toNextSection: function () {
        var btnNext = $('.btn-next');
        btnNext.on('click', function () {
            var self = $(this);
            var thisSection = self.closest('section');
            var oft = thisSection.next('.section-opt').offset().top;
            $('html, body').animate({scrollTop: oft}, 600, 'easeInExpo');
        })
    },


    progressBar: function () {
        $(window).on('scroll', function () {
            var sct = $(window).scrollTop();
            var oft = $('.about').offset().top;//section마다 애니메이션 돌아가게하는 template 함수만들기

            if (oft - sct < 300) {
                $('.about .gauge').addClass('is-active');
            }
        })
    }
};