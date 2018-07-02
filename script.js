/* JS to print largest number in console between 5 numbers */
var num1 = -8;
var num2 = 12.5;
var num3 = -6.769;
var num4 = 0;
var num5 = -1;
var largest;
/* Displaying all numbers in console */
console.log("Number 1 is " + num1);
console.log("Number 2 is " + num2);
console.log("Number 3 is " + num3);
console.log("Number 4 is " + num4);
console.log("Number 5 is " + num5);

/* Checking if num1 is largest */
if ((num1 > num2) && (num1 > num3) && (num1 > num4) && (num1 > num5)) {
    largest = num1;
    console.log("Largest number is " + largest);
} else
/* Checking if num2 is largest */
if ((num2 > num1) && (num2 > num3) && (num2 > num4) && (num2 > num5)) {
    largest = num2;
    console.log("Largest number is " + largest);
} else
/* Checking if num3 is largest */
if ((num3 > num1) && (num3 > num2) && (num3 > num4) && (num3 > num5)) {
    largest = num3;
    console.log("Largest number is " + largest);
} else
/* Checking if num4 is largest */
if ((num4 > num1) && (num4 > num2) && (num4 > num3) && (num3 > num5)) {
    largest = num4;
    console.log("Largest number is " + largest);
}
/* Checking if num5 is largest */
else {
    largest = num5;
    console.log("Largest number is " + largest);
}