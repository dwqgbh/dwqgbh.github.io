
function yzjkinterInit(m, p) {

    $.ajax({
        type: "POST",
        dataType: "json",
        data: {
            k: localStorage.getItem("yaoyuekey"),
            m: m,
            p: p
        },
        url: "/api/yzjkinter.ashx?action=addevent",
        beforeSend: function (XMLHttpRequest) {
        },
        success: function (data) {
            if (data) {
               return true;
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        }
    });
	
	return true;
}




$(function(){
 
 


  
  $(document).ready(function(){	
		
		

    var timer;
    $('#header .channel-header .content ul li.extend').mouseenter(function() {
        timer = setTimeout(function() {
            $(".sub-content").addClass("show");
        }, 500);
    }).mouseleave(function() {
        clearTimeout(timer);
		$(".sub-content").removeClass("show");
    });
		
	
    $("#header .channel-header .content ul li.extend").mouseenter(function(){
      var obj=$(this).attr("data-menu") 															     
      $(this).parent().parent().parent().children(".sub-content").children(".box").children(".n" + obj).addClass("on").siblings().removeClass("on");
    });
	$("#header .channel-header .content ul li.extend").mouseleave(function(){
       var obj=$(this).attr("data-menu")  
       $(this).parent().parent().parent().children(".sub-content").children(".n" + obj).removeClass("on");
    });
	



	
	$(".sub-content").mouseenter(function(){
	  $(".sub-content").addClass("show");
    });
	$(".sub-content").mouseleave(function(){
	  $(".sub-content").removeClass("show");
    });
	
	$(".exit-login").click(function(){
       localStorage.removeItem('individual_showkey');
	   window.location.href = '/individual/';
    });
	$(".exit-login2").click(function(){
       localStorage.removeItem('individual_showkey');
	   window.location.href = '/individual_xc/';
    });
	$(".top_remind_bar .close").click(function(){
      $(".top_remind_bar").addClass("hide");
	  $.cookie('top_remind_bar', 'active', { expires: 1, path: '/' });
    });
	
$(".tsbm").click(function(){
      $('html, body').animate({
            scrollTop: 0 
        }, 'slow'); 
    
   $(this).addClass('show');
      setTimeout(function() {
        $('.tsbm').removeClass('show');
   }, 1000);
});

if ($.cookie('top_remind_bar') !== undefined) {
    $(".top_remind_bar").addClass("hide");
}
	
	$("#header .channel-header .sub-content section").mouseenter(function(){		
		var clb=$(this).attr("data-clb") 
        $(".n" + clb).parent().parent().parent().children(".content").children("ul").children(".m" + clb).addClass("active");
    });
	$("#header .channel-header .sub-content section").mouseleave(function(){
		var clb=$(this).attr("data-clb") 
	    $(".n" + clb).parent().parent().parent().children(".content").children("ul").children(".m" + clb).removeClass("active");
    });


    $(".qy-tab ul li").click(function(){
      var qy=$(this).attr("data-qy") 
      $(this).addClass("on").siblings().removeClass("on");
	  $(this).parent().parent().siblings(".box").children(".b" + qy).addClass("on").siblings().removeClass("on");
    });
	
	$(".hy-tab ul li").click(function(){
      var hy=$(this).attr("data-hy") 
      $(this).addClass("on").siblings().removeClass("on");
	  $(this).parent().parent().siblings(".hyconbox").children(".container").children(".b" + hy).addClass("on").siblings().removeClass("on");
    });
	$("#yaoyuecontent .main .box .cktips a.ewm").click(function(){
      $(".hdzs_erweima").fadeIn();
    });
	$(".hdzs_erweima").click(function(){
      $(".hdzs_erweima").fadeOut();
    });
	
	$(".rencaipeiduistzy .tab ul li").click(function(){
      var zplx=$(this).attr("data-zplx") 
      $(this).addClass("on").siblings().removeClass("on");
	  $(this).parent().parent().siblings(".container").children(".con" + zplx).addClass("curr").siblings().removeClass("curr");
    });
	
	$(".rencaipeiduistzy .container .box .left ul li").click(function(){
      var jg=$(this).attr("data-jg") 
      $(this).addClass("on").siblings().removeClass("on");
	  $(this).parent().parent().siblings(".right").children(".b" + jg).addClass("on").siblings().removeClass("on");
    });
	
	$(".jingxuanshipin .container .tab ul li").click(function(){
		var spfl=$(this).attr("data-spfl") 
        $(this).addClass("on").siblings().removeClass("on");
		$('.videolistcon').load('/video/list-' +spfl);
    });
	
	$(".jingxuanshipin .container .tab ul li").click(function(){
		var spfl=$(this).attr("data-spfl") 
        $(this).addClass("on").siblings().removeClass("on");
		$('.videolistcon').load('/video/list-' +spfl);
    });
	$(".gz_dataresult .close").click(function(){
       $(".gz_dataresult").hide();
    });
	$(".yaoqing_tanchuang .close,.yaoqing_tanchuang .box .btn a,.yaoqing_tanchuang .masklayer").click(function(){
       $(".yaoqing_tanchuang").hide();
    });
	$(".bm_welfare-pop .container .guanbi,.bm_welfare-pop .container .fulibox .gobtn .fqbtn,.bm_welfare-pop .masklayer,.bm_welfare-pop .container .fulibox .gobtn div.lqbtn a").click(function(){
       $(".bm_welfare-pop").hide();
	   $(".fl_right_btn").addClass("show");
    });
	$(".fl_right_btn").click(function(){
       $(".bm_welfare-pop").show();
	   $(".fl_right_btn").removeClass("show");
    });
	
	$(".mingxingzhanpin  .swiper-tab li").click(function(){
      var zpid=$(this).attr("zpid") 
	  $(this).addClass("swiper-pagination-bullet-active").siblings().removeClass("swiper-pagination-bullet-active");
      $('.mxzplistcon').load('/mxzp/list-' +zpid);
    });
	$('.mingxingzhanpin').on('click', '.zpbtn', function() {
      var zp=$(this).attr("data-zp") 
	  $(".loadtips").addClass("load");
	  timer = setTimeout(function() {
          $('.popup_data_layer').load('/mxzp/show-' +zp);
		  $(".loadtips").removeClass("load");
      }, 500);
	});
	
	$(".tg_tool_box .b .choose .btnlx,.tg_tool_box .b .choose .l ul li").click(function(){
      $(".tg_tool_box .b .choose .l").toggleClass("show");
    });
	
	
	

$(".tuiguangsucai .tab ul li").click(function(){
	var sc=$(this).attr("data-sc") 
    $(this).addClass("on").siblings().removeClass("on");
	$(this).parent().parent().siblings(".box").children(".b" + sc).addClass("on").siblings().removeClass("on");
});	
	
	
	$(".tg_tool_box .b .choose .l ul li").click(function(){
		var link=$(this).attr("data-link") 
        $("#tglink").val(link);
		$(".tg_tool_box .b .box span").show();
    });
	$(".sxhhzhb .tab ul li").click(function(){
      var dq=$(this).attr("data-dq") 
	   var shx=$(this).attr("data-shx") 
      $(this).addClass("on").siblings().removeClass("on");
	  $(this).parent().parent().siblings(".box").children(".b" + dq).addClass("on").siblings().removeClass("on");
	  $(this).parent().parent().siblings(".box").children(".sxhbox").children(".bb" + shx).addClass("on").siblings().removeClass("on");
	  $(this).parent().parent().siblings(".box").children(".mobile-sxhbox").children(".bb" + shx).addClass("on").siblings().removeClass("on");
    });
$('.nav-exhibition_report').click(function(){
        window.location.href = 'https://www.dmpsz.com/exhibition_report/'; 
});
$('.fulilink1').click(function(){
		 window.open('https://www.dmpsz.com/news/show-20390.html', '_blank'); 
});
$('.fulilink2').click(function(){
		 window.open('https://www.dmpsz.com/welfare', '_blank'); 
});
$('.fulilink3').click(function(){
		 window.open('https://www.dmpsz.com/news/show-20363.html', '_blank'); 
});
$('.nav-individual').click(function(){
        window.location.href = 'https://www.dmpsz.com/individual/'; 
});
$('.nav-boothapplication').click(function(){
        window.location.href = 'https://www.dmpsz.com/boothapplication/'; 
});
$('.totop').click(function(){
        $('html, body').animate({
            scrollTop: 0 
        }, 'slow'); 
    });

	$('#tglink').on('input', function() {
        if($(this).val() === '') {
            $(".tg_tool_box .b .box span").hide()
        } else {
            $(".tg_tool_box .b .box span").show();
        }
    });

$('.tg_tool_box .b .box span').click(function(e){
    e.preventDefault(); 
    var copyText = $('#tglink').val();
    navigator.clipboard.writeText(copyText).then(function() {
      alert("复制成功！");
    }).catch(function(error) {
      console.error('复制失败', error);
    });
  });



$('#copy-button').click(function(){
        var $temp = $("<textarea>");
        $("body").append($temp);
        $temp.val($('#text-to-copy').text()).select();
        document.execCommand("copy");
        $temp.remove();
		alert("已复制分享链接"); 
    });
$('.haibaobox li').click(function(){
	var ys=$(this).attr("ysid") 
        $('.haibaoxiazai').load('/templates/dmpsz/yaoyue_share_hb' + ys + '.html');
    });
$(".shgundongbox .tab ul li").click(function(){
      var hy=$(this).attr("data-hy") 
      $(this).addClass("on").siblings().removeClass("on");
	  $(this).parent().parent().siblings(".conbox").children(".b" + hy).addClass("on").siblings().removeClass("on");
	  $(this).parent().parent().siblings(".mobile-conbox").children(".b" + hy).addClass("on").siblings().removeClass("on");
    });
$(".youzhizhanshang .container .tab ul li").click(function(){
      var hy=$(this).attr("data-hy") 
      $(this).addClass("on").siblings().removeClass("on");
	  $(this).parent().parent().siblings(".box").children(".b" + hy).addClass("on").siblings().removeClass("on");
    });

$(".gzyzs .tab ul li").click(function(){
      var lx=$(this).attr("data-lx") 
      $(this).addClass("on").siblings().removeClass("on");
	  $(this).parent().parent().siblings(".box").children(".b" + lx).addClass("on").siblings().removeClass("on");
    });
$(".qjzxc .container .right .qy-tab ul li").click(function(){
      var xc=$(this).attr("data-xc") 
	  var id=$(this).attr("data-id") 
      $(this).addClass("on").siblings().removeClass("on");
	  $(this).parent().parent().parent().siblings(".left").children(".n" + xc).addClass("on").siblings().removeClass("on");
	  $(this).parent().parent().parent().siblings(".left").children(".n" + xc).children("li:first").addClass("on").siblings().removeClass("on");
    });
$(".qjzxc .container .right .qy-tab ul li").click(function(){
	  var id=$(this).attr("data-id") 
      $(".t"+id).addClass("on").siblings().removeClass("on");
    });
$(".qjzxc .container .left ul li").click(function(){
      var lx=$(this).attr("data-lx") 
      $(this).addClass("on").siblings().removeClass("on");
	  $(this).parent().parent().siblings(".right").children(".n1 ").children(".b" + lx).addClass("on").siblings().removeClass("on");
	  $(this).parent().parent().siblings(".right").children(".box").children(".t" + lx).addClass("on").siblings().removeClass("on");
    });
$(".qbzhanlanfanwei .container .left ul li").click(function(){
      var hy=$(this).attr("data-hy") 
      $(this).addClass("on").siblings().removeClass("on");
	  $(this).parent().parent().siblings(".right").children(".b" + hy).addClass("on").siblings().removeClass("on");
    });
$(".zhuyaoyicheng .tab ul li").click(function(){
      var rq=$(this).attr("data-rq") 
      $(this).addClass("on").siblings().removeClass("on");
	  $(this).parent().parent().siblings(".box").children(".b" + rq).addClass("on").siblings().removeClass("on");
    });
$(".popupdatabtn").click(function(){
      var cppic=$(this).attr("data-cppic") 
	  var cptitle=$(this).attr("data-cptitle") 
	  $(".popup_data_layer").html("<div class='box wh'><img src='" + cppic + "'><div class='text'>" + cptitle + "</div><span class='closure'></span></div><div class='masklayer'></div>");
});
$('.popup_data_layer').on('click', '.closure,.masklayer', function() {
  $(".popup_data_layer").html("");
});


$('#photocontent').on('click', '.popupdatabtn2', function() {
      var cppic=$(this).attr("data-cppic") 
	  var cptitle=$(this).attr("data-cptitle") 
	  $(".popup_data_layer").html("<div class='box wh'><img src='" + cppic + "'><div class='text'>" + cptitle + "</div><span class='closure'></span></div><div class='masklayer'></div>");
});

//漂浮广告
//var $ul = $('<ul>').attr('id', 'piaofuguanggao-list').appendTo('body');
//            $.getJSON('/api/wxapi.ashx?action=sliderlists&top=100&callindex=pfgg&siteid=17&userid=0', function(data) {
 //               $.each(data, function(index, pf) {
//                    var listItem = `<li><a href="${pf.link_url}" rel="nofollow" target="_blank"><img src="${pf.file_path}" alt="${pf.title}"></a><span></span></li>`;
 //                   $ul.append(listItem);
//                });
//            });
//$('body').on('click', '#piaofuguanggao-list li span', function() {
//			  $(this).parent().hide();
//});
	  
	  
$('body').on('click', '.tk-tips-txt a', function() {
			 $(".mianzetext").show();
			 var url = '/templates/dmpsz/canguantiaoliguize.html';
			 $.get(url, function(data) {
               $('body').append(data);
             });
});
$('body').on('click', '.mianzetext .box .B-layer,.mianzetext .mask-layer', function() {
			$(".mianzetext").hide();
			$('.mianzetext').remove();
});

$("#zhanshangchaxun .container .filter dl .extend").click(function(){
      $(this).parent().toggleClass("on");
    });
$(".notify .gb").click(function(){
      $(this).parent().hide();
    });
$("#playButton").click(function(){
    var video = $("#topvideo").get(0);
    video.play();
	$("#playButton").hide();
	$("#pauseButton").show();
  });
$(".cyflbtn,.userstate-layer .box .closure").click(function(){
	$(".userstate-layer").fadeToggle();
});
$("#pauseButton,.playerbtn").click(function(){
    var video = $("#topvideo").get(0); 
    video.pause();
	$("#pauseButton").hide();
	$("#playButton").show();
  });

$(".qp_btn .qp").click(function(){
      $("body").addClass("bjtshow");
	  $("html, body").animate({scrollTop: 0}, 1000);
});
$(".qp_btn .qxqp").click(function(){
      $("body").removeClass("bjtshow");
	  var targetOffset = $('div.hanweitubox').offset().top; 
    $('html, body').animate({
      scrollTop: targetOffset
    }, 500);
});
$(".qalist .container ul li").click(function(){
      $(this).addClass("on").siblings().removeClass("on");
    });

$('#jiazai').click(function(){
    setTimeout(function() {
      $('html, body').animate({
        scrollTop: $(document).scrollTop() + 366
      }, 200);
    }, 50);
  });

$(".m-head_tool div").click(function() {
 $(this).toggleClass("on").siblings().removeClass("on");
 $("body").removeClass("mobilemenu"); 
 $("#mmenu").animate({left:'100%',opacity:'0',});
 setTimeout(function() {
        $('#mmenu').remove();
    }, 400); 
});
$(".m-head_tool .tel-btn").click(function() {
	$("#header .top-header-wrap .m-toolbox .tel").slideToggle(500).siblings().slideUp(300);
});
$(".m-head_tool .lang-btn").click(function() {
	$("#header .top-header-wrap .m-toolbox .lan").slideToggle(500).siblings().slideUp(300);
});
$(".m-meun-btn").click(function(){
      $("body").addClass("mobilemenu");
	  $(".m-head_tool >div").removeClass("on");
	  $("#header .top-header-wrap .m-toolbox >div").slideUp(500);
	  $('body').append('<div id="mmenu"></div>');
	  $("#mmenu").load("/aspx/chinese/_mobile_menu.aspx");
});
$(".cl_m-menu_btn").click(function() {
   $("body").removeClass("mobilemenu"); 
   $("#mmenu").animate({left:'100%',opacity:'0',});
});
$(".cl_m-menu_btn").click(function() {
    setTimeout(function() {
        $('#mmenu').remove();
    }, 400); 
});
$(".zk").click(function(){
      $(this).parent().addClass("on");
});
$('body').on('click', '#mmenu ul li .zk', function() {
   $(this).parent().toggleClass("on").siblings().removeClass("on");
});



    //updateInputValue();
    //$(window).resize(function() {
    //    updateInputValue();
    //});
    //function updateInputValue() {
    //    var input = $('.sendcode'); 
     //   var width = $(window).width(); 
     //   if (width <= 780) {
     //       input.val("发送验证码"); 
     //   } else {
     //       input.val("发送验证码到手机"); 
     //   }
    //}
	
	    updateInputValue2();
    $(window).resize(function() {
        updateInputValue2();
    });
    function updateInputValue2() {
        var input = $('.quanqiumaijiaziyuan .sea_b'); 
        var width = $(window).width(); 
        if (width <= 780) {
            input.val("查找"); 
        } else {
            input.val("查找更多观众企业"); 
        }
    }
	
/*渠道*/
 //                       var cookielaiyuan = $.cookie('laiyuan');
 //                       var aliasNames = $("#aliasNames").val();
 //                       if (cookielaiyuan != null && aliasNames != null) {
 //                           var aliases = aliasNames.split(',');
 //                           cookielaiyuan = cookielaiyuan.replace("?", "");
 //                           for (var i = 0; i < aliases.length; i++) {
 //                               var strvalue = aliases[i].split('|');
 //                               if (cookielaiyuan == strvalue[0]) {
//                                    $("#field_control_laiyuan0").val(strvalue[1]);
//                                    break;
//                                }
//                            }
  //                      }
/*渠道end*/

$('.fill-b .txt,.fill-b .text,.fill-b select').on('focusin', function() {
        $(this).parent().parent().addClass("fill");
    });

$('.fill-b .txt,.fill-b .text,.fill-b select').on('blur', function() {
       $(this).parent().parent().removeClass("fill");
        var value = $(this).val();
        if (value.trim() === '') {
            $(this).parent().parent().removeClass("fill");
        } else {
            $(this).parent().parent().addClass("fill");
        }
});

	  
$('.baseform dl dd .txt,.baseform dl dd .text,.baseform dl dd select').on('focusin', function() {
        $(this).parent().parent().addClass("fill");
    });
$('.baseform dl dd .txt,.baseform dl dd .text,.baseform dl dd select').on('blur', function() {
       $(this).parent().parent().removeClass("fill");
        var value = $(this).val();
        if (value.trim() === '') {
            $(this).parent().parent().removeClass("fill");
        } else {
            $(this).parent().parent().addClass("fill");
        }
});
	  
	  
 $(".lxbtn").click(function () {
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
 $(".hybmbtn").click(function () {
            var obj = $(this).attr("data-obj");
            var gs = $(this).attr("data-gs");
            $(".contactregistration").slideDown(200);
            $("#gs").html("" + gs);
            $("#txtTitle").val("报名参加：" + gs);
        });


 $("#gt18875 .swgzflbtn").click(function () {
            var fl = $(this).attr("data-fl");
             $(".contactregistration").slideDown(200);
            $("#txtTitle").val("申请：" + fl);
			$("#category_id").val("8");
			$("#gs").html("" + fl);
			$(".gtbx").html("");
        });


 $("#gt18874 .swgzflbtn").click(function () {
			var fl = $(this).attr("data-fl");
             $(".contactregistration").slideDown(200);
			 $("#category_id").val("13");
            $("#txtTitle").val("申请：" + fl);
			$("#gs").html("" + fl);
			$(".gtbx").html("<li><input placeholder='请输入出发城市' class='txt' name='field_control_chufadi' type='text' required='required'></li><li><input placeholder='请输入购票金额' class='txt' name='field_control_piaojia' type='text' required='required'></li>");
        });

 $(".fbrcxq-btn").click(function () {
             $(".contactregistration").slideDown(200);
			 $("#category_id").val("10");
            $("#txtTitle").val("发布人才需求");
			$("#tt").html("");
			$(".gtbx").html("<li><input placeholder='招聘企业' class='txt' name='field_control_zoqy' type='text' required='required'></li><li><textarea class='textarea' placeholder='招聘岗位'  name='field_control_zpgw' cols='' rows='3' required='required'></textarea></li><li><input placeholder='薪资待遇' class='txt' name='field_control_xzdy' type='text' required='required'></li><li><input placeholder='任职条件' class='txt' name='field_control_rztj' type='text' required='required'></li><li><input placeholder='联系人员' class='txt' name='field_control_xm' type='text' required='required'></li>");
        });



 $(".bmrcpdhd-btn").click(function () {
			var rcpd = $(this).attr("data-rcpd");
             $(".contactregistration").slideDown(200);
			 $("#category_id").val("12");
            $("#txtTitle").val(rcpd);
			$("#title").html("报名人才配对活动");
			$("#tt").html("<li class='gsmc'>我要参加：<span id='gs'>"+ rcpd +"</span></li><li class='gsmc'>参与活动目的：</li>");
			$(".gtbx").html("<div class='tab'><span class='on zgz'>找工作</span><span class='zrc'>找人才</span></div><li><input placeholder='学校名称' class='txt' name='field_control_xxmc' type='text' required='required'></li><li><input class='txt' placeholder='专业名称'  name='field_control_zymc' cols='' rows='3' required='required'></li><li><input placeholder='姓名' class='txt' name='field_control_xm' type='text' required='required'></li>");
});
 
$('#feedback_form').on('click', '.zrc', function() {
   $(this).addClass("on").siblings().removeClass("on");
   $("#category_id").val("11");
   $(".gtbx").html("<div class='tab'><span class='zgz'>找工作</span><span class='on zrc'>找人才</span></div><li><input placeholder='公司名称' class='txt' name='field_control_company' type='text' required='required'></li><li><input class='txt' placeholder='招聘岗位'  name='field_control_zpgw' cols='' rows='3' required='required'></li><li><input placeholder='姓名' class='txt' name='field_control_xm' type='text' required='required'></li>");
});

$('#feedback_form').on('click', '.zgz', function() {
   $(this).addClass("on").siblings().removeClass("on");
   $("#category_id").val("12");
   $(".gtbx").html("<div class='tab'><span class='on zgz'>找工作</span><span class='zrc'>找人才</span></div><li><input placeholder='学校名称' class='txt' name='field_control_xxmc' type='text' required='required'></li><li><input class='txt' placeholder='专业名称'  name='field_control_zymc' cols='' rows='3' required='required'></li><li><input placeholder='姓名' class='txt' name='field_control_xm' type='text' required='required'></li>");
});


$("#chkAgree").click(function () {
		if ($(this).is(":checked")) {
			$("#btnchecksendsms").prop("disabled", false);
		} else {
			$("#btnchecksendsms").prop("disabled", true);
		}
	});
$(".silidevod").click(function () {
        var vod = $(this).attr("data-vod");
        $(".playerbox .box .bfq").html("<video id=\"video\" src='" + vod + "' poster='' preload=\"auto\" controls=\"controls\" autoplay=\"autoplay\">");
		$(".playerbox").fadeIn("slow");
    });

	
	

$(document).ready(function() {
    $('.sdztbtn').click(function() {
        $('body').append('<div class="ztz-Masklayer"></div>');
		$("#header .top_bar .content .sdzt").slideToggle();
    });
    $('body').on('click', '.ztz-Masklayer', function() {
        $("#header .top_bar .content .sdzt").slideUp();
		$('.ztz-Masklayer').remove();
    });
});

$('body').on('click', '.contactregistration .close', function() {
   $("body").removeClass("tjcgtips");
});


$('.picload .list').on('click', '.playerbtn', function() {
        var vod = $(this).attr("data-vod");
        $(".playerbox .box .bfq").html("<video id=\"video\" src='" + vod + "' poster='' preload=\"auto\" controls=\"controls\" autoplay=\"autoplay\">");
		$(".playerbox").fadeIn("slow");
    });

$(".playerbox .close").click(function () {
        $(".playerbox .box .bfq").html("");
        $(".playerbox").hide();
    });

  }); 
});




function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
 
$(document).ready(function(){
    var param1Value = getParameterByName('hangye');
    $(".n"+param1Value).addClass("on").siblings().removeClass("on");
	$(".b"+param1Value).addClass("on").siblings().removeClass("on");
});


//$(document).ready(function() {
//    if ($(window).width() < 780) {
//        $('html, body').animate({
//            scrollTop: $('.baoming_head').offset().top
//        }, 'slow');
//    }
//});

//链接下载
function downLink(point, linkurl){
	if(point > 0){
		dialog({
			title:'提示',
			content:"下载需扣除" + point + "个积分<br />重复下载不扣积分，需要继续吗？",
			okValue:'确定',
			ok:function (){
				window.location.href = linkurl;
			},
			cancelValue: '取消',
			cancel: function (){}
		}).showModal();
	}else{
		window.location.href = linkurl;
	}
	return false;
}





function quanqiumaijiaziyuanfun() {

    if ($("#companyname").val().length < 2) {
        dialog({ title: '提示', content: "关键词请输入2个以上！", okValue: '确定', ok: function () { } }).showModal();
        return;
    }

    $("#quanqiumaijiaziyuanbtn").prop("disabled", true);
    $.ajax({
        type: "POST",
        dataType: "json",
        data: {
            companyname: $("#companyname").val()
        },
        url: "/plugins/submits/ajax.ashx?action=getbaomingcompanynames",
        beforeSend: function (XMLHttpRequest) {
        },
        success: function (data) {

            $("#quanqiumaijiaziyuanbtn").prop("disabled", false);
            $("#quanqiumaijiaziyuanul").html("");
            $("#nomsg").hide();
            $(".gz_dataresult").show();
            $(".moremsg").hide();
            $(".havemsg").hide();
            if (data.status == 0) {
                $("#nomsg").show();
            }

            if (data.status > 0 && data.list) {
                $(".havemsg").show();
                if (data.status == 2) {
                    $(".moremsg").show();
                }

                var lihtml = "";
                for (var i = 0; i < data.list.length; i++) {
                    lihtml += '<li><span>' + data.list[i].com + '</span><div class="user"><span>' + data.list[i].name + '</span><span>' + data.list[i].tel +'</span></div></li>';
                }

                $("#quanqiumaijiaziyuanul").html(lihtml);

            }
           

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#quanqiumaijiaziyuanul").html("");
            $("#quanqiumaijiaziyuanbtn").prop("disabled", false);
        }
    });
}
