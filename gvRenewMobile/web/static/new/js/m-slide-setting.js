$(function(){
    /* index page : main-visual */
    $('.m-index-wrap .main-visual-wrap .scene-list').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000
    });

    /* index page : full-width-banner */
    $('.m-index-wrap .full-width-banner').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5500
    });

    /* index page : recent-section */
    $('.m-index-wrap .recent-section .scene-list').slick({
        arrows: false,
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000
    });

    /* index page : event-section */
    $('.m-index-wrap .event-section .scene-list').slick({
        arrows: false,
        dots: false,
        centerMode : true,
        autoplay: true,
        autoplaySpeed: 5000
    });

    /*----------------------------*/


    /* big-category page : main-visual */
    $('.m-big-category-wrap .main-visual-wrap .scene-list').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000
    });

    $('.m-big-category-wrap .best-prd-section .scene-list').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5500
    });

    /*big-category page : trend-section */
    $('.m-big-category-wrap .trend-section .scene-list').slick({
        arrows: false,
        dots: false,
        centerMode: true,
        slidesToShow: 2,
        autoplay: true
    });

    /*( big-category page : trend-section ) different autoplaySpeed by odd-even*/
    $('.m-big-category-wrap .trend-prd-list .trend-category:nth-child(2n-1)').find('.scene-list').slick('slickSetOption', 'autoplaySpeed', 4000, true);
    $('.m-big-category-wrap .trend-prd-list .trend-category:nth-child(2n)').find('.scene-list').slick('slickSetOption', 'autoplaySpeed', 5000, true);

    $('.m-middle-category-wrap .best-items .scene-list').slick({
        arrows: true,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000
    });

    /* mypage event : main slide */
    $('.mobile-event .main-banner .scene_list').slick({
        dots: true,
        arrow: false,
        autoplay: true,
        autoplaySpeed: 4000
    });

    /* mypage event : bottom slide */
    $('.mobile-event .goods-list-wrap .goods-list').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
});