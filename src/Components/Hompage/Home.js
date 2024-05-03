import { useLocation } from "react-router-dom";


function Home() {
    const location = useLocation();

    return (
        <div className="hi">
               <div>
            {location.state && location.state.welcomeMessage && (
                <h2 className="hi">{location.state.welcomeMessage}</h2>
            )}
                 </div>

               
        </div>
    );
}

export default Home;
