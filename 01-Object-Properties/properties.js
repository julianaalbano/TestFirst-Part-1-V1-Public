function setPropsOnObj(obj){
	obj.x = 7;
	obj.y = 8;
	obj.onePlus = function(x){
		return x + 1;
	}
}

function setPropsOnArr(arrayObject){
	arrayObject.hello = function(){
		return "Hello!";
	}
	arrayObject.full = "stack";
	arrayObject[0] = 5;
	arrayObject.twoTimes = function(y){
		return y*2;
	}
}

function setPropsOnFunc(functionObject){
	functionObject.year = '20??';
	functionObject.divideByTwo = function(z){
		return z/2;
	}

	functionObject.prototype.helloWorld = function(){
		return 'Hello World';
	}
	return 'I am a function object, all functions are objects! Function can have their own properties too!';
}