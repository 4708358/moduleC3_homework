function PowerOffOn(brand, power) {                 
    this.brand = brand;                
    this.power = power;
    this.status = false;
    this.functionality = function() {
    console.log(this.brand + " On!");
    this.status = true;
    };
    this.functionality = function() {
    console.log(this.brand + " Off");
    this.status = false;
    };
}


function Lampa (brand, power) {                            
    this.brand = brand;
    this.power = power;
}

function PC (brand, power) {                                  
    this.brand = brand;
    this.power = power;
}


Lampa.prototype = new PowerOffOn();                           
PC.prototype = new PowerOffOn();

const tableLamp = new Lampa("table lamp", 120);                     
const Computer = new PC ("laptop", 340);

tableLamp.functionality();
Computer.functionality();

console.log("tools:");
console.log(tableLamp);
console.log(Computer);
console.log(`total power - ${tableLamp.power + Computer.power} W`)