//모달창
$(function () {
    var modalonBtn = $('.modal-on'),
        modalAll = $('.modal'),
        modaloffBtn = $('.modal-btn'),
        closeBtn = $('.close-modal'),
        body = $('body');
    
    
    modalonBtn.on('click',function () {
        modalAll.addClass('js-onbox');
        body.addClass('modal-open');
    });
    
    modaloffBtn.on('click',function (){ 
        modalAll.removeClass('js-onbox'); 
        body.removeClass('modal-open');
    });
    closeBtn.on('click',function (){ 
        modalAll.removeClass('js-onbox'); 
        body.removeClass('modal-open');
    });
});