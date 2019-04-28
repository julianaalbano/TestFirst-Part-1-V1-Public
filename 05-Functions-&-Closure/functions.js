function concatString(x){
  let args = Object.values(arguments);
  return args.join("");
}

function yourFunctionRunner(func){
	let args = Object.values(arguments);
	let string = "";
	for (let i = 0; i < args.length; i++){
		string += args[i]();
	}
	return string;
}

function makeAdder(A){
	return function adderOf2function(B){
		return B + A; 
	}
}

function once(func){
	let count = 0;
	return function(){
		if (count === 0){
			func();
			count++;
		}
	}
}

function createObjectWithClosures(){
	let value = 0;
	return {
		oneIncrementer: function(){
			return value += 1;
		},
		tensIncrementer: function(){
			return value += 10;
		},
		getValue: function(){
			return value;
		},
		setValue: function(a){
			value = a;
		}
	}
}

function guestListFns(secretGuestListArr, secretCode){
 	var funcArray = [];

 	var inner = function(guestName, secretCode) {
		return function(code) {
			if(code === secretCode) {
				return guestName;  
			}
			else {
				return 'Secret-Code: Invalid';
			}
		};
	};

	for(var i = 0; i < secretGuestListArr.length; i++) {
		var guestName = secretGuestListArr[i];
		funcArray.push(inner(guestName, secretCode));
	}

	return funcArray;
}


function generateGuestList(arr, secretCode){

	var strArr = [];

	for (var i = 0; i < arr.length; i++) {
		strArr.push(arr[i](secretCode));
	}

	return strArr;
}













