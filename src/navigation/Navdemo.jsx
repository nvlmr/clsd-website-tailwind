import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import {
    Navbar,
    NavDropdown,
    Container,
    Nav,
    Form,
    FormControl

} from "react-bootstrap";
import { Menu, Lock, LockOpen } from "@mui/icons-material";

import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
 import Sidenav from "./Sidenav";
export default function ButtonAppBar() {
  const [drawer, setD] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    if (searchQuery.trim() !== "") {
    navigate(`/all-news-event/${searchQuery}`);
    } else {
      navigate("/all-news-event");
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "white" , text:"white"}}>
        <Toolbar  >

          <Hidden mdUp>
            <IconButton  onClick={() => setD(true)}
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Typography  >
            <Link to="/">Home</Link>
          </Typography>


          <Hidden only={["xs", "sm"]}>

          <NavDropdown title="Research Units" id="app-navbar-dropdown" >
              <NavDropdown.Item as={Link} to="/about-research-units">About Research Units</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/molbio">Molecular Biology and Microbiology Laboratory</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/analytical">Analytical Services Laboratory</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/food-innovation">Food Innovation Laboratory</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/aquaculture">Aquaculture Research Station</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/general-facilities">General Facilities</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/all-equipment">CLSD Equipment List</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Research and Development" id="app-navbar-dropdown">
              <NavDropdown.Item as={Link} to="/about-CLSD">About Center for Lakes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/research-team">Research Team</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/all-clsd-project">CLSD Project</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/CLSD-publication">CLSD Research Paper</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/all-literature">Philippine Lakes Database</NavDropdown.Item>
          </NavDropdown>


              <Nav.Link as={Link} to="/Contact-Us">Contact</Nav.Link>
            
              
             
              

         
          <Nav.Link as={Link} to="/E-sentry">E-sentry</Nav.Link>
          <Nav.Link as={Link} to="/all-calendar-event">Calendar</Nav.Link>
          </Hidden>

          <NavDropdown title="Science and Research" id="app-navbar-dropdown">
              <NavDropdown.Item as={Link} to="/about-R&D">About Science and Research</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/DOST-Funded-Project">DOST Funded Projects</NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to="/rnd_project">Research at Research </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/R&D-publication">Research Development Outputs</NavDropdown.Item> */}
             </NavDropdown>


             <NavDropdown title="Media" id="app-navbar-dropdown">
              {/* <NavDropdown.Item as={Link} to="/Photo">Photo Gallery</NavDropdown.Item> */}
              <NavDropdown.Item as={Link} to="/all-video-gallery">Video Gallery</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/all-iec-material">IEC Materials</NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to="/rnd_project">Research at Research </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/R&D-publication">Research Development Outputs</NavDropdown.Item> */}
             </NavDropdown>


          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

          </Typography>
       {/*
          <Form className="d-flex" position="right" onSubmit={(e) => e.preventDefault()}>
              <FormControl
                  placeholder="Search"
                  type="search"
                  aria-label="Search"
                  onChange={(e) => setSearchQuery(e.target.value)}
              />

              <IconButton   onClick={handleSearch}>
                  <SearchIcon />
              </IconButton>

          </Form>
        */
  }         
    <Nav.Link as={Link} to="/all-news-event">    <IconButton>
        <SearchIcon />
      </IconButton></Nav.Link>




        </Toolbar>
      </AppBar>

      <Drawer open={drawer} onClose={() => setD(false)}>
        <div onClick={() => setD(false)}>

              <Sidenav />

        </div>
      </Drawer>

    </Box>
  );
}
