// Class : Classes are the bluprint for creating objs with predefined properties and methods 


// Class Intro

class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log("Animal makes a sound");
    }
}

// Creating an instance of the animal class 
let dog = new Animal("Dog");
dog.sound();


// Class Inheritance

// Example 


class Dog extends Animal {
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log("Woof! Woof!")
    }
}

// Creating an instance of the Dog class

let bulldog = new Dog("name", "Bulldog");
bulldog.sound();
bulldog.bark();


// Class Static 

class MathUtility  {
    static square(x) {
        return x * x;
    }

}

console.log(MathUtility.square(5));


