/*coded by seungil*/
$(function(){
    var x, i, j, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select-detail");
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected select-arrow-active");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items");
        for (j = 1; j < selElmnt.length; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }


    function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
      /*  for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("");
            }
        }*/
    }

    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
});


$(function () {
    $('.recommendation-list-box .recommendation-list').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
});


$(function () {
    $('.recommendation-list-slow .recommendation-list').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
});
//  more btn
$(function () {
    var ondetileBtn = $('.detail-more span');

    ondetileBtn.on('click', function () {
        var self = $(this);
        self.parent().addClass('js-none');
        self.parent().prev().addClass('js-detile');
    })
});


//  more btn 후기
$(function () {
    var reviewsBtn = $('.reviews-list-morebtn');
    var reviewsphothBtn = $('.reviews-detail-photo');
    var reviewsphotoBox = $('.reviews-detail-more-photo')
    reviewsphotoBox.slideUp();

    reviewsBtn.on('click', function () {
        var self = $(this);
        self.parent().prev().slideToggle(10);
        self.find('span i').toggleClass('js-icon');

        if (self.find('p').text() == '닫기') {
            self.find('p').text('더보기');
        } else {
            self.find('p').text('닫기');
        }
    });
});


$(function () {
    var btnTarget = $('.information-review-list .click-btn-tr');
    var targetContent = $('.information-review-list .click-detail-box');
    targetContent.slideUp();

    btnTarget.on('click', function () {
        var self = $(this);
        self.next().slideToggle(10);
    })
})


$(function () {
    var nextBoxbtn = $('.next-box-btn');
    var nextBox = $('.next-box');

    nextBoxbtn.on('click', function () {
        var self = $(this);
        self.next().toggleClass('js-block');
        self.find('.question-title span').toggleClass('js-none');
    })
});


//    fixed header js
$(function () {
    /*고정헤더*/
    $('.detail-menu-list').each(function () {
        var $win = $(window),
            $header = $(this),


            headerOffsetTop = $header.offset().top;
        $win.on('scroll', function () {

            var scrollTop = $win.scrollTop(),
                $section = $('section');

            var scroll = Math.floor(scrollTop),
                offset = Math.floor(headerOffsetTop);

            if (scroll > offset) {
                $header.addClass('on')
            } else {
                $header.removeClass('on')
            }
        });
    });
});


//    fixed header list js
$(function () {
    var link = $('.detail-menu-list li');

    link.on('click', function (e) {
        e.preventDefault();
        var self = $(this);

        self.addClass('on').siblings().removeClass('on');
        var dataHash = self.find('a').attr('href');
        if (self.hasClass('on')) {
            $(dataHash).addClass('is_current').siblings().removeClass('is_current');
        }
    }).eq(0).trigger('click');
});

$(function () {
    var sct = $('.detail-menu-list li a');

    sct.on('click', function (e) {
        e.preventDefault();
        var targetPoint = $('.detail-all-box').offset().top - 60;
        $('html,body').animate({
            scrollTop: (targetPoint)
        }, '1000');
    });
});

//    구매하기 버튼 js
$(function() {
    var fixbuyingBtn = $('.fix-buying-btn'),
        fixbuyingBox = $('.fix-buying-box'),
        fixbuyingresetBtn = $('.fix-buying-reset'),
        fixbuyingOptionBtn = $('.fix-buying-option .fix-buying-optionbtn');


    fixbuyingBtn.on('click', function() {
        fixbuyingBox.addClass('js-in-box');
    })
    fixbuyingresetBtn.on('click', function() {
        fixbuyingBox.removeClass('js-in-box');
    });

    fixbuyingOptionBtn.on('click', function() {
        var self = $(this);

        self.addClass('js-none');
        self.next().addClass('js-block');
    })
});