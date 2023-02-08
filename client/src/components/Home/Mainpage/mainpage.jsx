import axios from "axios"
import { useState } from "react"
import "./mainpage.css"
const addNewuser = {
    name: "",
    email: "",
    number: "",
    password: "",
}
const sceduleUser={
    name:"",
    time1:"",
    time2:"",
    time3:"",
    work1:"",
    work2:"",
    work3:"",
}
const MainPage = ({ addEmployee, viewEmployee, creteRoutine, setAddEmployee,setCreteRoutine }) => {
    const currentUser = window.localStorage.getItem("abc")
    const [addNewuser1, setaddNewuser1] = useState(addNewuser)
    const add = (e) => {
        setaddNewuser1({ ...addNewuser1, [e.target.name]: e.target.value })
    }
    const handleschedule=(e)=>{

    }
    const handleSceduleBtn=()=>{
        setCreteRoutine(false)
    }
    const handlAddNewUser = () => {
        if (addNewuser1.name && addNewuser1.email && addNewuser1.number && addNewuser1.password) {
            axios.post("http://localhost:5401/addEmpoyee", { addNewuser1, currentUser })
                .then(res => {
                    alert(res.data.message)
                    setAddEmployee(false)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        else {
            alert("user field can't be Empty")
        }
    }
    return (
        <>
            {addEmployee && <div id="add-employee-box">
                <h2>New Employee Details</h2>
                <input className="new-btn" type="text" placeholder="Employee-Name"
                    onChange={(e) => add(e)} name="name" />
                <input className="new-btn" type="email" placeholder="Employee-email"
                    onChange={(e) => add(e)} name="email" />
                <input className="new-btn" type="number" placeholder="Employee-number"
                    onChange={(e) => add(e)} name="number" />
                <input className="new-btn" type="password" placeholder="Employee-password"
                    onChange={(e) => add(e)} name="password" />
                <button className="new-btn-submit" onClick={handlAddNewUser}>Sumbmit</button>
            </div>}
            {viewEmployee && <div id="view-empoyee-box"></div>}
            {creteRoutine && <div id="create-routine">
                <input className="sedule" type="text" name="name" placeholder="Enter name" 
                onChange={(e)=>handleschedule(e)}/>
                <div className="scedule-box">
                    Schedule1 : <input className="sedule"  type="time" placeholder="scedule1" 
                    onChange={(e)=>handleschedule(e)}/>
                    <input className="sedule" type="text" placeholder="work" onChange={(e)=>handleschedule(e)} />
                </div>
                <div className="scedule-box">
                    Schedule2 : <input className="sedule" type="time" placeholder="scedule2" 
                    onChange={(e)=>handleschedule(e)}/>
                    <input className="sedule" type="text" placeholder="work" onChange={(e)=>handleschedule(e)} />
                </div>
                <div className="scedule-box">
                    Schedule3 : <input className="sedule" type="time" placeholder="scedule3" onChange={(e)=>handleschedule(e)} />
                    <input className="sedule" type="text" placeholder="work" 
                    onChange={(e)=>handleschedule(e)}/>
                </div>
                <div>Day:<input className="sedule" type='number' placeholder="day"  
                onChange={(e)=>handleschedule(e)}/></div>
                <div>Attendance :<input className="sedule" type="text"  
                onChange={(e)=>handleschedule(e)}/></div>
                <button className="sedule" onClick={handleSceduleBtn}>submit</button>
            </div>}
        </>
    )
}
export default MainPage