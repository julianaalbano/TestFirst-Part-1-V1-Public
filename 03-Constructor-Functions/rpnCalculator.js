function RPNCalculator(){

	this.arr = [];
	RPNCalculator.prototype.push = function(a){
		return this.arr.push(a);
	}

	RPNCalculator.prototype.value = function(b){
		return this.arr[this.arr.length-1];
	}

	RPNCalculator.prototype.plus = function(){
		if (this.arr.length === 0){
			throw 'rpnCalculatorInstance is empty';
		}
		else {
			let sum = this.arr.pop() + this.arr.pop();
			return this.arr.push(sum);
		}
	}

	RPNCalculator.prototype.minus = function(){
		if (this.arr.length === 0){
			throw 'rpnCalculatorInstance is empty';
		}
		else {
			let firstpop = this.arr.pop();
			let secondpop = this.arr.pop();
			let difference = secondpop - firstpop;
			this.arr.push(difference);
		}
	}

	RPNCalculator.prototype.times = function(){
		if (this.arr.length === 0){
			throw 'rpnCalculatorInstance is empty';
		}
		else {
			let product = this.arr.pop() * this.arr.pop();
			this.arr.push(product);
		}
	}

	RPNCalculator.prototype.divide = function(){
		if (this.arr.length === 0){
			throw 'rpnCalculatorInstance is empty';
		}
		else {
			let anotherfirstpop = this.arr.pop();
			let anothersecondpop = this.arr.pop();
			let quotient = anothersecondpop / anotherfirstpop;
			this.arr.push(quotient);		}
	}
}