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


