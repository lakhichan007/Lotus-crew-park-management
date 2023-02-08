import "./Login.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios  from "axios"
let LoginUser={
    userId:"",
    password:""
}
const Login = () => {

const [login,setLogin]=useState(LoginUser)
const navigator=useNavigate()
    const handleLogin=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }
    const visitToSignUp=()=>{
        navigator("/signUp")
    }
    const submitLogIn=()=>{
        if(login.userId && login.password){
            axios.post("http://localhost:5401/login",login)
            .then((res)=>{
                if(res.data.message==="sucess"){
                    let cUser=res.data.currUser
                    window.localStorage.setItem("user",cUser)
                    navigator("/landing")
                }
                else{
                    alert(res.data.message)
                }
            })
            .catch((err)=>{
                console.log(err)
            })

        }
        else{
            alert("Input field can't be Empty!")
        }
    }
    return (
        <>
            <div id="login-main-container">
                <div>
                    <h2 id="app-heading">Welcome to My app</h2><br />
                    <p id="app-title">Please fill the Details Below for Login!</p>
                </div>
                <div>
                    <input className="input_box" type="text" placeholder="Enter userId" name="userId"
                    onChange={(e)=>handleLogin(e)} />
                </div>
                <div>
                    <input className="input_box" type="password" placeholder=" Enter Password" name="password"
                    onChange={(e)=>handleLogin(e)} />
                </div>
                <div>
                    <button onClick={submitLogIn} style={{background:"blue"}} className="input_box">LogiIn</button>
                </div>
                <div style={{display:"flex",gap:"8px"}}>
                    <p style={{color:'red'}}>Don't have Account?</p>
                    <button onClick={visitToSignUp} id="signup-btn">SignUp Here!</button>
                </div>
            </div>
        </>
    )
}
export default Login