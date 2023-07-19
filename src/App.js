import logo from './logo.svg';
import React, { createContext, useState } from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import{ BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./screens/Home";
import SignUp from "./Components/SignUp";
import SignIn from './Components/SignIn';
import Profile from './screens/Profile';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Createpost from './screens/Createpost';
import { LoginContext } from "./context/LoginContext";
import Modal from "./Components/Modal";
import UserProfie from "./Components/UserProfile";
import MyFollowingPost from "./screens/MyFollowingPost";
// mongoose.set('strictQuery',true);

function App() {
  const [userLogin, setUserLogin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">  
      <LoginContext.Provider value={{ setUserLogin, setModalOpen }}>
        <Navbar login={userLogin}/> 
        <Routes> 
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route> 
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/createPost" element={<Createpost/>}></Route>
          <Route path="/profile/:userid" element={<UserProfie />}></Route>
          <Route path="/myfollowingpost" element={<MyFollowingPost />}></Route>
        </Routes>
        <ToastContainer theme='dark'/>
        </LoginContext.Provider>
        {modalOpen && <Modal setModalOpen={setModalOpen}></Modal>}
      </div>
    </BrowserRouter>
  );
}

export default App;
