/*
 log.js v0.1.0 (c) 2012 knowledgecode | MIT licensed
*/
(function(g,h){h("log",["string"],function(h,b){var c=h("string"),i=g.document,d,e,f,j,k,l,m;e=function(a){var b=i.createElement("div"),c=b.style;b.innerHTML=a;c.fontFamily="monospace";c.fontSize="12";c.color="#000000";c.backgroundColor="#ffffff";i.getElementsByTagName("body")[0].appendChild(b)};f=function(a,b,d){return c.format("%s/%s/%s %s:%s:%s.%s [%s] %s",a.getFullYear(),c.padLeft((a.getMonth()+1).toString(),2,"0"),c.padLeft(a.getDate().toString(),2,"0"),c.padLeft(a.getHours().toString(),2,"0"),
c.padLeft(a.getMinutes().toString(),2,"0"),c.padLeft(a.getSeconds().toString(),2,"0"),c.padLeft(a.getMilliseconds().toString(),3,"0"),b,d)};j=function(a){d.error(f(new Date,"E",a))};k=function(a){d.warn(f(new Date,"W",a))};l=function(a){d.info(f(new Date,"I",a))};m=function(a){d.log(f(new Date,"D",a))};b.forceRendering=function(a){d=g.console&&!a?g.console:{error:e,warn:e,info:e,log:e}};b.filter=function(a){b.error=b.warn=b.info=b.debug=function(){};if(0<=a&&3>=a&&(b.error=j,2>=a&&(b.warn=k,1>=a&&
(b.info=l,0>=a))))b.debug=m};b.forceRendering(!1);b.filter(0)})})(this,lego.define);
