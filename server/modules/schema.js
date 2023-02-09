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
const staffDetailsSchema= new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    work1:{type:String},
    work2:{type:String},
    work3:{type:String},
    time1:{type:String},
    time2:{type:String},
    time3:{type:String},
    day:{type:String},
    attendance:{type:String}

})
const AdminUser=mongoose.model("AdminUserDB",AdminSchema)
const UserDetails= mongoose.model("UserDetailsDB",userDetailsSchema)
const staffDetails= mongoose.model("stafDetail",staffDetailsSchema)
module.exports={AdminUser,UserDetails,staffDetails}