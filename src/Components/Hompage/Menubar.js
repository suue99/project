import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menubar() {
    return (

        <Navbar expand="lg" bg='dark' variant='dark'>

          <Container fluid>
          <Navbar.Brand> <Link className={`links`} to = "/home">JOINTLY+ </Link></Navbar.Brand>
          
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
         
               <Nav className="ml-auto" activeKey="/home">
             
                  <Nav.Link as = {Link} to = "/" > <span className='option'>Home</span>  </Nav.Link>
                  
                  <NavDropdown title="About Us" id="basic-nav-dropdown" menuVariant="dark">
                  <NavDropdown.Item>
                    <Nav.Link as = {Link} to  = "/Faq"> <span className='option'>FAQ's</span> </Nav.Link>
                    </NavDropdown.Item>  
                  </NavDropdown>
                
                  
                  
                  <Nav.Link as = {Link} to  =  "/Exercise" > <span className='option'>Exercise Library</span> </Nav.Link>
                 
                  
                  
                  <Nav.Link as = {Link} to  = "/Chat"><span className='option'>Chat with Us</span>.  </Nav.Link>
              
                
                
                <NavDropdown title="Profile" id="basic-nav-dropdown" menuVariant="dark">
                    <NavDropdown.Item>    <Nav.Link as = {Link} to  = "/Profile" ><span className='option'>  Profile-Page </span> </Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item>    <Nav.Link as = {Link} to  = "/Login" > <span className='option'> Log In </span>  </Nav.Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>    <Nav.Link as = {Link} to  = "/Signup" > <span className='option'> Sign Up </span></Nav.Link></NavDropdown.Item>
                  </NavDropdown> 
            
               </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
       
    );
  }
  
  export default Menubar;