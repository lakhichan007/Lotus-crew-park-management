import "./Signup.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
let NewUser={
    userId:"",
    password:"",
    confirm_password:""
}
const Signup=()=>{
    const [newUser ,setNewUser]=useState(NewUser)
    const navigator=useNavigate()
    const handleNewUser=(e)=>{
        setNewUser({...newUser,[e.target.name]:e.target.value})
    }
    const submitSignUp=()=>{
        // console.log(newUser)
        if(newUser.userId && newUser.password && newUser.confirm_password){
            if(newUser.password===newUser.confirm_password){
               axios.post("http://localhost:5401/signup",newUser)
                .then((res)=>{
                    if(res.data.message="signup sucessfull"){
                        // alert("signup sucessfull")
                        navigator("/")
                    }
                    else{
                        alert(res.data.message)
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            }
            else{
                alert("password and confirm password are not same!")
            }
        }
        else{
            alert("Input field Can't be Empty!")
        } 
    }
    return(
        <>
        <div id="signup-main-container">
        <div>
            <p style={{color:"white"}}>Please filled details for SignUp</p>
        </div>
        <div>
            <input className="input_box" type="text" placeholder="Enter User_ID" name="userId"
            onChange={(e)=>handleNewUser(e)}/>
        </div>
        <div>
        <input className="input_box" type="password" placeholder="Enter password" name="password" 
        onChange={(e)=>handleNewUser(e)}/>
        </div>
        <div>
        <input className="input_box" type="password" placeholder="Enter confirm_password" name="confirm_password" 
        onChange={(e)=>handleNewUser(e)}/>
        </div>
        <div>
            <button className="input_box" id="sign-up-btn" onClick={submitSignUp}>SignUP</button>
        </div>
        </div>
        </>
    )
}

export default Signup