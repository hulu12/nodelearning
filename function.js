//排序
var _value=[40,23,58,4,555,56];
_value.sort(function(a,b){
	return b-a;
});
console.log(_value);


var stooge={
	"first-name": "pang",
	last_name:"yexing"
};
console.log(stooge["first-names"]||'not found');

function say(word){
	console.log(word);
};
function exeute(somefunc,value){
	somefunc(value);
};
exeute(say,"hello");

exeute(function(word){console.log(word)},"hellox");