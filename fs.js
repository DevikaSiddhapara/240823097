// const path=require("path");
// const moment=require("moment");

// console.log(path.dirname(__filename));
// console.log(path.extname("myfile.txt"));

// console.log(moment().format("DD-MM-YYYY     HH:mm:ss"));

// console.log(moment());

// const fs=require('fs');
// let mydata="Hello ,Good morning";
// fs.writeFile('mydata.txt',mydata,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("file created successfully");
//         fs.readFile('mydata.txt','utf8',(err,data)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log("file Content : "+data);
//             }
//         })
//     }
// })



// const fs = require('fs').promises;

// async function readFileExample() {
//     try {
//         const data=await fs.readFile('mydata.txt','utf8');
//         console.log("File Content: " ,data);
//     }
//     catch (err) {
//         console.error("Error reading file:", err);
//     }
// }
// readFileExample();

const fs=require('fs');

fs.appendFile('mydata.txt','\nthis data is appending in file',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("data appended successfully");
        fs.readFile('mydata.txt','utf-8',(err,data)=>{
            if(err){
                console.log(err);

            }
            else{
                console.log("file content after appending data: " + data);
            }
        })
    }
})