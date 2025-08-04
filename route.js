const express=require('express');
const app=express();
const port=80;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello........\n");
});

app.get('/about',(req,res)=>{
    res.send("This is about page\n");
});

app.post('/store',(req,res)=>{
    const data = req.body;
    console.log("Received data:", data);
    res.send("Data received successfully\n");
})
app.put('/update/:id',(req,res)=>{
    const id = req.params.id;
    const data = req.body;
    console.log(`Updating data for ID: ${id}`, data);
    res.send(`Data for ID ${id} updated successfully\n`);
})
app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    console.log(`Deleting data for ID: ${id}`);
    res.send(`Data for ID ${id} deleted successfully`)
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})