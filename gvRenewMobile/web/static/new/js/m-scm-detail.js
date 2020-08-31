$(function () {
    gvshop_renew_scm_detail.init();
});

var gvshop_renew_scm_detail = {
    init: function () {
        gvshop_renew_scm_detail.scm_modal();
        gvshop_renew_scm_detail.scm_dropdown();
    },

    scm_modal: function() {
            //모달창 
            var modalonBtn = $('.modal-on'),
            modalAll = $('.modal'),
            closeBtn = $('.modal-btn, .close-modal'),
            body = $('body');

            modalonBtn.on('click',function () {
                modalAll.addClass('js-onbox');
                body.addClass('modal-open');
            });
            closeBtn.on('click',function (){ 
                modalAll.removeClass('js-onbox'); 
                body.removeClass('modal-open');
            });
            
        },

    scm_dropdown : function() {
      var moreestimateBtn = $('.more-estimate-btn');
        
        moreestimateBtn.on('click',function (){
           var self = $(this);
            
            self.next().toggleClass('js-block');
            self.find('p span').toggleClass('on')
        });
    }
};