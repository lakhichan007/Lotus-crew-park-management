import "./sidebar.css"
import axios from "axios"
const Sidebar=({setAddEmployee,setViewEmployee,setCreteRoutine})=>{

    const addEmployee=()=>{
        setAddEmployee(true)
    }

    const viewEmployee=()=>{
        const currentUser=window.localStorage.getItem("id")
        // console.log(currentUser)
        setViewEmployee(true)
        axios.post("http://localhost:5401/getEmployee",{currentUser})
        .then((res)=>{
            // console.log(res.data.message)
        })
        .catch(err=>{
            console.log(err)
        })

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
                <button className="dash-brd-btn" id="logout-btn">Logout</button>
        </div>
        </>
    )
}
export default Sidebar