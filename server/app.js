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
        await UserDetails.create({
            name:addNewuser1.name,
            email:addNewuser1.email,
            phone:addNewuser1.phone,
            password:addNewuser1.password,
            status:"Inactive",
            userId:currentUser
        })
        res.json({message:"user added sucessfully"})
    }
    catch(err){
        res.json({message:err.message})
    }
})
//-----------------------------
app.post("/getEmployee",async(req,res)=>{
   
     let  {currentUser} = req.body
    try{
        console.log(currentUser)
        let details= UserDetails.find({id:currentUser})
        console.log(details)
        res.json({
        
        })

    }
    catch(err){
        res.json({message:err.message})
    }
})
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})



