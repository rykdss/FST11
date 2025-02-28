// 1. Arithmetic Operators

let num1 = 10;
let num2 = 5;

console.log("Addition (+):", num1 + num2);
console.log("Subtraction (-):", num1 - num2);
console.log("Multiplication (*):", num1 * num2);
console.log("Division (/):", num1 / num2);
console.log("Exponent (**):", num1**num2);
console.log("Remainder (%):", num1 % num2);

// Order of Operations
// PEMDAS / BODMAS
// 1. Parentheses, 2. Exponents, 3. Multiplication and Division (left to right), 4. Addition and Subtraction (left to right)
let answer = 3 + (4 * (5 - 2) ** 2) / 2;
console.log("Answer:", answer); //21
// 3 + (4 * 3 ** 2) / 2
// 3 + (4 * 9) / 2
// 3 + 36 / 2
// 3 + 18
// 21

// 2. String Expressions or Concatenation
let greeting = "Hi";
let myName = "John";
console.log(greeting + " " + myName + "!");

// 3. Comparison Operators
// type coercion (convert type if necessary)
// Equal to '==': Checks if two values are equal
console.log("Equal to (==):", 5 == 5);
console.log("Equal to (==) with type coercion:", 5 == "5");

// Not Equal to '!=': Checks if two values are not equal
console.log("Equal to (!=):", 5 != 10);
console.log("Equal to (!=) with type coercion:", 5 != "10");

// Strict equal to '===': Checks if two values are equal in value and type
console.log("Strict Equal to (===):", 5 === 5);
console.log("Strict Equal to (===)", 5 === "5");

// Strict Not equal to '!==': Checks if two values are not equal in value or type
console.log("Strict Not Equal to (!==):", 5 !== 5);
console.log("Strict Not Equal to (!==)", 5 !== "5");

console.log("Greater than (>):", 5 > 3);
console.log("Less than (<):", 5 < 3);
console.log("Greater than or Equal to (>=):", 5 >= 5);
console.log("Less than or Equal to (<=):", 5 <= 3);

// 4. Logical Operators
// && - AND - Amphersand
// || - OR - Pipe
// ! - NOT - Exclamation Mark
let sunny = true;
let warm = true;
// AND: True only if all conditions are met
console.log("Is sunny AND warm?", sunny && warm);

// OR: True if at least one condition is met
console.log("Is it sunny OR warm?", sunny || warm);

// NOT: Inverts the boolean value
console.log("NOT sunny?", !sunny);

// 5. Assignment Expressions
// Addition Assignment "+="
num3 += num4;
// num3 = num3 + num4
console.log("The new value of num3 is:", num3);

// Subtraction Assignment "-="
num3 -= num4
// Computation: 15 - 5
// num3 = num3 - num4
console.log("The new value of num3 is:", num3);

// Multiplication Assignment "*="
num3 *= num4
// Computation: 10 * 5
// num3 = num3 * num4
console.log("The new value of num3 is:", num3);

// Division Assignment "/="
num3 /= num4
// Computation: 50 / 5
// num3 = num3 / num4
console.log("The new value of num3 is:", num3);