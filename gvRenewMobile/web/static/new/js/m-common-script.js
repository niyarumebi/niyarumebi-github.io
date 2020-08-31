$(function () {
    gvshop_renew_m.init();
});

var gvshop_renew_m = {
    init: function () {
        /*common js*/
        gvshop_renew_m.btn_to_top();
        gvshop_renew_m.custom_selectBox();
        gvshop_renew_m.sort_filter();
        gvshop_renew_m.radioBtn();
        gvshop_renew_m.input_deleteBtn();
        gvshop_renew_m.tab_page_ChangeTab();
        gvshop_renew_m.view_clause_page();


        /*individual page js*/
        gvshop_renew_m.inner_footer();
        gvshop_renew_m.dropdown_section();
        gvshop_renew_m.mypage_dropShipTrack();
    },

    btn_to_top: function () {
        //when scrolled, show up
        var btn_target = $('.btn-page-top');

        $(window).on('scroll', function () {
            var sct = $(window).scrollTop();
            if (sct > 100) {
                $('html').addClass('getScroll');
            } else {
                $('html').removeClass('getScroll');
            }
        });


        //when clicked, go to top
        btn_target.on('click', function () {
            $('html').scrollTop(0);
        });
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

    sort_filter: function () {
        var targetElem = $('.sort-filter-wrap .sort-filter');
        targetElem.on('click', function () {
            var self = $(this);
            self.toggleClass('is-active');

            self.find('.dropdown li').on('click', function (e) {
                e.preventDefault();
                $(this).parent('.dropdown').prev('.result-box').find('.txt').text($(this).text());
            });
        });

        /*select inner options*/
        $('.sort-filter li').on('click', function () {
            var self = $(this);
            self.addClass('is-current').siblings().removeClass('is-current');
        });
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
    },

    tab_page_ChangeTab: function () {
        var tabLink = $('.tab-links-wrap .tab-link');
        tabLink.on('click', function (e) {
            e.preventDefault();
            var self = $(this);
            if (self.parent('.tab-links-wrap').hasClass('as-static')) {
                return;
            } else {
                self.addClass('is-active').siblings().removeClass('is-active');
                var data_hash = $(self.attr('href'));
                data_hash.show().siblings().hide();

                data_hash.find('.month-unit-filter .btn-mm').on('click', function (e) {
                    e.preventDefault();
                    var self = $(this);
                    self.parent('li').addClass('is-active').siblings().removeClass('is-active');
                }).eq(0).trigger('click');
            }
        });
    },

    view_clause_page: function () {
        /* coded by seungil */
        var linkMovement = $('.contents-movement li a[href^="#"]');

        linkMovement.on('click', function (event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        });
    },

    /*---------end of common js*/

    /*individual page js------------*/
    inner_footer: function () {
        var footBtn = $('.company-information .company-btn');
        var footBox = $('.company-information .company-infobox');
        footBox.slideUp();

        footBtn.on('click', function () {
            var self = $(this);
            self.next().slideToggle(10);
            self.find('span i').toggleClass('js-icon');
        });
    },

    dropdown_section: function () {
        $('.dropdown-section .head').on('click', function () {
            var self = $(this);

            if (self.parent('.dropdown-section').hasClass('set-opened')) {
                self.parent('.dropdown-section').removeClass('set-opened');
            } else {
                self.parent('.dropdown-section').toggleClass('is-active');
            }
        })
    },

    mypage_dropShipTrack: function () {
        var target_dropBtn = $('.drop-ship-track');

        target_dropBtn.on('click', function () {
            $(this).parents('.state-wrap').find('.recent-ship-track-wrap').toggleClass('is-active');
        });
    }
};