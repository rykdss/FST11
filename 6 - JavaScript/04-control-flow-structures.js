// Control Flow Structures
// 1. Conditional Statments

// Allow us to execute different blocks of code based on a condition

// Conditionals: if, else if, else
if (temperature < 0) {
  console.log("It's freezing.");
} else if (temperature >= 0 && temperature < 20) {
  console.log("It's cool outside.");
} else if (temperature >= 20 && temperature < 30) {
  console.log("It's warm outside.");
} else {
  console.log("It's hot outside.");
}

// 2. Looping Statements
// Repeatedly execute a block of code until a specific condition is met
// For loop
/*
  "components" of a for loop
  1st: Variable Initialization
  2nd: Condition Expression
  3rd: Increment or Decrement -> i += 1; i++
*/
for (i = 1; i <= 10; i++) {
  console.log("For loop count:", i);
}

// While loop
// Use: We don't know how many iteration
count = 1;
while (count <= 3) {
  console.log("While loop count:", count);
  count++;
}
