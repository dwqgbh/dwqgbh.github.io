//屏幕高度
let screen_h = window.innerHeight
var texts = document.getElementsByClassName('M-Nav');	
 //页面内容高度
 let body_h =  document.body.scrollHeight || document.documentElement.scrollHeight
 if(body_h>screen_h){
   	texts.style.display = 'block';	
 }else{
  	texts.style.display = 'none';	
}
