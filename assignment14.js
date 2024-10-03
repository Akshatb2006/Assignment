//Problem 1: Function Expression
//Write a function expression called calculateArea that takes two parameters:
//length and width. It should return the area of a rectangle. 
//Test the function with different values.
function calculateArea(length, width){
  return length*width;
}

console.log(calculateArea(5,10))
console.log(calculateArea(3,7))

//Problem 2: Arrow Function
//Write an arrow function called calculatePerimeter that takes two parameters, 
//length and width, and returns the perimeter of a rectangle.
const calculatePerimeter = (length, width) => `perimeter= ${2*(length+width)}`
console.log(calculatePerimeter(5,10))

//Problem 3: Arrow Function and this Context
//Create an object person with a property name and a method greet that uses an arrow function. 
//The arrow function should return a greeting using the name property of the object.
const person ={
    name:'John',
    greet:() => {
        return `Hello, ${person.name}`
    }
}
console.log(person.greet());

//Problem 4: Arrow Function for Array Manipulation
//Write an arrow function filterEvenNumbers that takes an array of
//numbers and returns a new array containing only the even numbers.
const filterEvenNumbers = (arr) => {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i]%2 == 0){
            arr1.push(arr[i]);
        }
    }
    return arr1;
};
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));


//Problem 5: Default Parameters in Functions
//Write a function greet that accepts two parameters: name and greeting. 
//The greeting parameter should have a default value of "Hello". 
//If no greeting is provided, the function should return "Hello, [name]".
function Name(name, greeting= "Hello"){
    return `${greeting}, ${name}`
}
console.log(Name("Alice")); 
console.log(Name("Bob", "Hi there"));


/*Problem 6: Function vs Arrow Function with this
Write two methods inside an object car. 
One method should be a regular function, 
and the other should be an arrow function. 
The regular function should correctly access the object?s model property using this,
while the arrow function should demonstrate the inability to use this.*/
const car = {
           model: "Lambo",
           getCarmodel: function(){
            return this.model;
           },
           modelArrow: () => {
            return this.model;
           }
};
console.log(car.getCarmodel());
console.log(car.modelArrow())