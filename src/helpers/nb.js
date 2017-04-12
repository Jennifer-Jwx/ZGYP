/**
 * Created by Nois on 2016/3/25.
 * NB.js
 */
var time,html;
function ready(fn){
  if(document.addEventListener) {
    document.addEventListener('DOMContentLoaded', function() {

      document.removeEventListener('DOMContentLoaded',arguments.callee, false);
      fn();
    }, false);
  }else if(document.attachEvent) {        //IE
    document.attachEvent('onreadystatechange', function() {
      if(document.readyState == 'complete') {
        document.detachEvent('onreadystatechange', arguments.callee);
        fn();
      }
    });
  }
}
function onre() {
  var html = document.getElementsByTagName("html")[0];
  var body = document.getElementsByTagName("body")[0];
  with(html.style){width="100%", maxWidth="640px", fontSize=Math.round(body.clientWidth/24) +"px"}
  console.log(html.clientWidth);
}
window.onresize = function(){
  clearTimeout(time);
  time = setTimeout("onre()",500);
};

ready(onre);



