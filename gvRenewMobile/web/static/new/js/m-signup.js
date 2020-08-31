$(function(){
    /*when input is on focus, remove .sub-placeholder : vice versa*/
    var input_form = $('.m-signup-personal-wrap .form-ctrl input, .m-signup-company-wrap .form-ctrl input, .for-find-wrap .form-ctrl input');
    input_form.on('focus keydown keypress', function () {
        var self = $(this);
        self.siblings('.sub-placeholder').css({
            display: 'none'
        });
    });

    input_form.on('blur', function () {
        var self = $(this);
        if (self.val().length === 0) {
            self.siblings('.sub-placeholder').css({
                display: 'block'
            });
        }
    });

    /*email-dropdown*/
    var form_ctrl = $('.m-signup-personal-wrap .form-ctrl, .m-signup-company-wrap .form-ctrl');
    form_ctrl.find('.dropdown').on('click', function (e) {
        var self = $(this);
        self.toggleClass('is-active');
        self.find('li').on('click', function () {
            var self_child = $(this);
            var the_value = self_child.text();
            if (the_value === '직접입력') {
                self_child.parents('.form-ctrl').prev('.col1').find('.email-domain').focus().val('').attr('readonly', false);
            } else {
                self_child.parents('.form-ctrl').prev('.col1').find('.email-domain').val(the_value).attr('readonly', true);
            }
        })
    });

    /*when click out of email-dropdown*/
    /*form_ctrl.find('.dropdown .head').on('change', function(){
        $(this).removeClass('is-active');
    });*/
    $(window).on('click', function (e) {
        if (!form_ctrl.find('.dropdown').is(e.target) && form_ctrl.find('.dropdown').has(e.target).length === 0) {
            form_ctrl.find('.dropdown').removeClass('is-active');
        }
    });
});