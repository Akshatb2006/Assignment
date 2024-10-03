// LOOPS
//Write a javascript program to print prime numbers from 2 to 30.
/*function printPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

for (let i = 2; i <= 30; i++) {
    if (printPrime(i)) {
        console.log(i);
    }
}*/


//Write a javascript program to check whether a number is available in an array or not.
/*let arr=[1,2,3,5,4,8]
function check(num){
    for(let i=0; i< arr.length;i++){
        if (arr[i]=== num){
            return 'It is in the array';
        } 
    }  {
            return 'It is not in the array';
        
    }
}
    
    console.log(check(98))*/

   
   // Write a javascript program to print the rank of students based on the percentage.
function rank(std1, std2, std3) {
    if (std1 > std2 && std1 > std3 && std2 > std3) {
        return 'student1 has rank 1, student2 has rank 2, student3 has rank 3';
    } else if (std1 > std2 && std1 > std3 && std3 > std2) {
        return 'student1 has rank 1, student2 has rank 3, student3 has rank 2';
    } else if (std2 > std1 && std2 > std3 && std1 > std3) {
        return 'student2 has rank 1, student3 has rank 3, student1 has rank 2';
    } else if (std2 > std1 && std2 > std3 && std3 > std1) {
        return 'student2 has rank 1, student3 has rank 2, student1 has rank 3';
    } else if (std3 > std1 && std3 > std2 && std1 > std2) {
        return 'student3 has rank 1, student1 has rank 2, student2 has rank 3';
    } else if (std3 > std1 && std3 > std2 && std2 > std1) {
        return 'student3 has rank 1, student2 has rank 2, student1 has rank 3';
    }
}
console.log(rank(90,79,89))