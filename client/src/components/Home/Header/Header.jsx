import "./header.css"
const Header=()=>{
    const currentUser=window.localStorage.getItem("user")
    return(
        <>
        <div id="main-container">
        <div >
            <h1 style={{color:"white"}}>Welcome to Home page!</h1>
        </div>
        <div style={{color:"white" ,display:"flex",gap:"4px"}}>
            <p >User:</p>
            <p>{currentUser}</p>
        </div>
        
        </div>
    
        </>
    )
}
export default Header