import '../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Menubar from "./Components/Hompage/Menubar";
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Home from './Components/Hompage/Home';
import Profile from './Components/ProfilePage/Profile';
import Exercise from './Components/ExercisePage/Exercise';
import Chat from './Components/ChatPage/Chat';
import Faq from './Components/AboutPage/Faq';
import Signup from './Components/ProfilePage/Signup';
import Login from './Components/ProfilePage/Login';
import Footer from './Components/Hompage/Footer';


function App() {
  return (
    <div>
      <BrowserRouter> 
      <Menubar/>

    <Routes>
      
      <Route path = "/" element = {<Home />} />
      <Route path = "/Faq" element = {<Faq />} />
      <Route path = "/Profile" element = {<Profile />} />
      <Route path = "/Exercise" element = {<Exercise />} />
      <Route path = "/Chat" element = {<Chat />} />
      <Route path = "/Signup" element = {<Signup />} />
      <Route path = "/Login" element = {<Login />} />

    </Routes>
    </BrowserRouter>
     
     <Footer/>
     </div>
    
  );
}

export default App;
