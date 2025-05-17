var _content = []; 
		var picload = {
			_default:6, 
			_loading:3,  
			init:function(){
				var lis = $(".picload .hidden li");
				$(".picload ul.list").html("");
				for(var n=0;n<picload._default;n++){
					lis.eq(n).appendTo(".picload ul.list");
				}
				$(".picload ul.list img").each(function(){
					$(this).attr('src',$(this).attr('realSrc'));
				})
				for(var i=picload._default;i<lis.length;i++){
					_content.push(lis.eq(i));
				}
				$(".picload .hidden").html("");
			},
			loadMore:function(){
				var mLis = $(".picload ul.list li").length;
				for(var i =0;i<picload._loading;i++){
					var target = _content.shift();
					if(!target){
						$('.picload .more').html("<p>没有更多啦...</p>");
						break;
					}
					$(".picload ul.list").append(target);
					$(".picload ul.list img").eq(mLis+i).each(function(){
						$(this).attr('src',$(this).attr('realSrc'));
					});
				}
			}
		}
		picload.init();