$(function () {
    marketer.init();
});

var marketer = {
    init: function () {
        marketer.toTop();
        marketer.doAnimation();
        marketer.fnaAccordian();
    },

    toTop: function () {
        var btnUp = $('.footer .btn-up');

        btnUp.on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            })
        });
    },

    //vs애니메이션
    doAnimation: function () {
        $('.main-area .desc h2').addClass('fadeInUp1');
        $('.main-area .desc p').addClass('fadeInUp2');
        $('.main-area .desc .btn-more').addClass('fadeInUp3');
        $('.main-area .desc img').addClass('fadeInLeft1');
    },

    fnaAccordian: function () {
        var li = $('.fna .answer li'),
            que = $('.fna .que'),
            ans = $('.fna .ans');

        $(que).on('click', function (){
            var self = $(this);
            if (self.next('.ans').hasClass('is-active')) {
                ans.removeClass('is-active');
                self.next('.ans').addClass('is-active');
                self.next('.ans').slideDown(400, 'easeInOutExpo');
            } else {
                ans.removeClass('is-active');
                ans.slideUp(400, 'easeInOutExpo');
            }
        })
    }
};




