console.log("hello world")
// ===========================================================================
const name="devika"
console.log(name)
// ===========================================================================
const num=7
if(num%2==0){
    console.log("Number is even")
}
else{
    console.log("Number is odd")
}
// ===========================================================================
const a=10
const b=20
if(a>b)
{
    console.log("A is grater ",a)
    
}
else{
    console.log("B is grate ",b)
}
// ===========================================================================

const year=2020

if(year%4==0)
{
    console.log("Given year is leap year")
}
// ===========================================================================

sum=0
for(i=0;i<=5;i++){
    //  console.log(i)
    sum +=i
    

}
console.log("some of natural numbers",sum)
console.log()
// ===========================================================================
fact=1
for(i=1;i<=4;i++){
    
   fact *=i
   

}
console.log("factorial of 4",fact)

//===================================================================================
//git add .(for commit the changes
//git commit -m "add "
//git push)
//===================================================================================
mul=3
for(i=1;i<=10;i++)
{
    console.log(mul,"*",i,"=",mul*i)
}
//===================================================================================
let num1 = 123456789;
let result = num1.toString().split('').reverse().join('');
console.log(result);
//===================================================================================


let num2 = 121;
let palindrome = num2.toString().split('').reverse().join('');
if (num2.toString() === palindrome) {
    console.log(num2 + " is a palindrome number");
}
else{
    console.log(num2 + " is not a palindrome number");
}

//===================================================================================

let num3 = 29;
let isPrime = true;
for (let i = 2; i <= num-1; i++) {
    if (num3 % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(num3 + " is a prime number");
}
else {
    console.log(num3 + " is not a prime number");
}




