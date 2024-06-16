const express=require('express')
const cors=require("cors")
const mongoose =require("mongoose")

const EmployeeModel=require('./Employes')
const app =express()
app.use(cors())
app.use(express.json())

//mongoose.connect("mongodb://localhost:27017/NewEmployee")
mongoose.connect(process.env.MONGO_URL)

app.post('/login',(req,res)=>{
     const {email,password}=req.body;
     EmployeeModel.findOne({email:email,password:password})
     .then(user=>{
          if(user){
               if(user.password===password){
                    res.json("Success")
               }else{
                    res.json("Password didn't match")
               }
          }else{
               res.json("No record found")
          }
     })
})
app.post('/',(req,res)=>{
     EmployeeModel.create(req.body)
     .then(employees01=>res.json(employees01))
     .catch(err=>res.json(err))
})

app.listen(2023,console.log("server running"))