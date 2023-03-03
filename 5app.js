class PowerOffOn {
	constructor(brand, power){
	  	this.brand = brand;                
	    this.power = power;
	    this.status = false;
	};
	functionality = function() {
		console.log(this.brand + " On!");
		this.status = true;
	};

	functionality = function() {
		console.log(this.brand + " Off");
		this.status = false;
	};
};

class Lampa extends PowerOffOn {
	constructor (brand, power, colorlamp) {
    	super(brand, power, status);
    	this.colorlamp = colorlamp;
  	};
};

class Computer extends PowerOffOn {
	constructor(brand, power, typeHDD) {
	  	super(brand, power, status); 
	    this.typeHDD = typeHDD;
	};
};

const tableLamp = new Lampa ("table lamp", 120, "blue");
const noteBook = new Computer ("laptop", 340, "SDD");

tableLamp.functionality();
noteBook.functionality();

console.log("tools:");
console.log(tableLamp);
console.log(noteBook);
console.log(`total power - ${tableLamp.power + noteBook.power} W`);
