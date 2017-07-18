var Car = function(loc) {
	/*//the commented lines are implemented by default when keyword new is used.
	//this = Object.create(Car.prototype);
	var obj = Object.create(Car.prototype);
	obj.loc = loc;
	return obj;
	//return this;*/

	//pseudoclassical patterns i.e. using new to instantiate
	this.loc = loc;
};

Car.prototype.move = function(){
	this.loc++;
};	

console.log(Car.prototype.constructor);
console.log(Car.constructor);
log(amy instanceof Car);
