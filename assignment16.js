/*Question 1: Takes object and return Array of keys
Write a function that takes an object as input and returns an array of all the keys where the value is a string.*/
function getstringWithoutFilter(input){
    let stringKeys = Object.keys(input).join(", ");
    return stringKeys;
}
    let input ={
        name:"John",
        age:25,
        city:"New York",
        occupation:42
    };
let arr=Object.keys(input);
for(let i of arr){
    console.log(input[i])
};
console.log(getstringWithoutFilter(input));
/*Question 2: Takes object and return a object where key and value swapped
Implement a function that takes an object and returns a new object with the keys and values swapped.*/
function swapKeysAndValues(obj){
    const swapped = {};
    for (let key in obj) {
        swapped[obj[key]] = key;
    }
    return swapped;
};
const enter = {a: 1, b: 2, c: 3};
console.log(swapKeysAndValues(enter));


/*Question 3: Bank account using closure
Implement a closure function to create a bank account that allows deposits, withdrawals, and checking balance*/
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return{
        deposit: function(amount){
            balance += amount;
            return `Deposited: ${amount}. New Balance: ${balance}`;
        },
        withdraw: function(amount){
            if (amount <= balance) {
                balance -= amount;
                return `Withdrew: ${amount}. New Balance: ${balance}`;
            } else {
                return `Insufficient funds. Current Balance: ${balance}`;
            }
        },
        checkBalance: function(){
            return `Current Balance: ${balance}`;
        }
    };
}


const account= createBankAccount(200);
 console.log(account.deposit(50));
  console.log(account.withdraw(30));
  console.log(account.checkBalance()); 
  console.log(account.withdraw(200));
  
   const account2= createBankAccount(500); 
   console.log(account.deposit(80));
   console.log(account.withdraw(20));
   console.log(account.checkBalance());
   console.log(account.withdraw(300));
/*Write a function that takes a positive integer as input, and repeatedly sums its 
digits until the sum is a single digit. Use type casting where necessary.*/
function sumToSingleDigit(num){
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }

return num;
}
console.log(sumToSingleDigit(12345));
console.log(sumToSingleDigit(987));
console.log(sumToSingleDigit(9999));
console.log(sumToSingleDigit(5));