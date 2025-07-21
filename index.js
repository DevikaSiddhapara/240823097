// console.log("hello world")
// // ===========================================================================
// const name="devika"
// console.log(name)
// // ===========================================================================
// const num=7
// if(num%2==0){
//     console.log("Number is even")
// }
// else{
//     console.log("Number is odd")
// }
// // ===========================================================================
// const a=10
// const b=20
// if(a>b)
// {
//     console.log("A is grater ",a)
    
// }
// else{
//     console.log("B is grate ",b)
// }
// // ===========================================================================

// const year=2020

// if(year%4==0)
// {
//     console.log("Given year is leap year")
// }
// ===========================================================================

sum=0
for(i=0;i<=5;i++){
    console.log(i)
    sum +=i
    

}
console.log("some of natural numbers",sum)
console.log()
// ===========================================================================
// fact=1
// for(i=1;i<=4;i++){
    
//    fact *=i
   

// }
// console.log("factorial of 4",fact)

// //===================================================================================
// //git add .(for commit the changes
// //git commit -m "add "
// //git push)
// //===================================================================================
// mul=3
// for(i=1;i<=10;i++)
// {
//     console.log(mul,"*",i,"=",mul*i)
// }
// //===================================================================================
// let num1 = 123456789;
// let result = num1.toString().split('').reverse().join('');
// console.log(result);
// //===================================================================================


// let num2 = 121;
// let palindrome = num2.toString().split('').reverse().join('');
// if (num2.toString() === palindrome) {
//     console.log(num2 + " is a palindrome number");
// }
// else{
//     console.log(num2 + " is not a palindrome number");
// }

// //===================================================================================

// let num3 = 29;
// let isPrime = true;
// for (let i = 2; i <= num-1; i++) {
//     if (num3 % i === 0) {
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime) {
//     console.log(num3 + " is a prime number");
// }
// else {
//     console.log(num3 + " is not a prime number");
// }

// //===================================================================================
// // 10. Count Digits in a Number
// // Definition: Count how many digits a number contains.
// // Input: 5023
// // Output: 4

// let num4 = 5022;
// let count =0;
// while (num4 >0){
//     num4 = Math.floor(num4/10);
//     count++;
// }
// console.log("Number of digits in the number is", count);
// //===================================================================================
// // 11. Sum of Digits
// // Definition: Calculate the sum of all digits in a number.
// // Input: 123
// // Output: 6

// let num5=123;
// let sum=0;
// while(num5>0){
//     sum += num5 % 10;
//     num5 = Math.floor(num5 / 10);
// }
// console.log("Sum of digits is", sum);
// //===================================================================================
// // 12. Check Armstrong Number
// // Definition: Check if the number is equal to the sum of its digits each raised to the power of
// // the number of digits.
// // Input: 153
// // Output: Armstrong
// let num6 = 153;
// let sumOfCubes = 0;
// let digits = num6.toString().length;
// let temp = num6;
// while (temp > 0) {
//     let digit = temp % 10;
//     sumOfCubes += Math.pow(digit, digits);
//     temp = Math.floor(temp / 10);
// }
// if (sumOfCubes === num6) {
//     console.log(num6 + " is an Armstrong number");
// }
// else {
//     console.log(num6 + " is not an Armstrong number");
// }
// //===================================================================================
// // 13. Generate Fibonacci Series
// // Definition: Generate the first n Fibonacci numbers.
// // Input: 5
// // Output: 0 1 1 2 3

// let n = 5;
// let fib = [0, 1];
// for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
// }
// console.log("Fibonacci series:", fib.join(' '));
// //===================================================================================
// // 14. Check Vowel or Consonant
// // Definition: Determine if a given character is a vowel.
// // Input: a
// // Output: Vowel
// let char = 'a';
// if ('aeiou'.includes(char.toLowerCase())) {
//     console.log(char + " is a vowel");
// }
// else {
//     console.log(char + " is a consonant");
// }
// //===================================================================================
// // 15. Simple Calculator
// // Definition: Perform +, -, *, / between two numbers.
// // Input: 4 + 2
// // Output: 6

// let numA = 4;
// let numB = 2;
// let operator = '+';
// switch (operator) {
//     case '+':
//         console.log(numA + numB);
//         break;
//     case '-':
//         console.log(numA - numB);
//         break;
//     case '*':
//         console.log(numA * numB);
//         break;
//     case '/':
//         console.log(numA / numB);
//         break;
//     default:
//         console.log("Invalid operator");
// }
// //===================================================================================
// // 16. Find GCD (HCF)
// // Definition: Calculate the greatest common divisor of two numbers.
// // Input: 20 28
// // Output: 4

// let numX = 20;
// let numY = 28;
// let gcd = 1;
// for (let i = 1; i <= Math.min(numX, numY); i++) {
//     if (numX % i === 0 && numY % i === 0) {
//         gcd = i;
//     }
// }
// console.log("GCD of", numX, "and", numY, "is", gcd);
// //===================================================================================
// // 17. Check Perfect Number
// // Definition: A number whose sum of divisors equals itself.
// // Input: 28
// // Output: Perfect
// let numZ = 28;
// let sumOfDivisors = 0;
// for (let i = 1; i < numZ; i++) {
//     if (numZ % i === 0) {
//         sumOfDivisors += i;
//     }
// }
// if (sumOfDivisors === numZ) {
//     console.log(numZ + " is a perfect number");
// }
// else {
//     console.log(numZ + " is not a perfect number");
// }
// //===================================================================================
// // 18. Print All Divisors
// // Definition: Display all positive divisors of a number.
// // Input: 10
// // Output: 1 2 5 10
// let numW = 10;
// let divisors = [];
// for (let i = 1; i <= numW; i++) {
//     if (numW % i === 0) {
//         divisors.push(i);
//     }
// }
// console.log("Divisors of", numW, "are:", divisors.join(' '));
// //===================================================================================
// // 19. Number is Positive, Negative or Zero
// // Definition: Check if number is +ve, -ve, or zero.
// // Input: -5
// // Output: Negative

// let p=5;
// if(p>0){
//     console.log("number is positive");
// }
// else if(p<0){
//     console.log("number is negative");
// }
// else{
//     console.log("number is zero");
// }
// //===================================================================================
//find power of a number
let base = 2;
let exponent = 3;
console.log("Power: "+base ** exponent);