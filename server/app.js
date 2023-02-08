require('dotenv').config()
const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
const port =process.env.PORT 
const {AdminUser,UserDetails}= require("./modules/schema")

app.post("/signup", async(req,res)=>{
    const {userId,password}=req.body
    try{
        
        const isUser= await AdminUser.findOne({userId})
        // console.log(isUser)
        if(!isUser){
            await AdminUser.create({
                userId,password
            })
            res.json({message:"signup sucessfull"})
        }
        else{
            res.json({message:"User Already Exist"})
        }
    }
    catch(err){
        console.log(err)
    }
})
app.post("/login",async(req,res)=>{
    const {userId,password}=req.body
    try{
        const isUser= await AdminUser.findOne({userId})
        if(isUser){
            if(isUser.password===password){
                res.json({currUser:isUser.userId,message:"sucess"})
            }
            else(res.json({message:"Invalid crenditials!"}))
        }
        else{
            (res.json({message:"User Doesn't Exist!"}))}
    
    }
    catch(err){
        res.json({message:err.message})
    }
})

app.post("/addEmpoyee",async(req,res)=>{
    const {addNewuser1,currentUser}=req.body
    try{
        console.log(addNewuser1)
        await UserDetails.create({
            name:addNewuser1.name,
            email:addNewuser1.email,
            phone:addNewuser1.number,
            password:addNewuser1.password,
            status:"Pending",
            userId:currentUser
        })
        res.json({message:"New Employee added"})
    }
    catch(err){
        res.json({message:err.message})
    }
})

//----------------------------------------
app.post("/getEmployee",async(req,res)=>{
   
     let  {currentUser} = req.body
    try{
      const MyEmployee=  await UserDetails.find({userId:currentUser})
      res.json({MyEmployee})
    }
    catch(err){
        res.json({message:err.message})
    }
})
app.post("/update",async(req,res)=>{
    const {id,status}=req.body
    try{
        await UserDetails.updateOne({_id:id},{$set:{status}})
    }
    catch(err){
        res.json({message:err.message})
    }
})
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})



