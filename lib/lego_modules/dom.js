/*
 dom.js v0.1.0 (c) 2012 knowledgecode | MIT licensed
*/
(function(d,i){i("dom",[],function(i,f){var g=d.document,h,j;h=g.getElementsByClassName?function(b,c){return[].slice.call(c.getElementsByClassName(b),0)}:function(b,c){var a=0,e=[];c.className===b&&(e[0]=c);if(c.hasChildNodes())for(;c.childNodes[a];)e=e.concat(h(b,c.childNodes[a])),a+=1;return e};j=function(b,c){for(var a=0,e=[],d=c.getElementsByTagName(b);d[a];)e[a]=d[a],a+=1;return e};f.$=function(b,c){var a=c||g;return 0===b.indexOf("#")?g.getElementById(b.substring(1)):0===b.indexOf(".")?h(b.substring(1),
a):j(b,a)};if(d.addEventListener)f.bind=function(b,c,a){b.addEventListener(c,a,!1);return a};else if(d.attachEvent)f.bind=function(b,c,a){b.attachEvent("on"+c,a);return a};if(d.removeEventListener)f.unbind=function(b,c,a){b.removeEventListener(c,a,!1)};else if(d.detachEvent)f.unbind=function(b,c,a){b.detachEvent("on"+c,a)}})})(this,lego.define);
