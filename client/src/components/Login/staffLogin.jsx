import "./Login.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios  from "axios"
const stafflog={
    email:"",
    password:""
}
const StaffLogin=()=>{
    const [staff,setstaff]=useState(stafflog)
    const navigator=useNavigate()
    const handleStaffLogin=(e)=>{
        setstaff({...staff,[e.target.name]:e.target.value})
    }
    const staffSubmit=()=>{
        
        axios.post("http://localhost:5401/Stafflogin",staff)
        .then((res)=>{
            if(res.data.message==="sucess"){
                window.localStorage.setItem("email",res.data.email)
                navigator("/staffHome")
            }
            else{
                alert(res.data.message)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
        

    }

return(
    <>
    <div id="login-main-container">
            <div>
                <h2 id="app-heading">Welcome Employee</h2><br />
                <p id="app-title">Please fill the Details Below for Login!</p>
            </div>
            <div>
                <input className="input_box" type="email" placeholder="Enter email" name="email"
                onChange={(e)=>handleStaffLogin(e)} />
            </div>
            <div>
                <input className="input_box" type="password" placeholder=" Enter Password" name="password"
                onChange={(e)=>handleStaffLogin(e)} />
            </div>
            <div>
                <button onClick={staffSubmit} style={{background:"blue"}} className="input_box">LogiIn</button>
            </div>
            
        </div>
    </>
)
}
export default StaffLogin