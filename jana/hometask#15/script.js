'use strict';


function one(sizex = 8, sizey = 8){
	var str = ""
	for(var i=0, t=false, len = sizex*sizey; i<len; i++){ 
		if(i%sizex === 0){
			str+= "\n<br />";
			t = !t;
		}
		if(t === false){
			str+="&nbsp;";
		}else{
			str+= "#";
		}
		t = !t;
	}
	document.getElementById('chessDesk').innerHTML = str;
}

function two(variant = 0){
	var str = prompt("Enter text:");
	
	if(variant === 0){
		alert(countBs(str));
	}else{
		var symbol = prompt("Enter symbol:");
		alert(countChar(str, symbol));
	}
}

function countBs(str){
	for(var i=0, len=str.length, count=0; i<len; i++){
		if(str[i] === 'B')
			count++;
		return count;	
	}
}

function countChar(str, symbol, reg=false){ 
	if(reg == true){
		str = str.toLowerCase();
		symbol = symbol.toLowerCase();
	}
	
	for(var i=0, len=str.length, count=0; i<len; i++)
		if(str[i] === symbol)
			count++;
	return count;
}

function third(variant = 0){
	var str = prompt("Enter array(split ;)");
	var arr = str.toString().split(';');
	if(variant == 0){
		alert(reverseArray(arr));	
	}else{
		alert(reverseArrayInPlace(arr));	
	}

}
function reverseArray(arr){
	
	var newarr = [];
	
	for(var i=0, len = arr.length; i<len; i++){
		newarr[len-1-i] = arr[i];
	}
	return newarr;

}

function reverseArrayInPlace(arr){

	for(var i=0, len = arr.length, t=''; i<len/2; i++){
		t = arr[len-1-i];
		arr[len-1-i] = arr[i];
		arr[i] = t;
	}
	return arr;
}

function fourth(){
	var str = prompt("Enter array(split ;)");
	var arr = str.toString().split(';');
	
	for(var i=0, len=arr.length; i<len; i++)
		arr[i] = arr[i].toString().split(',');
		
	alert(concat(arr));
}
function concat (arr) {
	
	return arr.reduce(
		function(a, b) {
			return a.concat(b);
		});
}