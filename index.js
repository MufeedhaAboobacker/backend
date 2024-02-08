// 1.import the express
const express = require('express')
const employeeModel = require('./model')

// 2. initialize express
const app = new express()

//3.middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

 // 3. API Creation
app.get('/',(req,res)=>{
    res.send("message from server")
})
app.get('/trial',(req,res)=>{
    res.send("message from trial API")
})
app.get('/data',(req,res)=>{
    res.json({"name":"mufeedha","age":21})
})
//api to add data to db
app.post('/add',async(req,res)=>{
    var result = await new employeeModel(req.body)
    result.save()
    res.send("data added")
})

//delete a document
app.delete('/remove/:id', async(req,res)=>{
    console.log(req.params);
    let id =req.params.id
    await employeeModel.findByIdAndDelete(id);
    res.json({message:'deleted'})
})
//to update
app.put('/edit/:id',async(req,res)=>{
    let id=req.params.id 
    await employeeModel.findByIdAndUpdate(id,req.body)
    res.send("epdated")
})

app.get('/view',async(req,res)=>{
    let result=await employeeModel.find();
    res.json(result);
})
app.post('/postdata',(req,res)=>{
    console.log(req.body)
    res.send("data added")
})

 //4.port
 app.listen(8080,()=>{
    console.log("port 8080 is up and running")
 })
