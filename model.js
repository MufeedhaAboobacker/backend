const mongoose=require("mongoose")
//connection

mongoose.connect("mongodb+srv://mufeedha1601:mufeedhaAboobacker058@cluster0.llcuncn.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Db connected")
})
.catch(err=>console.error(err))

let  mongoSchema = mongoose.Schema

const EmployeeSchema = new mongoSchema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number
})
var employeeModel = mongoose.model("employee",EmployeeSchema)
module.exports =employeeModel
