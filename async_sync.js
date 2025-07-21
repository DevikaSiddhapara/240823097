// console.log("1. put bread in toaster");

// function toastBread() {
//     let start=Date.now();
//     while(Date.now()-start <2000){

//     }
//     return "Bread is toasted";
// }
// let result=toastBread();
// console.log("2. "+result);
// console.log("3.put butter on bread");



// ===========================================================================

console.log("1.put bread in toster");

setTimeout(()=>{
    console.log("2.bread is tosted");
    console.log("3.put butter on bread");
},10000);

console.log("4.start brewing coffee");

setTimeout(()=>{
    console.log("5.coffee is ready");
},5000);

console.log("6. breakfast is preapring");