/*
 lego.js v0.1.0 (c) 2012 knowledgecode | MIT licensed
*/
(function(p){var f={},k={},g={},l=[],q,i,h,r,m,n,v,j,o,w,s,t=p.document,u=p.location;i=function(b){return b.replace(/\/[^\/]*\/?$/,"/")};h=function(b,a){if(/^(https?|file):\/\//.test(b))return b;if(/^\.{1,2}\//.test(b)){for(a=a||w;0===b.indexOf("../");)b=b.substring(3),a=i(a);for(;0===b.indexOf("./");)b=b.substring(2)}else a=0===b.indexOf("/")?"":a||s;return o+a+b};r=function(){var b=function(){},a=function(){};return function(c){var e=new b;a.prototype=(k[c]||{}).exports;e.exports=new a;return e}}();
m=function(b,a,c){var e=0,d,a=a||function(){};if(b){c=r(j(c));c.id=b;c.uri=g[b];a(n,c.exports,c);for(k[b]=c;l[e];){a=l[e];d=a.deps;for(c=0;d[c];)d[c]===b?d.splice(c,1):c+=1;0===c?(c=a.id,d=a.callback,a=a.base,l.splice(e,1),m(c,d,a),e=0):e+=1}}else a(n)};n=function(b){return(k[j(b)]||{}).exports};v=function(b,a,c,e){var d=0,a=a||[];for(a.push(e);a[d];)a[d]=j(a[d]),k[a[d]]?a.splice(d,1):d+=1;if(0===d)m(b,c,e);else{l.push({id:b,deps:a,callback:c,base:e});for(d=0;a[d];)b=g[a[d]],g[b]||(g[b]=a[d],f.add(b)),
d+=1}};j=function(b){var a;b&&(a=b.replace(/(^.*\/|\.js$)/g,""),g[a]=g[a]||h(b)+".js");return a};o=u.protocol+"//"+u.host;w=function(){for(var b=0,a=t.getElementsByTagName("script"),c,e;a[b];){c=a[b].src;if(/(^|\/)lego\.js$/.test(c)){c=h(c,i(u.pathname.replace(/\\/g,"/")));e=i(c.replace(o,""));s=e+"lego_modules/";break}b+=1}return e}();f.add=function(b,a){var c=t.createElement("script");c.src=b;c.readyState?c.onreadystatechange=function(){var b=c.readyState;if("complete"===b||"loaded"===b)c.onreadystatechange=
null,a=a&&a()}:c.onload=function(){a=a&&a()};t.getElementsByTagName("head")[0].appendChild(c)};f.define=function(b,a,c,e){var d=arguments.length;v.apply(this,[void 0,void 0,b,a,c,e].slice(3<d?2:d-1))};f.ln=function(b,a){g[b]=h(a)+".js"};f.cd=function(b){s=h(b).replace(o,"")};f.test=function(b,a){if(q[b])return q[b].apply(this,a||[])};q={ascend:i,getAbsUri:h,create:r,load:m,require:n,normalize:j};p.lego=f})(this);