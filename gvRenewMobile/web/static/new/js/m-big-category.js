$(function(){

    var best_prd_slide = $('.m-big-category-wrap .best-prd-section .scene-list');
    var targetArea = $('.best-prd-section');

    $(window).on('load', function () {
        var data_bg_src = best_prd_slide.find('[data-slick-index="0"]').data('bg');
        targetArea.css('background-image', 'url(' + data_bg_src.replace(/"/g, '\\"') + ')');
    });

    /*animation which should be played when the slide is changed : beforeChange & afterChange*/
    best_prd_slide.on('beforeChange', function (event, slick, currentSlide) {
    });

    best_prd_slide.on('afterChange', function (event, slick, currentSlide) {
        var data_bg_src = $(this).find('[data-slick-index="' + currentSlide + '"]').data('bg');
        targetArea.css('background-image', 'url(' + data_bg_src.replace(/"/g, '\\"') + ')');
        console.log('url(' + data_bg_src.replace(/"/g, '\\"') + ')')
    });
});