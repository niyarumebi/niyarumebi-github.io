$(function () {
    hCard.init();
});


var hCard = {
    init: function () {
        hCard.advertiserTopbar();
        //   hCard.dropDownMenu();
        hCard.getScroll();
        hCard.slideSetting();
        hCard.btnPaging();
   //     hCard.navDrop();
    },

    advertiserTopbar: function () {
        var btnClose = $('.advertise .btn-close, .close-all-day input:checked');

        btnClose.on('click', function () {
            $('body').removeClass('showAd');
        });
    },

    dropDownMenu: function () {
        $('.main-header .gnb nav ul li').on('hover', function () {
            var self = $(this);
            self.find('.nav-drop-container').slideDown(1000);
            self.find('.nav-drop-container').slideUp(1000);
        })
    },

    getScroll: function () {
        $(window).on('scroll', function () {

            var sct = $(window).scrollTop();

            if (sct > 100) {
                $('html').addClass('getScroll');
            } else {
                $('html').removeClass('getScroll');
            }
        })
    },

    slideSetting: function () {

        $('.scene-list').slick({
            arrows: false,
            dots: true,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplayspeed: 1500
        });

        $('.btn-slick-pause').on('click', function () {
            var self = $(this);
            console.log('dd');
            self.parent().prev('.scene-list').slick('slickPause');
            self.parent().addClass('pause-active');
        });

        $('.btn-slick-play').on('click', function () {
            var self = $(this);
            self.parent().prev('.scene-list').slick('slickPlay');
            self.parent().removeClass('pause-active');
        })

    },

    btnPaging: function () {
        $('.btns-paging .btn-prev').on('click', function () {

        });

        $('.btns-paging .btn-next').on('click', function () {

        });
    },

    navDrop: function () {

        var navLink = $('.main-header .gnb .nav-item');
        navLink.on('moveenter', function () {
            $('html, body').addClass('is-nav-open');
        })
        navLink.on('moveleave', function () {
            $('html, body').removeClass('is-nav-open');
        })
    }
};


