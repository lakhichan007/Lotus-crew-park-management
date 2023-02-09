import axios from "axios"
import { useState } from "react"
import "./mainpage.css"
const addNewuser = {
    name: "",
    email: "",
    number: "",
    password: "",
}
const sceduleUser = {
    name: "",
    email:"",
    time1: "",
    time2: "",
    time3: "",
    work1: "",
    work2: "",
    work3: "",
    day:"",
    attendance:"Pending"
}
const MainPage = ({ addEmployee, viewEmployee, creteRoutine,viewstatus, setAddEmployee, setCreteRoutine, allEmpoye, setViewEmployee,employeeStatus,setViewStatus}) => {
    const currentUser = window.localStorage.getItem("user")
    const [addNewuser1, setaddNewuser1] = useState(addNewuser)
    const [staffadd, setstaffadd]=useState(sceduleUser)
    const add = (e) => {
        setaddNewuser1({ ...addNewuser1, [e.target.name]: e.target.value })
    }
   
    const handleSceduleBtn = async() => {
        // console.log(staffadd)
        
        await axios.post("http://localhost:5401/schedule",staffadd)
        .then(res => {
            alert(res.data.message)
            setCreteRoutine(false)
        })
        .catch(err => {
            console.log(err)
        })
       
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
    const handleschedule=(e)=>{
        setstaffadd({...staffadd,[e.target.name]:e.target.value})
    }
    const activestatus = async (id, e) => {
        await axios.post("http://localhost:5401/update", { id, status: "Active" })
            .then(res => {

            })
            .catch(err => {
                console.log(err)
            })
    }

    const inactivestatus = async (id, e) => {
        await axios.post("http://localhost:5401/update", { id, status: "Inactive" })
            .then(res => {
                alert(res.data.message)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleuserViewClose = () => {
        setViewEmployee(false)
    }
    const handleStatusViewClose=()=>{
        setViewStatus(false)
    }
    // console.log(employeeStatus)
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

            {viewEmployee && <div id="view-empoyee-box">
                <div style={{ display: "flex", gap: "1px" }}>
                    <div className="all-employee-static">Name</div>
                    <div className="all-employee-static">Email</div>
                    <div className="all-employee-static">Phone</div>
                    <div className="all-employee-static">Password</div>
                    <div className="all-employee-static">Current Status</div>
                    <div className="all-employee-static">Status</div>
                </div>
                {
                    allEmpoye.map(employee => (
                        <div style={{ display: "flex", gap: "1px" }} key={employee._id}>
                            <p className="all-employee-dynamic">{employee.name}</p>
                            <p className="all-employee-dynamic">{employee.email}</p>
                            <p className="all-employee-dynamic">{employee.phone}</p>
                            <p className="all-employee-dynamic">{employee.password}</p>
                            <p className="all-employee-dynamic">{employee.status}</p>
                            <p className="all-employee-dynamic">
                                <button onClick={(e) => activestatus(employee._id, e)} style={{ color: "green", border: "none", fontWeight: "bolder", marginRight: "10px", padding: "4px", borderRadius: "2px", cursor: "pointer" }}>Active</button>
                                <button onClick={(e) => inactivestatus(employee._id, e)} style={{ color: "red", border: "none", fontWeight: "bolder", padding: "4px", borderRadius: "2px", cursor: "pointer" }}>InActive</button>
                            </p>

                        </div>
                    ))
                }
                <button style={{ padding: "2px 5px", color: "white", backgroundColor: "red" }} onClick={handleuserViewClose}>close</button>
            </div>
            }

{viewstatus && <div id="view-empoyee-box">
                <div style={{ display: "flex", gap: "1px" }}>
                    <div className="all-employee-static">Name</div>
                    <div className="all-employee-static">Email</div>
                    <div className="all-employee-static">Tast1</div>
                    <div className="all-employee-static">Task2</div>
                    <div className="all-employee-static">Task3</div>
                    <div className="all-employee-static">Current Status</div>
                </div>
                {
        
        employeeStatus.map(ele => (
                        <div style={{ display: "flex", gap: "1px" }} >
                            <p className="all-employee-dynamic" >{ele.name}</p>
                            <p className="all-employee-dynamic" >{ele.email}</p>
                            <div className="all-employee-dynamic">
                            <p >{ele.work1}</p>
                            <p>Time: {ele.time1}</p>
                            </div>
                            <div className="all-employee-dynamic">
                            <p >{ele.work2}</p>
                            <p>Time: {ele.time2}</p>
                            </div>
                            <div className="all-employee-dynamic">
                            <p >{ele.work3}</p>
                            <p>Time: {ele.time3}</p>
                            </div>
                            <p className="all-employee-dynamic">{ele.attendance}</p>
                        </div>
                    ))
                }
                <button style={{ padding: "2px 5px", color: "white", backgroundColor: "red" }} onClick={handleStatusViewClose}>close</button>
            </div>
            }
            {creteRoutine && <div id="create-routine">
                <input className="sedule" type="text" name="name" placeholder="Enter name"
                    onChange={(e) => handleschedule(e)} />
                <input className="sedule" type="text" name="email" placeholder="email"
                    onChange={(e) => handleschedule(e)} />
                <div className="scedule-box">
                    Schedule1 : <input className="sedule" type="time" name="time1" placeholder="scedule1"
                        onChange={(e) => handleschedule(e)} />
                    <input className="sedule" type="text" placeholder="work" name="work1" onChange={(e) => handleschedule(e)} />
                </div>
                <div className="scedule-box">
                    Schedule2 : <input className="sedule" type="time" name="time2" placeholder="scedule2"
                        onChange={(e) => handleschedule(e)} />
                    <input className="sedule" type="text" placeholder="work" name="work2" onChange={(e) => handleschedule(e)} />
                </div>
                <div className="scedule-box">
                    Schedule3 : <input className="sedule" type="time" name="time3" placeholder="scedule3" onChange={(e) => handleschedule(e)} />
                    <input className="sedule" type="text" name="work3" placeholder="work"
                        onChange={(e) => handleschedule(e)} />
                </div>
                <div>Day:<input className="sedule" type='number' name="day" placeholder="day"
                    onChange={(e) => handleschedule(e)} /></div>
                <button className="sedule" onClick={handleSceduleBtn}>submit</button>
            </div>}
        </>
    )
}
export default MainPage