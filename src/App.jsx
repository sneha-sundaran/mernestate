
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Signup from "./pages/signup";
import About from "./pages/About";

export default function App() {

  return <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/sign-in" element={<SignIn/>}/>
  <Route path="/sign-up" element={<Signup/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/About" element={<About/>}/>

  

  </Routes>
  </BrowserRouter>;
  
}
