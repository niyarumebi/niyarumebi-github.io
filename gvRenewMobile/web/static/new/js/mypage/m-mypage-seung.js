$(function() {
    var btnTarget = $('.click-btn-tr');
    var targetContent = $('.click-detail-box');
    targetContent.slideUp();

    btnTarget.on('click', function() {
        var self = $(this);
        self.next().slideToggle(10);
    })
});


$(function() {
    var btnTarget = $('.slide-btn-top-next');
    var targetContent = $('.slide-box-top-next');
    targetContent.slideUp();

    btnTarget.on('click', function() {
        var self = $(this);
        self.parent().next().slideToggle(10);
//            self.find('span i').toggleClass('js-icon');
    })
});

$(function() {
    var btnTarget = $('.slide-btn-top2-next');
    var targetContent = $('.slide-box-top2-next');
    targetContent.slideUp();

    btnTarget.on('click', function() {
        var self = $(this);
        self.parent().parent().next().slideToggle(10);
//            self.find('span i').toggleClass('js-icon');
    })
});

$(function() {
    var btnTarget = $('.slide-btn-top3-next');
    var targetContent = $('.slide-box-top3-next');
    targetContent.slideUp();
    btnTarget.on('click', function() {
        var self = $(this);
        self.parent().parent().parent().next().slideToggle(10);
        self.find('span i').toggleClass('js-icon');
    })
});