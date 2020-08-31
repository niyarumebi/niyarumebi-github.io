$(function () {
    gvlx.init();
});
var gvlx = {
    init: function () {
        gvlx.slideSetting();
        // gvlx.luxuryMainTab();
        gvlx.openHeader();
        gvlx.basicAction();
    },
    slideSetting: function () {
        $('.luxury_main .main_visual .scene-list').slick({
            dots: true,
            arrows: true,
            autoplay: false,
            infinite: true,
            fade: true,
            cssEase: 'linear'
        });
        $('.luxury_main .one_col_slide .scene-list').slick({
            dots: true,
            arrows: true,
            autoplay: false,
            infinite: true,
            fade: true,
            cssEase: 'linear'
        });
        $('.luxury_main .two_col_slide .scene-list').slick({
            dots: true,
            arrows: true,
            autoplay: false,
            infinite: true,
            fade: true,
            cssEase: 'linear'
        });
        $('.luxury_prd_detail .scene-list.more-brand-items').slick({
            dots: true,
            arrows: true,
            autoplay: false,
            infinite: true,
            fade: true,
            cssEase: 'linear'
        });
        $('.luxury_brand_page .brand_item_detail .scene-list').slick({
            dots: true,
            arrows: false,
            autoplay: false,
            infinite: true,
            fade: true,
            cssEase: 'linear'
        });
        $('.luxury_category_group .best_seller .scene-list').slick({
            dots: false,
            arrows: true,
            autoplay: false,
            infinite: true,
            fade: true,
            cssEase: 'linear'
        });
    },

    openHeader: function () {
        var hide = false; //없을때가 false
        var dropDownTrigger = $('.luxury_header .btn_luxury_sitemap');

        $('body').on('click', function (e) {
            if (!hide && (e.target == dropDownTrigger[0])) { //꺼져있고 클릭된곳이 버튼이면
                // /*토글대신*/
                if (!hide) {
                    dropDownTrigger.addClass('is_active');
                    hide = true; //켜져있음
                } else {
                    dropDownTrigger.removeClass('is_active');
                    hide = false;
                }
            } else { // 다른 상태들은
                dropDownTrigger.removeClass('is_active');
                hide = false;
            }
        });
    },

    luxuryMainTab: function () {
        //카테고리 클릭 반응
        $('.general_list .tab_links .link').on('click', function (e) {
            e.preventDefault();
            var self = $(this);
            self.addClass('is_active').siblings().removeClass('is_active');
            var dataHash = self.attr('href');
            if (self.hasClass('is_active')) {
                $(dataHash).show().siblings().hide();
                $(dataHash).find('.items ul li').css('display', 'block');
            }
        }).eq(0).trigger('click');

        //브랜드 클릭 시 소팅
        $('.general_list .sub_cate .link').on('click', function (e) {
            e.preventDefault();
            var self = $(this);
            var siblings = $('.general_list .sub_cate .link');
            var item = $('.items ul li');

            //일단 모두 가려준 뒤 클릭한 self.text값과 item data값이 같으면 display해주기
            item.css('display', 'none');
            var target = self.parent().next('.items').find('li');
            target.each(function () {
                if ($(this).data('cate') == self.text()) {
                    $(this).show();
                }
            });

            //전체 클릭 시 모두 보여주기
            if (self.is(siblings.first())) {
                item.css('display', 'block');
            }
        }).eq(0).trigger('click');
    },

    basicAction: function () {
        var generalListItem = $('.general_prd_list .items .item');
        generalListItem.hover(function () {
            $(this).find('.btn_link').html('구매 하기');

        }, function () {
            $(this).find('.btn_link').html('BUY NOW');
        })
    }
};