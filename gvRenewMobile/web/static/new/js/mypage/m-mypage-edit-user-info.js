$(function(){
    var form_ctrl = $('.value.for-email .form-ctrl');
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
    $(window).on('click', function (e) {
        if (!form_ctrl.find('.dropdown').is(e.target) && form_ctrl.find('.dropdown').has(e.target).length === 0) {
            form_ctrl.find('.dropdown').removeClass('is-active');
        }
    });

});