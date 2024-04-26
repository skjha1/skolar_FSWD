// Function def

function greet (){
    console.log("Hello World!");
}

// Fxn with parameter 

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Naman");


// fxn invocation 

greet("Shiv");

// fxn Call 


greet("Shivani");


// fxn apply 


function introduce(greeting, age){

    console.log(`${greeting}, I am ${this.name} and I am ${age} years old.`);
}


const person = {name: "Shivesh"};
introduce.apply(person, ["Hi", 25])


// fxn bind 

const person1 = { name: "Aditya" }
const boundFunction = introduce.bind(person1, "Hey");
boundFunction(30);


// Fun closure 

function outerFunction (){
    let outerVar = "I am from outer function";
    function innerFunction() {
        console.log(outerVar);
    }
    return innerFunction
}

const closure = outerFunction();
closure();
