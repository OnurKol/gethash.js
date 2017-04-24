/*
 * gethash.js
 * This Script Created by Onur KOL
 * version: 1.0.9
 *
 * Example :
 *   Location : .../index.html#text:Hello World
 *
 *   Get Value : var STRNAME=get("text");
 * Note!
 * First include this file.
*/
var strlist=new Array();
var vallist=new Array();
var hash = window.location.hash.substring(0);
var checkhash=hash.split("#");
var checkn=checkhash.length;

//listing command list: '#STR:VALUE#STR:VALUE#STR:VALUE';
// and processing separation string and values.
for(var a=1; a<checkn; a++){
	var checkt=checkhash[a].split(":");
	var checkt_str=checkt[0];
	var checkt_val=checkt[1];
	
	strlist[a]=checkt_str;
	vallist[a]=checkt_val;
}

function get(v){
	var f=strlist.length;

	for(var b=1; b<f; b++){
		if(v==strlist[b]){
			return vallist[b];
		}
	}
}

function empty(t){
	if(t==undefined || t=="" || t==null){
		return true;
	}
	else{
		return false;
	}
}

window.onhashchange=function(){ 
	window.location.reload(false);
};
