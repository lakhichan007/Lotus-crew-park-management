const mongoose= require("mongoose")

mongoose.connect(process.env.MONGO_DB)
.then(()=>{
    console.log("connected to database")
})
.catch(err=>{
    console.log(err)
})

const AdminSchema= new mongoose.Schema({
    userId:{type:String},
    password:{type:String}
})

const userDetailsSchema= new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    phone:{type:Number},
    password:{type:String},
    status:{type:String},
    userId:{type:String}
})

const AdminUser=mongoose.model("AdminUserDB",AdminSchema)
const UserDetails= mongoose.model("UserDetailsDB",userDetailsSchema)
module.exports={AdminUser,UserDetails}