$(document).ready(function () {
    //if(window.location.search=="?baidu"||window.location.search=="?douyin"||window.location.search=="?toutiao"||window.location.search=="?guanwang"||window.location.search=="?dem"||window.location.search=="?wy"||window.location.search=="?zhanshang"){
    //$.cookie('laiyuan',window.location.search, {path:'/',expires: 2});  
    //}
    var searchstr = window.location.search;
    if (searchstr != null && searchstr != "" && searchstr.indexOf("?") != -1) {
        $.cookie('laiyuan', window.location.search, { path: '/', expires: 2 });
        console.log("search:" + searchstr);
    }
});

jQuery(document).ready(function ($) {
    $('#header .logo,.totop').click(function () { $('html,body').animate({ scrollTop: '0px' }, 800); });
});


$(document).ready(function () {
    $("#header .box .wrap").mouseover(function () {
        $("#header .box").addClass("white");
    });
    $("#header .box .wrap").mouseout(function () {
        $("#header .box").removeClass("white");
    });
});


//迷你页眉
window.onload = function () {
    var topNav = document.getElementById("header");
    window.onscroll = function () {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop >= 50) {
            topNav.className = 'mini-header';
        } else {
            topNav.className = 'ldpage-head';
        }
    }
}



$(function () {



    //参观人士免责条款
    $(document).ready(function () {
        $("#chkAgree").click(function () {
            $(this).parent().parent().parent().toggleClass("ty");
        });
    });
    $(document).ready(function () {
        $(".tiaokuan .tk-tips-txt a,#disclaimer-layer .head span,.B-layer").click(function () {
            $("#disclaimer-layer").toggle();
        });
    });

    $("#btnsendsms").click(function () {
        if ($("#txtCode").val() == "" || $("#txtCode").val().length != 4) {
            dialog({ title: '提示', content: "请输入正确的验证码再确认！", okValue: '确定', ok: function () { } }).showModal();
            return;
        }




        $("#btnsendsms").prop("disabled", true);
        $.ajax({
            type: "POST",
            dataType: "json",
            data: { txtUserTel: $("#txtUserTel").val(), txtCode: $("#txtCode").val() },
            url: "/plugins/submits/ajax.ashx?action=sendcodesms",
            beforeSend: function (XMLHttpRequest) {
            },
            success: function (data) {
                if (data.status == 1) {
                    $(".auth_code").hide();
                    sendMessage();
                }
                dialog({ title: '提示', content: data.msg, okValue: '确定', ok: function () { } }).showModal();
                $("#code").attr("src", "/tools/verify_code.ashx?time=" + Math.random());
                $("#btnsendsms").prop("disabled", false);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#btnsendsms").prop("disabled", false);
            }
        });

    });


    $("#btnchecksendsms").click(function () {
        if ($("#txtSmsCode").val() == "" || $("#txtSmsCode").val().length != 4) {
            dialog({ title: '提示', content: "请输入正确的验证码再操作！", okValue: '确定', ok: function () { } }).showModal();
            return;
        }

        $("#btnchecksendsms").prop("disabled", true);
        $.ajax({
            type: "POST",
            dataType: "json",
            data: { txtUserTel: $("#txtUserTel").val(), txtSmsCode: $("#txtSmsCode").val() },
            url: "/plugins/submits/ajax.ashx?action=submits_checksms",
            beforeSend: function (XMLHttpRequest) {
            },
            success: function (data) {
                if (data.status == 1) {

                    if (data.succid && data.succid != '') {
                        document.location = "/individual_show/" + data.succid + ".html";
                        return;
                    }

                    $("#btnchecksendsms").addClass("checksmssuccess");
                    $(".se1").hide();
                    $(".se2").show();
                } else {
                    dialog({ title: '提示', content: data.msg, okValue: '确定', ok: function () { } }).showModal();
                }
                $("#btnchecksendsms").prop("disabled", false);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#btnsendsms").prop("disabled", false);
            }
        });

    });







    //$(document).ready(function(){
    //   $(".ldpage-head .menu ul li").click(function(){
    //        var obj=$(this).attr("data-obj")
    //	    $("#n"+obj).addClass("cur").siblings().removeClass("cur"); 
    //      });
    //  });   

    //表单切换
    $(document).ready(function () {
        $(".application .tab ul li").click(function () {
            var obj = $(this).attr("data-obj")
            $("#s" + obj).addClass("on").siblings().removeClass("on");
        });
    });

    $(document).ready(function () {
        $(".right-layerbtn .czbm").click(function () {
            $(".application .tab .t2").addClass("on");
            $(".application .tab .t1").removeClass("on");
        });
        $(".right-layerbtn .cgbm").click(function () {
            $(".application .tab .t1").addClass("on");
            $(".application .tab .t2").removeClass("on");
        });
    });
    //$(document).ready(function(){
    //	  $(".application .tab .t1,.right-layerbtn .czbm").click(function(){$("#category_id").attr('value',"2");});
    //	  $(".application .tab .t2,.right-layerbtn .cgbm").click(function(){$("#category_id").attr('value',"1");});
    //	  $(".application .tab .t1,.right-layerbtn .czbm").click(function(){$("#txtTitle").attr('value',"展位申请");});
    //	  $(".application .tab .t2,.right-layerbtn .cgbm").click(function(){$("#txtTitle").attr('value',"参观登记");});
    //
    //  });
    //m
    $(".m-menu-btn,.touchmask").click(function () {
        $("body").toggleClass("wsactive");
    });

    $("#header .menu ul li .mbtn-u").click(function () {
        $(this).parent().children(".sub,.sub2").slideToggle(200).parent().siblings().children(".sub,.sub2").slideUp(200);;
        $(this).parent().addClass("m-dq").siblings().removeClass("m-dq");
    });
    //顶部搜索
    $(document).ready(function () {
        $("#header .box .search .btn").click(function () {
            $("#header .box .search .searchbox").addClass("open");
            $(".soceng,.somask").show();
        });
        $(".soceng,.somask").click(function () {
            $("#header .box .search .searchbox").removeClass("open");
            $(".soceng,.somask").hide();
        });
    });
    //导航去除cur
    $(document).ready(function () {
        $("#header .box .menu ul li").mouseover(function () {
            $("#header .box .menu ul li").addClass("havenono");
        });
        $("#header .box .menu ul li").mouseout(function () {
            $("#header .box .menu ul li").removeClass("havenono");
        });
    });
    //首页展馆分布
    $(document).ready(function () {
        $(".index-zgghbox .tab ul li").mouseenter(function () {
            var obj = $(this).attr("data-obj")
            $("#g" + obj).addClass("g-on").siblings().removeClass("g-on");
            $("#g" + obj).parent().parent().parent().children(".con").children("#b" + obj).addClass("gb-on").siblings().removeClass("gb-on");
        });
    });
    //获取展商联系方式
    $(document).ready(function () {
        $(".ExhibitorList .box ul li .data .text dd span").click(function () {
            var obj = $(this).attr("data-obj");
            var gs = $(this).attr("data-gs");
            $(".contactregistration").slideDown(200);
            $("#gs").html("" + gs);
            $("#txtTitle").val("咨询展商：" + gs);
        });
        $(".contactregistration .close").click(function () {
            var obj = $(this).attr("data-obj")
            $(".contactregistration").slideUp(200);
        });
    });
    //报名参加会议
    $(document).ready(function () {
        $(".Meetingdetails .head .right .op .btn").click(function () {
            $(".contactregistration").slideDown(200);
        });
        $(".contactregistration .close").click(function () {
            var obj = $(this).attr("data-obj")
            $(".contactregistration").slideUp(200);
        });
    });
    //明星展馆
    $(document).ready(function () {
        $(".index-exhibits-red .tab ul li").mouseenter(function () {
            var obj = $(this).attr("data-obj")
            $(".p" + obj).addClass("on").siblings().removeClass("on");
            $(".p" + obj).parent().parent().parent().parent().parent().children(".box").children(".b" + obj).addClass("cur").siblings().removeClass("cur");
        });
        $(".index-exhibits-red .tab .morebtn").click(function () {
            $(".index-exhibits-red .tab").toggleClass("r");
        });
    });
    //参展商品牌汇
    $(document).ready(function () {
        $(".dbzs .tab ul li").click(function () {
            var obj = $(this).attr("data-obj");
            $("#t" + obj).addClass("on").siblings().removeClass("on");
            $("#t" + obj).parent().parent().parent().children(".box").children("#b" + obj).addClass("dq").siblings().removeClass("dq");
        });
    });
    //参展商品牌汇
    $(document).ready(function () {
        $(".newbox .tab ul li").click(function () {
            var obj = $(this).attr("data-obj");
            $("#t" + obj).addClass("on").siblings().removeClass("on");
            $("#t" + obj).parent().parent().parent().children(".box").children(".b" + obj).addClass("cur").siblings().removeClass("cur");
			$("#t" + obj).parent().parent().children(".moreurl").children(".s" + obj).addClass("son").siblings().removeClass("son");
        });
    });
    //参展商品牌汇行业滚动
    $(document).ready(function () {
        $(".Brandall .tab ul li").click(function () {
            $(document.body).animate({ scrollTop: $('#i84').offset().top }, 1000);
        });
    });

    //推荐酒店
    $(document).ready(function () {
        $(".hotellist .tab ul li").click(function () {
            var obj = $(this).attr("data-obj");
            $("#t" + obj).addClass("on").siblings().removeClass("on");
            $("#t" + obj).parent().parent().parent().children(".box").children(".u" + obj).addClass("cur").siblings().removeClass("cur");
        });
    });
    //展商目录
    $(document).ready(function () {
        $(".ExhibitorList .filter dl .extend").click(function () {
            var obj = $(this).attr("data-obj");
            $("#t" + obj).parent().toggleClass("on");
        });
    });
    //展会论坛活动
    $(document).ready(function () {
        $(".index-forum .tab ul li").click(function () {
            var obj = $(this).attr("data-obj")
            $(".z" + obj).addClass("cur").siblings().removeClass("cur");
            $(".z" + obj).parent().parent().parent().children(".con").children("ul").children(".c" + obj).addClass("cur").siblings().removeClass("cur");
        });
    });
    //友情链接
    $(document).ready(function () {
        $(".links .tab ul li").mouseenter(function () {
            var obj = $(this).attr("data-obj")
            $("#l" + obj).addClass("on").siblings().removeClass("on");
            $("#l" + obj).parent().parent().parent().children(".box").children(".c" + obj).addClass("cur").siblings().removeClass("cur");
        });
    });
    //会议安排
    $(document).ready(function () {
        $(".schedulebox .box .tab ul li").mouseenter(function () {
            var obj = $(this).attr("data-obj")
            $("#t" + obj).addClass("on").siblings().removeClass("on");
            $("#t" + obj).parent().parent().parent().children(".con").children(".b" + obj).addClass("cur").siblings().removeClass("cur");
        });
    });
    //交通指引
    $(document).ready(function () {
        $(".transportation .tab ul li").click(function () {
            var obj = $(this).attr("data-obj")
            $("#t" + obj).addClass("on").siblings().removeClass("on");
            $("#t" + obj).parent().parent().parent().children(".box").children("#b" + obj).addClass("cur").siblings().removeClass("cur");
        });
    });
    //上届精彩视频
    $(document).ready(function () {
        $(".jcsj_box .gallery-thumbs .swiper-slide").click(function () {
            var obj = $(this).attr("data-obj");
            var img = $(this).attr('vpath');
            var video = $(this).attr('ipath');
            $("#v" + obj).parent().parent().parent().children(".gallery-top").html("<video autoplay=\"autoplay\" poster='" + img + "' controls><source src='" + video + "' type=\"video/mp4\"></video>").siblings().parent().parent().parent().children(".gallery-top").html();
            $("#v" + obj).addClass("swiper-slide-thumb-active").siblings().removeClass("swiper-slide-thumb-active");
        });
    });
    //首页视频图集
    $(".exhibitionalbum .box ul li.vod,.Wonderfulvideo .box ul li").click(function () {
        var obj = $(this).attr("data-obj");
        var img = $(this).attr('piclink');
        var video = $(this).attr('vpdurl');
        $(".videoshowbox .box").html("<video id=\"video\" src='" + video + "' poster='" + img + "' preload=\"auto\" controls=\"controls\" autoplay=\"autoplay\"></video>");
        $(".videoshowbox").show();
    });
    $(".videoshowbox .masklayer").click(function () {
        $(".videoshowbox .box").html("");
        $(".videoshowbox").hide();
    });
    //媒体视频
    $(".newslistbox .right .box ul.photo li").click(function () {
        var obj = $(this).attr("data-obj");
        var img2 = $(this).attr('piclink');
        var video2 = $(this).attr('vpdurl');
        $(".videoshowbox .box").html("<video id=\"video\" src='" + video2 + "' poster='" + img2 + "' preload=\"auto\" controls=\"controls\" autoplay=\"autoplay\"></video>");
        $(".videoshowbox").show();
    });
    $(".videoshowbox .masklayer").click(function () {
        $(".videoshowbox .box").html("");
        $(".videoshowbox").hide();
    });
    //2020先睹为快
    $(".firstlook .con .box ul li").click(function () {
        var obj = $(this).attr("data-obj");
        var img = $(this).attr('piclink');
        var video = $(this).attr('vpdurl');
        $(".videoshowbox .box").html("<video id=\"video\" src='" + video + "' poster='" + img + "' preload=\"auto\" controls=\"controls\" autoplay=\"autoplay\"></video>");
        $(".videoshowbox").show();
    });
    $(".videoshowbox .masklayer").click(function () {
        $(".videoshowbox .box").html("");
        $(".videoshowbox").hide();
    });
    //媒体推广
    $(document).ready(function () {
        $(".mediadiffusion-box .tab ul li").click(function () {
            var obj = $(this).attr("data-obj")
            $("#t" + obj).addClass("on").siblings().removeClass("on");
            $("#t" + obj).parent().parent().parent().children(".content").children("#b" + obj).addClass("show").siblings().removeClass("show");
        });

        $(".mediadiffusion-box .content .box .s-tab ul li").mouseenter(function () {
            var obj = $(this).attr("data-obj")
            $("#t" + obj).addClass("s-on").siblings().removeClass("s-on");
            $("#t" + obj).parent().parent().parent().children(".b-con-box").children("#sb" + obj).addClass("son").siblings().removeClass("son");
        });
    });







});


//切换验证码
function ToggleCode(obj, codeurl) {
    $(obj).children("img").eq(0).attr("src", codeurl + "/?time=" + Math.random());
    return false;
}



/*表单AJAX提交封装(包含验证)
------------------------------------------------*/
function AjaxInitForm(formObj, btnObj, isDialog, urlObj, callback) {
    var argNum = arguments.length; //参数个数
    $(formObj).Validform({
        tiptype: 3,
        showAllError: true,
        callback: function (form) {
            //AJAX提交表单
            $(form).ajaxSubmit({
                beforeSubmit: formRequest,
                success: formResponse,
                error: formError,
                url: $(formObj).attr("url"),
                type: "post",
                dataType: "json",
                timeout: 60000
            });
            return false;
        }
    });

    //表单提交前
    function formRequest(formData, jqForm, options) {
        $(btnObj).prop("disabled", true);
        $(btnObj).val("提交中...");
    }

    //表单提交后
    function formResponse(data, textStatus) {
        if (data.status == 1) {
            $(btnObj).val("提交成功");
            //是否提示，默认不提示
            if (isDialog == 1) {
                var d = dialog({ content: data.msg }).show();
                setTimeout(function () {
                    d.close().remove();
                    if (argNum == 5) {
                        callback();
                    } else if (data.url) {
                        location.href = data.url;
                    } else if ($(urlObj).length > 0 && $(urlObj).val() != "") {
                        location.href = $(urlObj).val();
                    } else {
                        location.reload();
                    }
                }, 2000);
            } else {
                if (argNum == 5) {
                    callback();
                } else if (data.url) {
                    location.href = data.url;
                } else if ($(urlObj)) {
                    location.href = $(urlObj).val();
                } else {
                    location.reload();
                }
            }
        } else {
            dialog({ title: '提示', content: data.msg, okValue: '确定', ok: function () { } }).showModal();
            $(btnObj).prop("disabled", false);
            $(btnObj).val("再次提交");
        }
    }
    //表单提交出错
    function formError(XMLHttpRequest, textStatus, errorThrown) {
        dialog({ title: '提示', content: '状态：' + textStatus + '；出错提示：' + errorThrown, okValue: '确定', ok: function () { } }).showModal();
        $(btnObj).prop("disabled", false);
        $(btnObj).val("再次提交");
    }
}





/*表单AJAX提交封装(包含验证)
------------------------------------------------*/
function AjaxInitForm_2(formObj, btnObj, isDialog, urlObj, callback) {
    var argNum = arguments.length; //参数个数
    $(formObj).Validform({
        tiptype: 3,
        showAllError: true,
        callback: function (form) {
            //AJAX提交表单
            $(form).ajaxSubmit({
                beforeSubmit: formRequest,
                success: formResponse,
                error: formError,
                url: $(formObj).attr("url"),
                type: "post",
                dataType: "json",
                timeout: 60000
            });
            return false;
        }
    });

    //表单提交前
    function formRequest(formData, jqForm, options) {
        if (formcallparback) {
            var flag = formcallparback();
            if (flag) {
                $(btnObj).prop("disabled", true);
                $(btnObj).val("提交中...");
            } else {
                return false;
            }
        } else {
            $(btnObj).prop("disabled", true);
            $(btnObj).val("提交中...");
        }
    }

    //表单提交后
    function formResponse(data, textStatus) {
        if (data.status == 1) {
            $(btnObj).val("提交成功");
            //是否提示，默认不提示
            if (isDialog == 1) {
                var d = dialog({ content: data.msg }).show();
                setTimeout(function () {
                    d.close().remove();
                    if (argNum == 5) {

                        document.location = "/individual_show/" + data.id + ".html#info";
                        //callback();
                    } else if (data.url) {
                        location.href = data.url;
                    } else if ($(urlObj).length > 0 && $(urlObj).val() != "") {
                        location.href = $(urlObj).val();
                    } else {
                        location.reload();
                    }
                }, 2000);
            } else {
                if (argNum == 5) {
                    document.location = "/individual_show/" + data.id + ".html#info";
                    //callback();
                } else if (data.url) {
                    location.href = data.url;
                } else if ($(urlObj)) {
                    location.href = $(urlObj).val();
                } else {
                    location.reload();
                }
            }
        } else {
            dialog({ title: '提示', content: data.msg, okValue: '确定', ok: function () { } }).showModal();
            $(btnObj).prop("disabled", false);
            $(btnObj).val("再次提交");
        }
    }
    //表单提交出错
    function formError(XMLHttpRequest, textStatus, errorThrown) {
        dialog({ title: '提示', content: '状态：' + textStatus + '；出错提示：' + errorThrown, okValue: '确定', ok: function () { } }).showModal();
        $(btnObj).prop("disabled", false);
        $(btnObj).val("再次提交");
    }
}


function pdcp() {
    var regExp = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z0-9]{5}[A-Z0-9挂学警港澳]{1}?/
    console.log($("#Keyword").val());
    if (!regExp.test($("#Keyword").val())) {
        alert("请输入正确车牌号！");
        return false;
    }
    return true;
}