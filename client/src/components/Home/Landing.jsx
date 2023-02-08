import { useState } from "react"
import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"
import MainPage from "./Mainpage/mainpage"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Landing=()=>{
    const [addEmployee,setAddEmployee]=useState(false)
    const [viewEmployee ,setViewEmployee]=useState(false)
    const [ creteRoutine ,setCreteRoutine] =useState(false)
    const [allEmpoye,setAllempoyee]=useState([])
    const currentUser = window.localStorage.getItem("user")
    const navigator=useNavigate()
    // console.log(allEmpoye)
    useEffect(() => {
        if (!currentUser) {
            navigator("/")
        }
    }, [])
    return(
        <>
        <div style={{display:"flex"}}>
            <div>
                <Sidebar setAddEmployee={setAddEmployee} 
                            setViewEmployee={setViewEmployee}
                            setCreteRoutine={setCreteRoutine}
                            setAllempoyee={setAllempoyee}
                />
            </div>
            <div>
                <Header/>
                <MainPage addEmployee={addEmployee}
                            viewEmployee={viewEmployee}
                            creteRoutine={creteRoutine}
                            setAddEmployee={setAddEmployee}
                            setCreteRoutine={setCreteRoutine}
                            allEmpoye={allEmpoye}

                />
            </div>
        </div>
        </>
    )
}
export default Landing