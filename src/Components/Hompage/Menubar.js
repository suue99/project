import React, { useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menubar() {
    const [expanded, setExpanded] = useState(false);

    const closeMenu = () => setExpanded(false);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" expanded={expanded}>
            <Container fluid>
                <Navbar.Brand as={Link} to="/" onClick={closeMenu}>
                    JOINTLY+
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Container className="d-flex justify-content-end">
                        <Nav activeKey="/home" onClick={closeMenu}>
                            <Nav.Link as={Link} to="/">
                                <span className="option">Home</span>
                            </Nav.Link>
                            <NavDropdown
                                className="about"
                                title="About Us"
                                id="nav-drop"
                                menuVariant="dark"
                                onClick={(e) => e.stopPropagation()} // Prevent closing when dropdown is clicked
                            >
                                <NavDropdown.Item as={Link} to="/Faq">
                                    <span className="option">FAQ's</span>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/list">
                                <span className="option">Exercise Library</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/Chat">
                                <span className="option">Chat with Us</span>
                            </Nav.Link>
                            <NavDropdown
                                title="Profile"
                                id="nav-drop"
                                menuVariant="dark"
                                onClick={(e) => e.stopPropagation()} // Prevent closing when dropdown is clicked
                            >
                                <NavDropdown.Item as={Link} to="/Login">
                                    <span className="option">Log In</span>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/Signup">
                                    <span className="option">Sign Up</span>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menubar;
