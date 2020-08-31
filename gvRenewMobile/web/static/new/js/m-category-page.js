$(function() {
    var contentbtn = $('.category-list .big-category-list');
    var contentlist = $('.category-list .sub-category-list');
    contentlist.slideUp();

    contentbtn.on('click', function(){
        var self = $(this);
        self.next().slideToggle(10);
        self.find('span i').toggleClass('js-icon');
    });
});