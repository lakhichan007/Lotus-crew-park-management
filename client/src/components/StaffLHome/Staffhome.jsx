import "./StaffHome.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
const StaffHome = () => {
    const navigator = useNavigate()
    const [Mystaffs, setMystaffs] = useState("")
    const [display, setDisplay] = useState(false)
    const handlestaffLogout = () => {
        window.localStorage.clear()
        navigator("/")
    }
    const myemail = window.localStorage.getItem("email")
    const handleEmployeetaskView = () => {
        // console.log(myemail)
        axios.post("http://localhost:5401/viewStaff", { myemail })
            .then((res) => {
                // console.log(res.data.viewsstaff)
                setMystaffs(res.data.viewsstaff)
                setDisplay(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const markStaffpresent=async()=>{
        await axios.post("http://localhost:5401/updatestaff", { myemail, status: "Present" })
            .then(res => {
                alert(res.data.message)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const markStaffAbsent=async()=>{
        await axios.post("http://localhost:5401/updatestaff", { myemail, status: "Absent" })
            .then(res => {
                alert(res.data.message)
            })
            .catch(err => {
                console.log(err)
            })
    }
    // console.log(Mystaffs)
    return (
        <>
            <div id="staff-main-container">
                <div id="sidebar-staff">
                    <h3>Dash Board</h3><br />
                    <ol>
                        <li><p>Suggestion to Employee1</p></li><br />
                        <li><p>Suggestion to Employee2</p></li><br />
                        <li><p>Suggestion to Employee3</p></li><br />
                        <li><p>Suggestion to Employee3</p></li><br />
                        <li><p>Suggestion to Employee4</p></li><br />
                        <li><p>Suggestion to Employee5</p></li><br />
                        <li><p>Suggestion to Employee6</p></li><br />
                        <li><p>Suggestion to Employee7</p></li><br />
                    </ol>
                    <button onClick={handlestaffLogout} id="staff-logout">Logout</button>
                </div>
                <div id="staff-middle">
                    <div id="staff-heading">
                        <h2>Employee Home Page</h2>
                        <p>{myemail}</p>
                    </div>
                    <div id="staff-main">
                        <button id="staff1" onClick={handleEmployeetaskView}>Click to view your task</button>
                        {display &&
                            <div id="staff-box">
                                <h2>Name:{Mystaffs.name}</h2>
                                <h1 id="email-staff">Email:{Mystaffs.email}</h1>
                                <div className="work">
                                    <p>Task-1:  {Mystaffs.work1}</p>
                                    <p>{Mystaffs.time1}</p>
                                </div>
                                <div className="work">
                                    <p>Task-2:  {Mystaffs.work2}</p>
                                    <p>{Mystaffs.time2}</p>
                                </div>
                                <div className="work">
                                    <p> Task-3:  {Mystaffs.work2}</p>
                                    <p>{Mystaffs.time2}</p>
                                </div>

                                <p id="day12">Working Day:  {Mystaffs.day}</p>
                                <p id="attendance-staff"> Attendance:  {Mystaffs.attendance}</p>
                                <div>
                                    <button onClick={markStaffpresent} id="present-btn">mark Present</button>
                                    <button onClick={markStaffAbsent} id="leave-btn">mark Leave</button>
                                </div>

                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default StaffHome