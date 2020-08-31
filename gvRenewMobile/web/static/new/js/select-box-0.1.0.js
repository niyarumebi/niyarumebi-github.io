/*
 select-box.js
 Version: 0.1.0
 author: dev_seonggil
 website: https://www.w3schools.com/howto/howto_custom_select.asp

 description
  Select Box 커스텀 버젼의 js입니다.
  참고 사항으로는 website 에 기재된 주소를 보시면 주석 및 설명이 달려 있습니다.

  만약 select box item에 커스텀한 기능을 추가하고 싶다면 dict 자료구조에 함수 포인터를 넘겨 주어야합니다.
  ex
  $(document).ready(function () {
      SelectBox010.init({option});
  });
*/


var SelectBox010 = {
    custom_action_dict: null,

    init: function (custom_action_dict) {
        SelectBox010.custom_action_dict=custom_action_dict;
        SelectBox010.addSelectDIV();
    },

    closeAllSelect: function (elmnt) {
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
    },

    doCustomEvent: function(node) {
        var id = node.getAttribute('id');
        if (SelectBox010.custom_action_dict == null) {
            return ;
        }

        for(var i = 0; i < SelectBox010.custom_action_dict.length; i++) {
            if (id == SelectBox010.custom_action_dict[i].id){
                SelectBox010.custom_action_dict[i].eventFunction(node);
            }
        }
    },

    addSelectDIV: function () {
        var x, i, j, selElmnt, a, b, c, setItemNumber = 0;
        /*look for any elements with the class "custom-select":*/
        x = document.getElementsByClassName("custom-select");
        for (i = 0; i < x.length; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");
            a.setAttribute("id", selElmnt.getAttribute('id')+'_div');
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);
            /*for each element, create a new DIV that will contain the option list:*/
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            b.setAttribute("id", selElmnt.getAttribute('id')+'_items_div');
            for (j = 1; j < selElmnt.length; j++) {
                /*for each option in the original select element,
                create a new DIV that will act as an option item:*/
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                var dataID = selElmnt.options[j].getAttribute("data-id");
                c.setAttribute("data-id", dataID);
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
                            h.setAttribute('data-id',this.getAttribute('data-id'));
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            for (k = 0; k < y.length; k++) {
                                y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected");
                            SelectBox010.doCustomEvent(this);
                            break;
                        }
                    }
                    h.click();
                });
                c.setAttribute("id", setItemNumber);
                b.appendChild(c);
                setItemNumber++;
            }
            x[i].appendChild(b);

            a.addEventListener("click", function (e) {
                /*when the select box is clicked, close any other select boxes,
                and open/close the current select box:*/
                e.stopPropagation();
                SelectBox010.closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });
        }
    }
};