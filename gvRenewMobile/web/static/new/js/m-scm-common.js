$(function () {
    gvshop_renew_scm.init();
});

var gvshop_renew_scm = {
    init: function () {
        gvshop_renew_scm.custom_selectBox();
        gvshop_renew_scm.input_deleteBtn();
        gvshop_renew_scm.header_action();
     //   gvshop_renew_scm.getScroll(); 나스업로드용엔 없음(base에 넣었기때문)

        gvshop_renew_scm.categorypage_dropdown(); //only used in category-list.html
    },

    custom_selectBox: function () {
        var x, i, j, selElmnt, a, b, c;
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
    },

    header_action: function () {
        /*getScroll action*/
        if ($('body').find('.for-moving-header-wrap').length === 1) {
            $('.header').css({
                position: 'fixed'
            });
            $(window).on('scroll', function () {
                var sct = $(window).scrollTop();
                if (sct > 655) {
                    $('html').addClass('getScroll');
                } else {
                    $('html').removeClass('getScroll');
                }
            });
        }

        /*btn-whole-cate dropdown hover*/
        $('.header .btn-whole-cate').on('mouseenter', function () {
            $(this).next('.dropdown-wrap').addClass('is-active');

        });
        $('.header .dropdown-wrap').on('mouseleave', function () {
            $(this).removeClass('is-active');
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

        target_subParent.on('mouseenter', function (e) {
            $(this).find('.sub-link').addClass('is-active');
        });

        target_subParent.on('mouseleave', function () {
            $(this).find('.sub-link').removeClass('is-active')
        });
    },

    getScroll: function () {
        $(window).on('scroll', function () {
            var sct = $(window).scrollTop();
            if (sct > 100) {
                $('html').addClass('getScroll');
            } else {
                $('html').removeClass('getScroll');
            }
        });
    },

    categorypage_dropdown : function(){
        var categoryPage_target = $('.m-scm-category-list-wrap .type-list-wrap .type');

        categoryPage_target.on('click', function(){
            $(this).toggleClass('is-active');
        })
    }
};