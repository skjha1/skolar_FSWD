// Object def 
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,

    // method defintion

    displayInfo: function (){
        return `${this.brand} ${this.model} (${this.year}) `;
    }
}

// Obj properties
console.log(car.brand); 
console.log(car.year); 

//obj methods

console.log(car.displayInfo());


// obj display 

console.log(car);


// obj accessor
console.log(car.brand);
car.brand = "Honda";
console.log(car.brand);


// obj constructor - constructor are fxn used to create and initialize objects.

function Car (brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let myCar = new Car("Ford", "Focus", 2018);


console.log(myCar);

// Obj prototype

Car.prototype.displayInfo = function () {
    return `${this.brand} ${this.model} (${this.year}) `;
}

console.log(myCar.displayInfo()); 


// Obj iterables


let iterableObject = {
    data: [1,2,3,4],
    [Symbol.iterator]: function () {
        let index = 0;
        return {
            next: () => {
                if (index < this.data.length) {
                    return{ value: this.data[index++], done: false}
                } else {
                    return {done: true}
                }
            }
        };
    }
};


for (let item of iterableObject ) {
    console.log(item);
}


// Obj sets 

let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2);
mySet.add(3);

console.log(mySet);



// Obj map - 

let myMap = new Map();

myMap.set("name", "shiv");
myMap.set("age",25);
console.log(myMap.get("name"));




