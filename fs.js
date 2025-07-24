// const path=require("path");
// const moment=require("moment");

// console.log(path.dirname(__filename));
// console.log(path.extname("myfile.txt"));

// console.log(moment().format("DD-MM-YYYY     HH:mm:ss"));

// console.log(moment());

const fs=require('fs');
let mydata="Hello ,Good morning";
fs.writeFile('mydata.txt',mydata,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file created successfully");
        fs.readFile('mydata.txt','utf8',(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("file Content : "+data);
            }
        })
    }
})


