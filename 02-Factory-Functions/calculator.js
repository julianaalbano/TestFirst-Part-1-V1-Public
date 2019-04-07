function createCalculator(){
	return{
		total: 0,
		value: function(){
			return this.total;
		}, 
		add: function(a){
			return this.total += a; 
		},
		subtract: function(b){
			return this.total -= b;
		},
		clear: function(){
			this.total = 0;
		}
	}
};