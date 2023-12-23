function findMax(num1, num2) {
    let max;
    if (num1 > num2) {
        max = num1;
    } else {
        max = num2;
    }
    return max;
}

// Example usage:
let a = 5;
let b = 10;
let maximum = findMax(a, b);
console.log("The maximum number is: " + maximum); // Output will be 10



let number = 7;

if (number > 0) {
    console.log("The number is positive");
} else if (number < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}



// Taking a number as input
const numbers = 50; // You can change this number to test

// Checking if the number is divisible by 10
if (numbers % 10 === 0) {
    console.log(numbers + ' is divisible by 10');
} else {
    console.log(numbers + ' is not divisible by 10');
}



function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Example usage:
const num = 7;
const result = checkEvenOrOdd(num);
console.log(`${num} is ${result}`);



function checkTemperature(temperature) {
  if (temperature >= 30) {
    return "Hot";
  } else if (temperature <= 25) {
    return "Cold";
  } else {
    return "Normal";
  }
}

// Example usage:
const temp1 = 32;
const temp2 = 20;
const temp3 = 27;

console.log(`Temperature ${temp1} is ${checkTemperature(temp1)}`);
console.log(`Temperature ${temp2} is ${checkTemperature(temp2)}`);
console.log(`Temperature ${temp3} is ${checkTemperature(temp3)}`);




function findMaximum(a, b, c) {
  let max = a;

  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  return max;
}

// Example usage:
const num1 = 10;
const num2 = 25;
const num3 = 18;

const maxNumber = findMaximum(num1, num2, num3);
console.log(`The maximum number is: ${maxNumber}`);



const x = 10; // Replace 10 with any number you want to check
const results = x % 2 === 0 ? "Even Number" : "Odd Number";
console.log(result);





const numOne = 35; // Replace with any number
const numTwo = 40; // Replace with any number

if (numOne > 30 && numTwo > 30) {
  console.log("Both numbers are greater than 30.");
} else {
  console.log("At least one number is not greater than 30.");
}




const age = 16; // Replace with any age you want to check

if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else {
  console.log("Not a teenager");
}



function calculateGrade(math, english, physics) {
    // Calculate total marks and average
    let totalMarks = math + english + physics;
    let averageMarks = totalMarks / 3;

    // Calculate percentage
    let percentage = (totalMarks / (3 * 100)) * 100;

    // Determine grade based on percentage
    let grade;
    if (percentage >= 90) {
        grade = "Grade A";
    } else if (percentage >= 80) {
        grade = "Grade B";
    } else if (percentage >= 70) {
        grade = "Grade C";
    } else if (percentage >= 60) {
        grade = "Grade D";
    } else if (percentage >= 40) {
        grade = "Grade E";
    } else {
        grade = "Grade F";
    }

    // Return the results
    return {
        totalMarks: totalMarks,
        averageMarks: averageMarks.toFixed(2),
        percentage: percentage.toFixed(2) + "%",
        grade: grade
    };
}

// Example marks
let mathMarks = 85;
let englishMarks = 75;
let physicsMarks = 90;

// Calculate grade for given marks
let Result = calculateGrade(mathMarks, englishMarks, physicsMarks);

// Output the results
console.log("Total Marks:", result.totalMarks);
console.log("Average Marks:", result.averageMarks);
console.log("Percentage:", result.percentage);
console.log("Grade:", result.grade);




