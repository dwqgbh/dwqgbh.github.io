
function getcarno() {

    var province = $("#province").html();
    var region = $("#region").html();
    var num1 = $("#num1").html();
    var num2 = $("#num2").html();
    var num3 = $("#num3").html();
    var num4 = $("#num4").html();
    var num5 = $("#num5").html();
    var energy = $("#new-energy").html();

    var carno = province + region + num1 + num2 + num3 + num4 + num5 + energy;
    $("#carnotilte").val(carno);
}

$(function () {
const $ = (selector) => {
            const nodes = document.querySelectorAll(selector);
            if (nodes.length == 1)
                return nodes[0]
            return nodes
        }
        const $c = (el) => {
            return document.createElement(el)
        }
        const $on = (el, name, call) => {
            if (typeof el == "string") {
                el = $(el)
            }
            if (el.length === undefined) {
                el.addEventListener(name, call)
                return () => el.removeEventListener(name, call)
            }
            else {
                const clears = [].map.call(el, (el) => {
                    el.addEventListener(name, call)
                    return () => el.removeEventListener(name, call)
                })
                return () => clears.forEach(remove => remove());
            }
        }

        const provinceInit = () => {
            const provinces = (""
                + "京津沪渝"
                + "蒙宁新藏桂"
                + '黑吉辽'
                + '晋冀鲁'
                + '苏浙皖赣'
                + '湘鄂豫'
                + '粤闽琼'
                + '川滇黔'
                + '陕甘青'
                + '港澳台'
            )
                .split("")

            provinces.forEach((pro) => {
                const c = $c('div')
                c.innerText = pro
                c.className = "input keyboard"
                $(".k-pro>.card.keyboard").appendChild(c)
            });
        }
        const alphabetInit = () => {
            const alphabet = ["ABCDEFG", "HJKLMN", "PQ RST", "UVW XYZ"]
            alphabet.forEach(abc => {
                const ct = $c('div')
                ct.className = "card keyboard"

                abc.split("").forEach((ab) => {
                    const c = $c('div')
                    c.innerText = ab
                    c.className = "input keyboard"

                    if (ab == " ")
                        c.classList.add("empty")
                    else if (['I', "O"].includes(ab)) {
                        c.classList.add("disabled")
                    }
                    ct.appendChild(c)
                })

                $(".k-alphabet").appendChild(ct)
            })
        }

        const numberInit = () => {
            const numbers = ["123", "456", "789", "0d"]
            numbers.forEach(abc => {
                const ct = $c('div')
                ct.className = "card keyboard"

                abc.split("").forEach((ab) => {
                    const c = $c('div')
                    c.innerText = ab;
                    if (ab == 'd') {
                        c.innerText = 'del'
                    }
                    c.className = "input keyboard"
                    ct.appendChild(c)
                })

                $(".k-num").appendChild(ct)
            })
    }


        const keytouch = () => {
            let target = null
            const hidePanel = (t) => {
                $(".kbdpanel").forEach((el) => {
                    el.style.display = "none";
                })
                if (target) {
                    target.classList.remove("highlight")
                }
                if (t) {
                    t.classList.add("highlight");
                    target = t;
                }
            };
            const toNext = () => {

                if (target.nextElementSibling && target.nextElementSibling.id != "new-energy") {
                    target.nextElementSibling.click();
                }
            }
            const els = [
                [
                    $("#province"), () => $('.k-pro').style.display = "block"],

                [
                    $("#region"), () => {
                        $('.mergekeyboard').style.display = "flex";
                        $('.k-alphabet').style.display = "block";
                    }
                ],
                [
                    $(".num"), () => {
                        $('.mergekeyboard').style.display = "flex";
                        $('.k-alphabet').style.display = "block";
                        $('.k-num').style.display = "block";
                    }
                ]
            ]

            els.forEach(([el, call]) => {
                $on(el, 'click', (e) => {
                    hidePanel(e.currentTarget)
                    call();
                    e.stopPropagation()
                    e.preventDefault();
                })
            })

            $on(".keyboards", 'click', (e) => {
                e.stopPropagation()
                e.preventDefault();
                if (target && e.target.className.match("input")) {
                    if (e.target.innerText == 'del') {
                        target.innerText = ""
                    } else {
                        target.innerText = e.target.innerText
                    }
                    toNext();
                }
                getcarno();
            })
            $on(document, 'click', () => {
                console.log("false");
                hidePanel()
            })
    }



        provinceInit()
        alphabetInit()
        numberInit()
        keytouch();
});