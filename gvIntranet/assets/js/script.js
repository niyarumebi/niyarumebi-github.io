$(function () {
    intra.init();
});
var intra = {
    init: function () {
        intra.designSelect();
       // intra.selectDropDown(); //직원등록 커스텀 셀렉트박스
        intra.writeScheduleChangeColor(); //회사스케줄 글작성 판넬 : 체인지 칼라
        intra.writeScheduleServeralLinesPlaceholder(); //회사스케줄 글작성 판넬 : 체인지 칼라
        intra.ajaxRegisterEmployee(); //ajax 통신 전체 (밑으로 쭈욱)
        intra.simpleCheckBox();
    },
    designSelect: function () {var x, i, j, selElmnt, a, b, c;
        /*look for any elements with the class "custom-select":*/
        x = document.getElementsByClassName("custom-select");
        for (i = 0; i < x.length; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);
            /*for each element, create a new DIV that will contain the option list:*/
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            for (j = 1; j < selElmnt.length; j++) {
                /*for each option in the original select element,
                create a new DIV that will act as an option item:*/
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener("click", function(e) {
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
            a.addEventListener("click", function(e) {
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
            for (i = 0; i < y.length; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i)
                } else {
                    y[i].classList.remove("select-arrow-active");
                }
            }
            for (i = 0; i < x.length; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide");
                }
            }
        }
        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);
    },

    selectDropDown: function () {
        var dropDownTrigger = $('.register_employee .select_box .txt');

        $('html').on('click', function (e) {
            if (!(e.target === dropDownTrigger[0]) && !(e.target === dropDownTrigger[1])) {
                if (dropDownTrigger.parents('.select_box').hasClass('is_active')) {
                    dropDownTrigger.parents('.select_box').removeClass('is_active');
                }
            } else {
                if (e.target === dropDownTrigger[0]) {
                    $(dropDownTrigger[0]).parents('.select_box').toggleClass('is_active');
                } else if (e.target === dropDownTrigger[1]) {
                    $(dropDownTrigger[1]).parents('.select_box').toggleClass('is_active');
                }
            }

        });

        /*$('html').on('click', function (e) {
            if (!(e.target === dropDownTrigger[0])) {
                if(dropDownTrigger.parents('.select_box').hasClass('is_active')){
                    dropDownTrigger.parents('.select_box').removeClass('is_active');
                }
            } else {
                dropDownTrigger.parents('.select_box').toggleClass('is_active');
            }

        });*/

        var valueElement = $('.drop_down li');
        valueElement.on('click', function () {
            var self = $(this),
                value = self.text();
            self.parent('.drop_down').prev('.txt').html(value);
        })
    },

    writeScheduleChangeColor: function () {
        var target = $('.enterprise_schedule .post_category .cate');
        target.on('click', function () {
            var self = $(this);
            self.addClass('is_active').siblings().removeClass('is_active');
            if (self.hasClass('is_active')) {
                self.parent('.post_category').prev('.btn_cancel').css('background-color', self.css('background'));
            }
        })
    },

    writeScheduleServeralLinesPlaceholder: function () {
        var target = $('.enterprise_schedule .typing_window textarea');
        target.on('change keyup paste', function () {
            var length = $(this).val().length;
            if (length > 0) {
                $(this).addClass('is_typing');
            } else {
                $(this).removeClass('is_typing');
            }
        })
    },

    ajaxRegisterEmployee: function () {
        function login() {
            var id = $('#gv_id').val();
            var pwd = $('#gv_pwd').val();

            $.ajax({
                type: "POST",
                url: "/login_work/",
                data: {
                    'id': id,
                    'pwd': pwd,
                },
                success: function (data) {
                    if (data == 'ok') {
                        alert("Welcome!!");
                        location.replace('/');
                    }
                    else {
                        alert("Check your id or password~")
                    }
                }
            })
        }
    },

    simpleCheckBox : function(){
        var target = $('.checks_wrap .check');
        target.on('click', function(){
            $(this).toggleClass('is_checked').siblings().removeClass('is_checked');
        })
    }
};

