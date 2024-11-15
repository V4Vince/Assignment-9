import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

export default function MyNavbar() {
   const navigate = useNavigate()
   const location = useLocation()
   console.log("MY NAV BAR STATE", location.state);
   
  const handleLoginNavigation = () => navigate("/Home")
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}

          <Button sx={{ flexGrow: 1 }} variant="outline" to="/Job-Listing" 
          component={NavLink} 
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
            Job Listings
          </Button>

          {
            location.state?.loggedIn && <Button sx={{ flexGrow: 1 }} variant="outline" to="/user-favorited-page" 
            component={NavLink} 
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
              Favorited Jobs
            </Button> 
          }

          <Button variant="outline" to="/company-showcase" 
          component={NavLink} 
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
            Campanies
          </Button>

          <Button variant="outline" to="/contact" 
          component={NavLink} 
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
            Contact
          </Button>

          <Button variant="outline" to="/About" 
          component={NavLink} 
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
            About
          </Button>

          <Button 
          variant='outline' 
          to="/Home" 
          component={NavLink} 
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
            { location.state?.loggedIn ? "Log Out" : "Log In"}
          </Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}