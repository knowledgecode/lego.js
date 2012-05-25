/*
 xhr.js v0.1.0 (c) 2012 knowledgecode | MIT licensed
*/
(function(f,g){g("xhr",[],function(g,j){var h,i;h=function(){var b,d,a=0;if(f.XMLHttpRequest)b=f.XMLHttpRequest;else if(f.ActiveXObject){for(d=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Microsoft.XMLHTTP"];d[a];){try{b=new f.ActiveXObject(d[a]);break}catch(c){}a+=1}b&&(b=function(){return new f.ActiveXObject(d[a])})}return b}();i=function(b,d,a,c){return function(){var e=0;if(4===b[a].readyState)if(200===b[a].status||304===b[a].status)d[a]=b[a].responseText,b.length===d.length&&c(d);else{for(;b[e];)b[e].abort(),
e+=1;c(null)}}};j.get=function(b,d){for(var a=[],c=0,e=[];b[c];)a[c]=new h,a[c].open("GET",b[c],!0),a[c].onreadystatechange=i(a,e,c,d),a[c].setRequestHeader("If-Modified-Since","Thu, 01 Jun 1970 00:00:00 GMT"),a[c].send(null),c+=1}})})(this,lego.define);
