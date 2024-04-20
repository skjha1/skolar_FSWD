// Arithematic operation 


let num1 = 10;
let num2 = 5;


console.log(num1 + num2); 
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);



// Increment and decrement

let x = 5;
console.log(++x); // Prefix increment // 6 
console.log(x++); // postfix increment // 6
console.log(--x); // prefix decrement // 6
console.log(x--); // Postfix decrement // 6



// String operations

let str1 = "Hello";
let str2 = "World";


console.log(str1 + " " + str2); // String concatenation
console.log(str1.length); // String length
console.log(str1.toLowerCase()); // String to upper case
console.log(str1.toLocaleLowerCase()); // String to lower case
console.log(str1.concat(", ", str2)); // string concatenation using concat fxn

// Comparision operators

console.log(5 == '5') // Loose Equality
console.log(5 === '5') // Strict Equality
console.log(5 != '5') // Loose InEquality
console.log(5 !== '5') // Strict InEquality
console.log(5 > 3)   //  Greater then
console.log(5 < 5)    // Less Then 
console.log(5 >= 5)   // Greater then or equal to 
console.log(5 <= 5)   // Less then or equal to 

// Logical operators 

let a = true;
let b = false;

console.log('-------Logical operators -----');


console.log(a && b);
console.log(a || b);
console.log(!a);


// Conditional statements 

let age = 18;

if ( age >= 18 ) {
    console.log('You are eligible to vote. ');
} else {
    console.log('You are not eligible to vote. ');
}


// Loops

for (let i =1; i <= 5; i++){
    console.log("Iteration " + i)
}


// Function 


function greet(name){
    console.log("hello, " + name + "!");
}

greet('Arvind');


//  Arrays 

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // accessing 
fruits.push("Mango"); // Adding the elemet
console.log(fruits); 
fruits.pop(); // Removing element 
console.log(fruits);


// Objects 

let person = {
    firstname  : "John",
    lastname : "Deo",
    age : 12
};

console.log (person.firstname);
person.gender = "Male";
console.log (person);


try{
    // code that will throw the error
    throw new Error ("Something went wrond");
} catch (error) {
    console.log(error.message);
}

















