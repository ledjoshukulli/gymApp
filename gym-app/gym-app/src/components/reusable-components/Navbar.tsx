import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import ScaleIcon from "@mui/icons-material/Scale";

const list = (
  <Box role="presentation">
    <List>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <FitnessCenterIcon />
          </ListItemIcon>
          <ListItemText>Exercise List</ListItemText>
        </ListItemButton>
      </ListItem>
      <Divider />

      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <LocalDiningIcon />
          </ListItemIcon>
          <ListItemText>Ingredients Info</ListItemText>
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <ScaleIcon />
          </ListItemIcon>
          <ListItemText>Weight Units</ListItemText>
        </ListItemButton>
      </ListItem>
      <Divider />
    </List>
  </Box>
);
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDrawer, setOpenDrawer] = useState(false); // State for Drawer opening

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer); // Toggle Drawer state
  };

  const closeDrawer = () => {
    setOpenDrawer(false); // Function to close the Drawer
  };

  return (
    <Box>
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: "#808080", display: 'flex', justifyContent: 'space-between' }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
    <Drawer
      anchor="left"
      open={openDrawer} // Set the open prop to the state variable
      onClose={closeDrawer}
       // Handle Drawer close event
    >
      {list}
    </Drawer>
  </Box>
  );
};

export default Navbar;
