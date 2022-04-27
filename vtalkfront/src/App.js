
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {Routes,Route, Navigate} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />}/>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/>
        <Route path="/profile/:username" element={<Profile/>}/>
      </Routes>

    </>
  );
}

export default App;




// function App() {
//   return (
//     <>

//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Homepage/>}/>
//         <Route path="//login" element={<Profile/>}/>
//         <Route path="/register" element={<Register/>}/>
//         <Route path="/Home" element={<Home />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Contact" element={<Contact/>} />
//         <Route path="/SignUp" element={<SignUp />} />
//         <Route path="/Login" element={<Login />} />
//         {/* <Route path="/Userprofile" element={<Userprofile />} /> */}
//         {/* <Route path="/EditUserProfile" element={<EditUserProfile />}/> */}
//         <Route path="/AllServices" element={<AllServices />}/>
//       </Routes>
//       <Footer/>
//     </>
//   );
// }