import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import AuthService from "../services/auth.service";


import { useNavigate } from "react-router-dom";
import "./style.css";

const Navigationbar = () => {
  const navigate = useNavigate();

  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showUserBoard, setShowUserBoard] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setShowUserBoard(user.roles.includes("ROLE_USER"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(null);
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setShowUserBoard(false);
    navigate("/login");
  };

  return (
    <>
<Container className="ml-auto">
<Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">CLSD</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Boards" id="basic-nav-dropdown">
            {showAdminBoard && (
              <NavDropdown.Item href="/admin">Admin Board</NavDropdown.Item>
            )}
            {showModeratorBoard && (
              <NavDropdown.Item href="/mod">Mod Board</NavDropdown.Item>
            )}
            {showUserBoard && (
              <NavDropdown.Item href="/user">User Board</NavDropdown.Item>
            )}
          </NavDropdown>




          <NavDropdown title="Functions" id="basic-nav-dropdown">
            {showAdminBoard && (
              <NavDropdown.Item href="/event_list">Events</NavDropdown.Item>
            )}
            {showModeratorBoard && (
              <NavDropdown.Item href="/event_list">Events</NavDropdown.Item>
            )}
            {showUserBoard && (
              <NavDropdown.Item href="/event_list">Events</NavDropdown.Item>
            )}



            {showAdminBoard && (
              <NavDropdown.Item href="/collection_list">Collections</NavDropdown.Item>
            )}
            {showModeratorBoard && (
              <NavDropdown.Item href="/collection_list">Collections</NavDropdown.Item>
            )}
              {showAdminBoard && (
              <NavDropdown.Item href="/literature_list">Literatures</NavDropdown.Item>
            )}
            {showModeratorBoard && (
              <NavDropdown.Item href="/literature_list">Literatures</NavDropdown.Item>
            )}
                   {showAdminBoard && (
              <NavDropdown.Item href="/equipment_list">Equipments</NavDropdown.Item>
            )}
            {showModeratorBoard && (
              <NavDropdown.Item href="/equipment_list">Equipments</NavDropdown.Item>
            )}


              {showAdminBoard && (
              <NavDropdown.Item href="/clsd_project_list">Clsd Project</NavDropdown.Item>
            )}
            {showModeratorBoard && (
              <NavDropdown.Item href="/clsd_project_list">Clsd Project</NavDropdown.Item>
            )}

            {showAdminBoard && (
              <NavDropdown.Item href="/rnd_project_list">R&D Project</NavDropdown.Item>
            )}
            {showModeratorBoard && (
              <NavDropdown.Item href="/rnd_project_list">R&D Projec</NavDropdown.Item>
            )}


            {showAdminBoard && (
              <NavDropdown.Item href="/researcher_list">Researcher Team</NavDropdown.Item>
            )}
            {showModeratorBoard && (
              <NavDropdown.Item href="/researcher_list">Researcher Team</NavDropdown.Item>
            )}
               {showAdminBoard && (
              <NavDropdown.Item href="/publication_list">Publications </NavDropdown.Item>
            )}
            {showModeratorBoard && (
              <NavDropdown.Item href="/publication_list">Publications </NavDropdown.Item>
            )}

          </NavDropdown>
          
        </Nav>
     
      </Navbar.Collapse>


      {currentUser ? (
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/profile">{currentUser.username}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Button variant="light" onClick={logOut}>Logout</Button>
            </Nav.Item>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
          </Nav>
        )}
    </Navbar>
    </Container>
    </>
  );
}

export default Navigationbar;
