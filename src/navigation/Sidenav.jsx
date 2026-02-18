import React from "react";

import { List, ListItem, ListItemIcon, ListItemText  } from '@mui/material';

import {
    Navbar,
    Nav,
    Container,
    NavDropdown,
    Form,
    FormControl,
    Dropdown
} from "react-bootstrap";


import { Link } from "react-router-dom";

import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';

import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


export default ({ children }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <>
      <List>
      {/* <Link to="/login">
          <ListItem >
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        </Link> */}

        <Link to="/about-research-units">
          <ListItem >
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText primary="About Research Units" />
          </ListItem>
        </Link>
        <Link to="/about-CLSD">
          <ListItem >
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText primary="About CLSD" />
          </ListItem>
        </Link>
     
        <Link to="/E-sentry">
          <ListItem >
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText primary="About E-sentry" />
          </ListItem>
        </Link>


        <Link to="/about-R&D">
          <ListItem >
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText primary="About Science and Research Lab" />
          </ListItem>
        </Link>


     


      </List>



      {/* <List
       sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
       component="nav"
       aria-labelledby="nested-list-subheader"
       subheader={
         <ListSubheader component="div" id="nested-list-subheader">
           Nested List Items
         </ListSubheader>
       }
     >
       <ListItemButton>
         <ListItemIcon>
           <SendIcon />
         </ListItemIcon>
         <ListItemText primary="Sent mail" />
       </ListItemButton>
       <ListItemButton>
         <ListItemIcon>
           <DraftsIcon />
         </ListItemIcon>
         <ListItemText primary="Drafts" />
       </ListItemButton>
       <ListItemButton onClick={handleClick}>
         <ListItemIcon>
           <InboxIcon />
         </ListItemIcon>
         <ListItemText primary="Inbox" />
         {open ? <ExpandLess /> : <ExpandMore />}
       </ListItemButton>
       <Collapse in={open} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
           <ListItemButton sx={{ pl: 4 }}>
             <ListItemIcon>
               <StarBorder />
             </ListItemIcon>
             <ListItemText primary="Starred" />
           </ListItemButton>
         </List>
       </Collapse>
     </List> */}


    </>
  );
};
