import "./sidebar.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Sidebar=({setAddEmployee,setViewEmployee,setCreteRoutine,setAllempoyee})=>{
const navigator=useNavigate()
    const addEmployee=()=>{
        setAddEmployee(true)
    }

    const viewEmployee=()=>{
        const currentUser=window.localStorage.getItem("user")
        // console.log(currentUser)
        setViewEmployee(true)
        axios.post("http://localhost:5401/getEmployee",{currentUser})
        .then((res)=>{
            const Empoyee=res.data.MyEmployee
            // console.log(Empoyee)
            setAllempoyee(Empoyee)
        })
        .catch(err=>{
            console.log(err)
        })

    }
    const logoutUser=()=>{
        window.localStorage.clear()
        navigator("/")
    }
    const createRoutine=()=>{
        setCreteRoutine(true)

    }
    return(
        <>
        <div id="sidebar-main-container">
                <h2 id="dash-Board">Dash Board</h2>
                <button className="dash-brd-btn" onClick={addEmployee}>Add Empolyee</button>
                <button className="dash-brd-btn" onClick={viewEmployee}> View Employee</button>
                <button className="dash-brd-btn" onClick={createRoutine}>Create-Routine</button>
                <button className="dash-brd-btn" id="logout-btn" onClick={logoutUser}>Logout</button>
        </div>
        </>
    )
}
export default Sidebar