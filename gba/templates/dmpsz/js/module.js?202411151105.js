$(document).ready(function () {
    //if(window.location.search=="?baidu"||window.location.search=="?douyin"||window.location.search=="?toutiao"||window.location.search=="?guanwang"||window.location.search=="?dem"||window.location.search=="?wy"||window.location.search=="?zhanshang"){
    //$.cookie('laiyuan',window.location.search, {path:'/',expires: 2});  
    //}
    var searchstr = window.location.search;
    if (searchstr != null && searchstr != "" && searchstr.indexOf("?") != -1) {
        if (searchstr.indexOf('=') == -1) {
            localStorage.setItem("laiyuan", searchstr);
            console.log("laiyuansearch0:" + searchstr);
        } else {
            console.log("laiyuansearch1:" + searchstr);
        }
    }


});

var istxyz = 1;

function GetConfigInit() {

    $.ajax({
        type: "POST",
        dataType: "json",
        data: {
            yaoyuekey: localStorage.getItem("yaoyuekey")
        },
        url: "/plugins/submits/ajax.ashx?action=GetConfigInit",
        beforeSend: function (XMLHttpRequest) {
        },
        success: function (data) {
            if (data) {
                istxyz = data.istxyz;
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        }
    });
}



// 定义回调函数
function callback(res) {
    // 第一个参数传入回调结果，结果如下：
    // ret         Int       验证结果，0：验证成功。2：用户主动关闭验证码。
    // ticket      String    验证成功的票据，当且仅当 ret = 0 时 ticket 有值。
    // CaptchaAppId       String    验证码应用ID。
    // bizState    Any       自定义透传参数。
    // randstr     String    本次验证的随机串，后续票据校验时需传递该参数。
    console.log('callback:', res);

    // res（用户主动关闭验证码）= {ret: 2, ticket: null}
    if (res.ret === 0) {
        var str = '【randstr】->【' + res.randstr + '】      【ticket】->【' + res.ticket + '】';
        sendsmsjk(res.randstr, res.ticket);
    } else if (res.ret === 2) {
        //  dialog({ title: '提示', content: "请刷新页面退出重试！", okValue: '确定', ok: function () { } }).showModal();
    } else {
        dialog({ title: '提示', content: "环境异常，请刷新页面退出重试！", okValue: '确定', ok: function () { } }).showModal();
    }

}

// 定义验证码js加载错误处理函数
function loadErrorCallback() {
    var appid = '199465539';
    // 生成容灾票据或自行做其它处理
    var ticket = 'terror_1001_' + appid + '_' + Math.floor(new Date().getTime() / 1000);
    callback({
        ret: 0,
        randstr: '@' + Math.random().toString(36).substr(2),
        ticket: ticket,
        errorCode: 1001,
        errorMessage: 'jsload_error'
    });
}

function sendsmsjk(randstr, ticket) {

    $("#btnsendsms").prop("disabled", true);
    $.ajax({
        type: "POST",
        dataType: "json",
        data: {
            txtUserTel: $("#txtUserTel").val(), txtCode: '', Randstr: randstr, Ticket: ticket, yaoyuekey: localStorage.getItem("yaoyuekey")
        },
        url: "/plugins/submits/ajax.ashx?action=sendcodesmsbytx",
        beforeSend: function (XMLHttpRequest) {
        },
        success: function (data) {
            if (data.status == 1) {
                $(".auth_code").hide();
                sendMessage();

                if ($("#smskey").attr("attkey")) {
                    $("#smskey").val(data.smskey);
                }
            }



            var d = dialog({ content: data.msg }).show();
            setTimeout(function () {
                d.close().remove();
            }, 2000);
            $("#code").attr("src", "/tools/verify_code.ashx?time=" + Math.random());
            $("#btnsendsms").prop("disabled", false);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#btnsendsms").prop("disabled", false);
        }
    });
}



function sendsmsjknotx() {

    $("#btnsendsms").prop("disabled", true);
    $.ajax({
        type: "POST",
        dataType: "json",
        data: {
            txtUserTel: $("#txtUserTel").val(), txtCode: $("#txtCode").val(), yaoyuekey: localStorage.getItem("yaoyuekey")
        },
        url: "/plugins/submits/ajax.ashx?action=sendcodesmsnotx",
        beforeSend: function (XMLHttpRequest) {
        },
        success: function (data) {
            if (data.status == 1) {
                $(".auth_code").hide();
                sendMessage();

                if ($("#smskey").attr("attkey")) {
                    $("#smskey").val(data.smskey);
                }
            }



            var d = dialog({ content: data.msg }).show();
            setTimeout(function () {
                d.close().remove();
            }, 2000);
            $("#code").attr("src", "/tools/verify_code.ashx?time=" + Math.random());
            $("#btnsendsms").prop("disabled", false);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#btnsendsms").prop("disabled", false);
        }
    });
}

// 定义回调函数
function callbackyaoyue(res) {
    // 第一个参数传入回调结果，结果如下：
    // ret         Int       验证结果，0：验证成功。2：用户主动关闭验证码。
    // ticket      String    验证成功的票据，当且仅当 ret = 0 时 ticket 有值。
    // CaptchaAppId       String    验证码应用ID。
    // bizState    Any       自定义透传参数。
    // randstr     String    本次验证的随机串，后续票据校验时需传递该参数。
    console.log('callback:', res);

    // res（用户主动关闭验证码）= {ret: 2, ticket: null}
    if (res.ret === 0) {
        var str = '【randstr】->【' + res.randstr + '】      【ticket】->【' + res.ticket + '】';
        sendsmsjkyaoyue(res.randstr, res.ticket);
    } else if (res.ret === 2) {
        //  dialog({ title: '提示', content: "请刷新页面退出重试！", okValue: '确定', ok: function () { } }).showModal();
    } else {
        dialog({ title: '提示', content: "环境异常，请刷新页面退出重试！", okValue: '确定', ok: function () { } }).showModal();
    }

}
// 定义验证码js加载错误处理函数
function loadErrorCallbackyaoyue() {
    var appid = '199465539';
    // 生成容灾票据或自行做其它处理
    var ticket = 'terror_1001_' + appid + '_' + Math.floor(new Date().getTime() / 1000);
    callbackyaoyue({
        ret: 0,
        randstr: '@' + Math.random().toString(36).substr(2),
        ticket: ticket,
        errorCode: 1001,
        errorMessage: 'jsload_error'
    });
}

function sendsmsjkyaoyue(randstr, ticket) {

    $("#btnsendsmsyaoyue").prop("disabled", true);
    $.ajax({
        type: "POST",
        dataType: "json",
        data: {
            txtUserTel: $("#txtUserTel").val(), txtCode: '', Randstr: randstr, Ticket: ticket, yaoyuekey: localStorage.getItem("yaoyuekey")
        },
        url: "/plugins/submits/ajax.ashx?action=sendcodesmsbytxyaoyue",
        beforeSend: function (XMLHttpRequest) {
        },
        success: function (data) {
            if (data.status == 1) {
                $(".auth_code").hide();
                sendMessage();

                if ($("#smskey").attr("attkey")) {
                    $("#smskey").val(data.smskey);
                }
            }
            var d = dialog({ content: data.msg }).show();
            setTimeout(function () {
                d.close().remove();
            }, 2000);

            $("#code").attr("src", "/tools/verify_code.ashx?time=" + Math.random());
            $("#btnsendsmsyaoyue").prop("disabled", false);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#btnsendsmsyaoyue").prop("disabled", false);
        }
    });
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
        if (curCount > 0) {
            return;
        }
        if (istxyz == 0) {
            sendsmsjk('', '');
            return;
        }
        try {
            var captcha = new TencentCaptcha('199465539', callback, {});
            captcha.show();
        } catch (error) {
            loadErrorCallback();
        }



    });
	
	
    $("#btnsendsmsnotx").click(function () {
        if (curCount > 0) {
            return;
        }
            sendsmsjknotx();
            return;
    });

    $("#btnsendsmsyaoyue").click(function () {
        if (curCount > 0) {
            return;
        }

        if (istxyz == 0) {
            sendsmsjkyaoyue('', '');
            return;
        }

        try {
            var captcha = new TencentCaptcha('199465539', callback, {});
            captcha.show();
        } catch (error) {
            loadErrorCallbackyaoyue();
        }

    });

    $("#btnchecksendsms").click(function () {
        var _txtSmsCode = $("#txtSmsCode").val();

        if (!_txtSmsCode || _txtSmsCode == "" || _txtSmsCode.length != 4) {
            dialog({ title: '提示', content: "请输入正确的验证码再操作！", okValue: '确定', ok: function () { } }).showModal();
            return;
        }

        $("#btnchecksendsms").prop("disabled", true);
        $.ajax({
            type: "POST",
            dataType: "json",
            data: { txtUserTel: $("#txtUserTel").val(), txtSmsCode: $("#txtSmsCode").val(), laiyuandaima: $("#field_control_laiyuandaima").val(), yaoyuekey: localStorage.getItem("yaoyuekey") },
            url: "/plugins/submits/ajax.ashx?action=submits_checksms",
            beforeSend: function (XMLHttpRequest) {
            },
            success: function (data) {
                if (data.status == 1) {

                    if (data.url) {
                        document.location = data.url;
                        return;
                    } else {
                        if (data.succid && data.succid != '') {
                            document.location = "/individual_show/" + data.succid + ".html";
                            localStorage.setItem("individual_showkey", data.succid);
                            localStorage.setItem("yaoyuekeylogin", data.yaoyuekey);
                            return;
                        }
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
                $("#btnchecksendsms").prop("disabled", false);
            }
        });

    });


    $("#btnchecksendsmsyaoyue").click(function () {
        if ($("#txtSmsCode").val() == "" || $("#txtSmsCode").val().length != 4) {
            dialog({ title: '提示', content: "请输入正确的验证码再操作！", okValue: '确定', ok: function () { } }).showModal();
            return;
        }

        $("#btnchecksendsmsyaoyue").prop("disabled", true);
        $.ajax({
            type: "POST",
            dataType: "json",
            data: { txtUserTel: $("#txtUserTel").val(), txtSmsCode: $("#txtSmsCode").val(), laiyuandaima: $("#field_control_laiyuandaima").val(), yaoyuekey: localStorage.getItem("yaoyuekey")},
            url: "/plugins/submits/ajax.ashx?action=submits_checksmsyaoyue",
            beforeSend: function (XMLHttpRequest) {
            },
            success: function (data) {
                if (data.status == 1) {

                    if (data.succid && data.succid != '') {
                        localStorage.setItem("individual_showkey", data.succid);
                    }

                    if (data.yaoyuekey && data.yaoyuekey != '') {
                        localStorage.setItem("yaoyuekey", data.yaoyuekey);
                        localStorage.setItem("yaoyuekeylogin", data.yaoyuekey);
                        document.location = data.trul;
                        return;
                    }

                } else if (data.status == 2) {

                    var d = dialog({ content: data.msg }).show();
                    setTimeout(function () {
                        d.close().remove();
                        document.location = data.trul;
                    }, 1000);

                } else {
                    dialog({ title: '提示', content: data.msg, okValue: '确定', ok: function () { } }).showModal();
                }
                $("#btnchecksendsmsyaoyue").prop("disabled", false);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#btnchecksendsmsyaoyue").prop("disabled", false);
            }
        });

    });


    //var quanminyaoyueid = $("#quanminyaoyue").html();
    //if (quanminyaoyueid) {
    //    var yaoyuekey_ = localStorage.getItem("yaoyuekey");
    //    if (yaoyuekey_ && yaoyuekey_ != "") {
    //        $.ajax({
    //            type: "POST",
    //            dataType: "json",
    //            data: { yaoyuekey: yaoyuekey_ },
    //            url: "/plugins/submits/ajax.ashx?action=submits_getyaoyuexinfo",
    //            beforeSend: function (XMLHttpRequest) {
    //            },
    //            success: function (data) {
    //                if (data.status == 1) {
    //                    $("#quanminyaoyue").show();
    //                    $("#yaoyuelogin").hide();
    //                    $(".spanurl").html("yaoyue=" + yaoyuekey_);
    //                } else {
    //                    $("#quanminyaoyue").hide();
    //                    $("#yaoyuelogin").show();
    //                }

    //            },
    //            error: function (XMLHttpRequest, textStatus, errorThrown) {

    //            }
    //        });

    //    }

    //}


    if (typeof (flagindividual) != "undefined") {

        var individual_showkey_ = localStorage.getItem("individual_showkey");
        if (individual_showkey_ && individual_showkey_ != "") {
            document.location = "/individual_show/" + individual_showkey_ + ".html";
        }
        GetConfigInit();
    }

    let paramssearch = new URLSearchParams(location.search);
    var yaoyuesearchvalue = paramssearch.get("yaoyue");
    if (yaoyuesearchvalue && yaoyuesearchvalue != "") {
        console.log('searchParams', location.search, paramssearch, paramssearch.get("yaoyue"))
        localStorage.setItem("yaoyuekey", yaoyuesearchvalue);
    }



    var yaoyuekeyvalue_ = localStorage.getItem("yaoyuekey");
    if (yaoyuekeyvalue_ && yaoyuekeyvalue_ != "" && $("#yaoyuekey").attr("attkey")) {
        $("#yaoyuekey").val(yaoyuekeyvalue_);
        console.log('searchParamsyaoyuekey', yaoyuekeyvalue_)
    }









});


function submithx() {
    if ($('#txthxm').val() == '') {
        dialog({ title: '提示', content: "请输入核销码！", okValue: '确定', ok: function () { } }).showModal();
        return false;
    }

    $.ajax({
        type: "POST",
        dataType: "json",
        data: { yaoyuekey: localStorage.getItem("yaoyuekey"), hexiaoma: $('#txthxm').val() },
        url: "/plugins/submits/ajax.ashx?action=submits_hexiao",
        beforeSend: function (XMLHttpRequest) {
        },
        success: function (data) {
            if (data.status == 1) {

            } else {

            }

            dialog({ title: '提示', content: data.msg, okValue: '确定', ok: function () { } }).showModal();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

        }
    });




    return true;
}

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
                        $("body").addClass("tjcgtips");
                    } else if ($(urlObj).length > 0 && $(urlObj).val() != "") {
                        location.href = $(urlObj).val();
                        $("body").addClass("tjcgtips");
                    } else {
                        //location.reload();
                        $("body").addClass("tjcgtips");
                    }
                }, 2000);
            } else {
                if (argNum == 5) {
                    callback();
                } else if (data.url) {
                    location.href = data.url;
                    $("body").addClass("tjcgtips");
                } else if ($(urlObj)) {
                    location.href = $(urlObj).val();
                    $("body").addClass("tjcgtips");
                } else {
                    //location.reload();
                    $("body").addClass("tjcgtips");
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
function AjaxInitForm_2(formObj, btnObj, isDialog, urlObj, callback2) {
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
        if (typeof (formcallparback) != "undefined") {
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
           
                    if (callback2) {
                        var flagcll = callback2();
                        if (flagcll == true) {
                            return true;
                        }
                    }

                    if (argNum == 5) {
                        localStorage.setItem("individual_showkey", data.id);
                        localStorage.setItem("yaoyuekey", data.yaoyuekey);
                        localStorage.setItem("yaoyuekeylogin", data.yaoyuekey);
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

                if (callback2) {
                    var flagcll = callback2();
                    if (flagcll == true) {
                        return true;
                    }
                }

                if (argNum == 5) {
                    localStorage.setItem("individual_showkey", data.id);
                    localStorage.setItem("yaoyuekey", data.yaoyuekey);
                    localStorage.setItem("yaoyuekeylogin", data.yaoyuekey);
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

function removeindividual_showkey() {
    localStorage.removeItem("individual_showkey");
}