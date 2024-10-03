/* Question 1: Grade Classification
Write a program that takes a student's grade (as a percentage) and uses a "switch" case statement to classify it into a letter grade (A, B, C, D, F). The grading scale is:

A: 90% and above

B: 80% to 89%

C: 70% to 79%

D: 60% to 69%

F: Below 60%

Display the letter grade to the user. */
let percentage = 76;
switch(true){
    case  (percentage>=90):
        console.log("grade A");
        break;
    case   (percentage >= 80 && percentage < 90):
         console.log("grade B");
         break;
     case  (percentage >= 70 && percentage < 80):
         console.log("grade C");
         break;
    case  (percentage >= 60 && percentage < 70):
        console.log("grade D");
        break;
    default:
        console.log("grade F");
}

   

/*Question 2: Traffic Light Control
Create a program that simulates a traffic light system. 
The user inputs a color code
 (R for Red, Y for Yellow, G for Green), 
 and the program uses a "switch" case statement 
 to output the appropriate action:

Red: "Stop"

Yellow: "Get Ready"

Green: "Go"

For any other input, display "Invalid color code."*/
const R = 'Red' 
      Y = 'Yellow'
      G = 'Green'

let light = G;
switch(light){
    case R:
        console.log("Stop");
        break;
    case Y:
        console.log("Get Ready");
        break;
    case G:
        console.log("Go");
        break;
        default:
            console.log("invalid light")
}
/*Question 3: Age Group Classification
Create a program that classifies a person's age into different life stages.
 Ask the user to input their age and use if, else if, 
 and else statements to classify and display:

"Child" for ages 0 to 12

"Teenager" for ages 13 to 19

"Adult" for ages 20 to 64

"Senior" for ages 65 and above

Display "Invalid age" for any negative age values.*/
function Agegroup(age){
    if(0<age && age<=12){
        console.log("Child");
    }
    else if(13<=age&& age<=19){
        console.log("Teenager");
    }
    else if(20<=age&& age<=64){
        console.log("Adult");
    }
    else if(age>=65){
         console.log("Senior");
    }
    else {
        console.log("Invalid age")
    }
    return;
}
Agegroup(-10)



/*Question 4: Shipping Calculator
Create a program that calculates shipping costs based on the shipping method selected. 
The user inputs a method code (S for Standard, E for Express, O for Overnight), 
and the program uses a "switch" case statement to display the cost:

Standard: Rs.5

Express: Rs.10

Overnight: Rs.20

For any other input, display "Invalid shipping method."*/
const S = 'Standard'
      E = 'ESxpress'
      O = 'Overnight'

let mode = 5;
switch(mode){
    case S:
        console.log("Rs 5");
        break;
    case E:
        console.log("Rs 10");
        break;
    case O:
        console.log("Rs 20");
        break;
    default:
        console.log("invalid shipping method")
}



/*Question 5: Subscription Plans
Write a program that determines the monthly cost of a subscription plan based on the user's choice. The options are:

1. Basic Rs.9.99 per month

2. Standard Rs.14.99 per month

3. Premium Rs.19.99 per month

The user inputs a number corresponding to their choice, 
and the "switch" case statement displays the monthly cost. 
If the number is not between 1 and 3, display "Invalid plan."*/

let plan = 5;
switch(plan){
    case 1:
        console.log("Basic Rs 9.99 per month");
        break;
    case 2:
        console.log("Standard Rs 14.99 per month");
        break;
    case 3:
        console.log("Premium Rs 19.99 per month");
        break;
    default:
        console.log("Invalid plan");
    
}
