$(function () {
    gvshop_renew.init();
});

var gvshop_renew = {
    init: function () {
        gvshop_renew.go_top();
        gvshop_renew.header_action();
        gvshop_renew.sortFilter_click();
        gvshop_renew.radioBtn();
        gvshop_renew.input_deleteBtn();
    },

    go_top: function () {
        //when clicked, go to top
        var btn_go_top = $('.btn-page-top');
        btn_go_top.on('click', function (e) {
            e.preventDefault();
            $('html').scrollTop(0);
        });
    },

    header_action: function () {
        /*getScroll action*/
        if ($('body').find('.for-moving-header-wrap').length === 1) {
            $(window).on('scroll', function () {
                var sct = $(window).scrollTop();
                if (sct > 655) {
                    $('body').addClass('getScroll');
                } else {
                    $('body').removeClass('getScroll');
                }
            });
        } else {
            $('.header').css({
                position: 'fixed'
            })
        }

        /*btn-whole-cate dropdown hover*/
        $('.header .btn-whole-cate').on('hover', function (e) {
            e.stopPropagation();
            $(this).addClass('is-active');
        });


        /*subject hover cascading*/
        var target_parent = $('.main-header .navigator .bigcate-column li');
        var target_subParent = $('.main-header .navigator .sub-column li');

        target_parent.on('mouseenter', function () {
            $(this).find('.bigcate-link').addClass('is-active');
        });

        target_parent.on('mouseleave', function () {
            $(this).find('.bigcate-link').removeClass('is-active')
        });

        target_subParent.on('mouseenter', function () {
            $(this).find('.sub-link').addClass('is-active');
        });

        target_subParent.on('mouseleave', function () {
            $(this).find('.sub-link').removeClass('is-active')
        });
    },

    sortFilter_click: function () {
        $('.sort-filter li').on('click', function () {
            var self = $(this);
            self.addClass('is-active').siblings().removeClass('is-active');
        }).eq(0).trigger('click');
    },

    radioBtn: function () {
        var btnRadio = $('.btn-radio');
        btnRadio.on('click', function () {
            var self = $(this);
            self.addClass('is-active').siblings().removeClass('is-active');
        }).eq(0).trigger('click');
    },

    input_deleteBtn: function () {
        var form_group = $('.form-group.has-delete-btn');
        var form_ctrl = form_group.find('.form-ctrl');
        var inputArea = form_ctrl.find('input');
        var btn_delete = form_ctrl.find('.btn-clear');

        /*when inputArea clicked, btn_delete shows up*/
        inputArea.on('focus', function () {
            var self = $(this);
            self.parent('.form-ctrl').addClass('btn-del-active');
        });
        /*when inputArea focused out, btn_delete disappears*/
        $(window).on('click', function (e) {
            if (!form_ctrl.is(e.target) && form_ctrl.has(e.target).length === 0) {
                form_ctrl.removeClass('btn-del-active');
            }
        });

        /*input clear action*/
        btn_delete.on('click', function () {
            var self = $(this);
            self.prev('input').val('');
        });
    }
};
