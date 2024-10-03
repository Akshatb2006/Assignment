// Write a factory function in JavaScript that creates a person object with name and age properties.
// And then print them on console by function calling.
/*function person(){
    return{
name:"John Smith",
age: 18
    }
}
console.log(person())*/

//Create a function called printPersonInfo that takes a person object as an argument 
//and prints its details (name and age) on the console. 
//Create a person object and use the printPersonInfo function to display its information.
function printPersonInfo(person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
}
const person = {
    name: 'John Doe',
    age: 30
};
printPersonInfo(person);

//Create a constructor function called Book that takes title and author as parameters and assigns 
//them as properties to the book object. Then, create two book objects using 
//the Book constructor and display their details on the console.
function book(title,author){
    this.title= title,
    this.author= author
}
const book1 = new book("The cather in the eye", "J.D. Salinger");
const book2= new book("1984", "George Orwell")
console.log(book1);
console.log(book2);
