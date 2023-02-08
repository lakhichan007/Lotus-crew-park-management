import {BrowserRouter,Routes,Route} from "react-router-dom"
import Landing from "./components/Home/Landing";
import Login from "./components/Login/Login";
import StaffLogin from "./components/Login/staffLogin";
import Signup from "./components/signup/Signup"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signUp" element={<Signup/>}/>
      <Route path="/landing" element={<Landing/>}/>
      <Route path="/staff" element={<StaffLogin/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
