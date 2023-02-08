import { useState } from "react"
import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"
import MainPage from "./Mainpage/mainpage"

const Landing=()=>{
    const [addEmployee,setAddEmployee]=useState(false)
    const [viewEmployee ,setViewEmployee]=useState(false)
    const [ creteRoutine ,setCreteRoutine] =useState(false)
    return(
        <>
        <div style={{display:"flex"}}>
            <div>
                <Sidebar setAddEmployee={setAddEmployee} 
                            setViewEmployee={setViewEmployee}
                            setCreteRoutine={setCreteRoutine}
                />
            </div>
            <div>
                <Header/>
                <MainPage addEmployee={addEmployee}
                            viewEmployee={viewEmployee}
                            creteRoutine={creteRoutine}
                            setAddEmployee={setAddEmployee}
                            setCreteRoutine={setCreteRoutine}

                />
            </div>
        </div>
        </>
    )
}
export default Landing