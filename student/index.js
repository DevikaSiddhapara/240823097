const express = require('express');
const studentRoute=require("./studentRoute");
const app = express();
const port = 3000;
app.use(express.json());

app.use('/student',studentRoute);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});