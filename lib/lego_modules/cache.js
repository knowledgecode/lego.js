/*
 cache.js v0.1.0 (c) 2012 knowledgecode | MIT licensed
*/
(function(d){d("cache",[],function(d,b){var c={};b.length=0;b.getItem=function(a){return c.hasOwnProperty(a)?c[a]:null};b.setItem=function(a,b){c.hasOwnProperty(a)||(this.length+=1);c[a]=b};b.removeItem=function(a){c.hasOwnProperty(a)&&(this.length-=1,delete c[a])};b.clear=function(){c={};this.length=0}})})(lego.define);
