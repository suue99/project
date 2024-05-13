import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase";
import { useNavigate } from 'react-router-dom';

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
            
            <span className="youth-art">
                <img src="https://img.freepik.com/free-vector/flat-people-looking-up-top-view_23-2148970661.jpg" height="420" width="420" alt="a random doodle" />
            </span>

            {!user && (
                <span className="subcontainer-3">
                    <Link to={'/Signup'}> <Button className="p-3">Get started</Button></Link>
                </span>
            )}
        </div>
    );
}

export default Home;
