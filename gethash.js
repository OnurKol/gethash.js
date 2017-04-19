/*
 * gethash.js
 * This Script Created by Onur KOL
 * version: 1.0.0
 *
 * Example :
 *   Location : .../index.html#text:Hello World
 *
 *   Get Value : var STRNAME=get("text")
 * Note!
 * First include this file.
*/
var hash = window.location.hash.substring(1);
var hc=hash.split(":");
var hashcode=hc[0];
var hashval="";
var hvlimit=hc.length;
for(var a=1; a<hvlimit; a++){
	hashval+=hc[a];
}

function get(v){
	if(v==hashcode){
		return hashval;
	}
	else{
		return "";
	}
}

window.onhashchange=function(){ 
	window.location.reload(false);
};
