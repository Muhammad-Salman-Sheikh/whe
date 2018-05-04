const opCheck = (a , o) => {
	if(o == '+') {
		a =  a[0] + a[1]
		return true;
	} else if(o == '-') {
		a = a[0]-a[1]
				return true;
	} else if(o == 'x') {
		a =  a[0] * a[1]
				return true;
	} else if(o == '/') {
		a = a[0] / a[1]
				return true;
	} else if(o == '%') {
		a =  a[0] % a[1]
				return true;
	} else if(o == '!') {
		a = (f = () => a[1] * f(a[1]-1))
				return true;
	}
}

const Interpreter = function() {
	this.stack = 0;
	this.input = input => {
		this.tokens = input.split(' ');
		if(this.tokens[0] == ';') {
			this.stack += 1;
		} else if(this.tokens[0] != ';') {
			throw `Hello World!`
		}
		for(var i = 1; i < this.tokens.length; i++) {
			var current = this.tokens[i];
			var next = +this.tokens[i+1];
			if(+current != NaN) {
				this.stack += +current
			} else if(opCheck([this.stack , next] , current)) {
				this.stack += opCheck([this.stack , next] , current)
			}
		}
		return this.stack
	}
};
var a = new Interpreter();
try {
	console.log(a.input('; 2 1 % 3'))
}catch(e) {
	console.log(e)
}
