import {BrowserRouter,Routes,Route} from "react-router-dom"
import Landing from "./components/Home/Landing";
import Login from "./components/Login/Login";
import Signup from "./components/signup/Signup"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signUp" element={<Signup/>}/>
      <Route path="/landing" element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
