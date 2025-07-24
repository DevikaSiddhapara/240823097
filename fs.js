const path=require("path");
const moment=require("moment");

console.log(path.dirname(__filename));
console.log(path.extname("myfile.txt"));

console.log(moment().format("DD-MM-YYYY     HH:mm:ss"));

console.log(moment());

