import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase";
import { useNavigate } from 'react-router-dom';
import Slider from "./Slider";
import docImage from '../../Images/medical-image.jpg'
import exImage from '../../Images/exercise.jpg'
import chatImage from '../../Images/chat.jpg'
import Testimonials from "./Testimonials";




function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = () => {               
        signOut(auth).then(() => {
            
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
           
        });
    }

    return (

    <div>
        <div className="home-container">
            <div className="greeting">
                {location.state && location.state.welcomeMessage && (
                    <h2 className="hi">{location.state.welcomeMessage}</h2>
                )}
            </div>

           
            <span className="subcontainer-1" >
                <h3 className="jointly-text">Jointly+ <br></br>Take charge of Osteo Arthritis</h3>  
            </span>
 
            <span className="subcontainer-2" >
                <h4 className="access-text">
                Access expert physiotherapy guidance, customized exercise programs, and on-demand support to achieve your self management goals.
                </h4>
            </span>

            <span className="subcontainer-3">
                {user && (
                    <Button onClick={handleLogout}>
                        Logout
                    </Button>
                )}
              </span>

              <span className="slider">
                 <Slider/>
              </span>



            {!user && (
                <span className="subcontainer-3">
                    <Link to={'/Signup'}> <Button className="p-3">Get started</Button></Link>
                </span>
            )}
        </div>

       <div className="empty"> </div>

       
   

        <div className="options-container">
       
        <span className="expert">
        <div>
            <img src={docImage} alt="Medical Professional" />
            <h1 className="h-1">Expert Guidance</h1>
            <p className="para-one">
            Connect with experienced physiotherapists for tailored advice and treatment plans.
            </p>
        </div>
        </span>

        <span className="perfect">
        <div>
            <img src={exImage} alt="Your Perfect Plan" />
            <h1 className="h-1">Expert Guidance</h1>
            <p className="para-one">
            Discover exercises tailored 
                    specifically to your condition
                    and goals
            </p>
        </div>
        </span>

        <span className="always">
        <div>
            <img src={chatImage} alt="Always here for you" />
            <h1 className="h-1">Expert Guidance</h1>
            <p className="para-one">
            Get the help you need
                    whenever you need it. 
                    From expert advice to 
                    exercise modification
            </p>
        </div>
        </span>

        </div>

        <Testimonials/>

        </div>
    );
}

export default Home;
