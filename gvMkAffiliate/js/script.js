$(function () {
    aff.init();
});

var aff = {
    init: function () {
        aff.openHeader(); //전체메뉴 클릭 시 헤더 드랍다운
        aff.loginPage();
        aff.cardOfMainVisual(); //메인비주얼 카드
        aff.clickDropDown(); //내용의 슬라이드 다운 애니메이션
        aff.clearTxtField(); //input 안의 X버튼 클릭시 내용 삭제
    },

    openHeader: function () {
        var btnOpenSiteMap = $('.header .btn_navigator .btn_txt.closed');
        var btnCloseSiteMap = $('.header .btn_navigator .btn_txt.open, .browser_screen');

        var btnOpenSearchBar = $('.header .user_tools .btn_user_search');
        var btnCloseSearchBar = $('.header .user_tools .btn_close_user_search, .browser_screen');

        var searchBar = $('.header .user_tools .search_wrap > .form_control');

        /*header 전체메뉴 오픈관련*/
        btnOpenSiteMap.on('click', function () {
            $('body').addClass('open_header_drop_down');

            /*검색 & 전체메뉴 중복 클릭 제거*/
            if ($('body').hasClass('open_header_drop_down')) {
                $('body').removeClass('open_search_bar');
            }
        });
        btnCloseSiteMap.on('click', function () {
            $('body').removeClass('open_header_drop_down');
        });

        var btnSiteMapSubMenuTrigger = $('.category_columns .menu_body li');
        btnSiteMapSubMenuTrigger.on('click', function () {
            var self = $(this);
            if (self.hasClass('has_sub_menu')) {
                self.toggleClass('is_active');
            }
        });

        /*header 검색바 오픈관련*/
        btnOpenSearchBar.on('click', function () {
            $('body').addClass('open_search_bar');
            /*
               검색 두번 눌렀/input에 포커스 없을 시, 검색 다시 눌렀으면 닫히도록 하는 것
               if($('.search_wrap > .form_control').is(":focus")){
               } else {
                   $('body').removeClass('open_header_drop_down');
               }*/

            /*검색 & 전체메뉴 중복 클릭 제거*/
            if ($('body').hasClass('open_search_bar')) {
                $('body').removeClass('open_header_drop_down');
            }
        });
        btnCloseSearchBar.on('click', function (e) {
            e.stopPropagation();
            $('body').removeClass('open_search_bar');
            searchBar.val('');
        });
    },

    loginPage: function () {
        $('.actions .link').on('click', function () {
            var self = $(this);
            self.addClass('is_active').siblings().removeClass('is_active');

            var dataHash = self.attr('href');
            $(dataHash).show().siblings().hide();
        }).eq(0).trigger('click');
    },

    cardOfMainVisual: function () {
        $('.moving_slide').slick({
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000
        });

        $('.long_cards li').on('click', function () {
            $(this).addClass('flip');
        });

        $('.long_cards li .desc .tool').on('click', function (e) {
            e.stopPropagation();
            $(this).parents('.long_cards li').removeClass('flip');
        });
    },

    clickDropDown: function () {
        var btnTrigger = $('.row_drop_down .head');
        btnTrigger.on('click', function () {
            var self = $(this);
            self.parent('.row_drop_down').toggleClass('is_active');
        })
    },

    clearTxtField: function () {
        var target = $('.form_group .form_control');
        /*
        * form_control 누르면 포커스됏을때, del_all눌러도 form_control 포커스 안 없어지게 하는것 클리어,
        * = 자식요소에도 포커스 되도록 하는 것 = stopPropagatio 안하는것
        * 인풋창 안에 텍스트가 있다면, 다시 클릭했을 때도 지우지 않는 것
        * */
        target.on('click', function () {
            var self = $(this);
            var btnDel = self.next('.del_all');
            btnDel.addClass('is_active');

            btnDel.on('click', function () {
                $(this).prev('.form_control').val('');
            });
        });

        target.parent().on('blur', function (e) {
            e.stopPropagation()
            var self = $(this);
            self.next('.del_all').removeClass('is_active');
        });
    }

};