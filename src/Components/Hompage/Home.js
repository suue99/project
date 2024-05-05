import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

function Home() {
    const location = useLocation();

    return (
        <div className="home-container">
               <div className="greeting">
            {location.state && location.state.welcomeMessage && (
                <h2 className="hi">{location.state.welcomeMessage}</h2>
            )}
                 </div>
           
           
            <span className="subcontainer-1" >
                 <h3 className="jointly-text">Jointly+ <br></br>Take charge of OA</h3>  
            </span>
 
            <span className="subcontainer-2" >
                <h4 className="access-text">
                Access expert physiotherapy guidance, customized exercise programs, and on-demand support to achieve your self management goals.
                </h4>
            </span>

            <span className="subcontainer-3">
            <Link to={'/Signup'}> <Button className="p-3">Get started</Button></Link>
            </span>
            
            <span class="youth-art">
        '' 
            <img src="https://img.freepik.com/free-vector/flat-people-looking-up-top-view_23-2148970661.jpg" height="420" width="420" alt="a random doodle" />

            </span>


             </div>
    );
}

export default Home;
