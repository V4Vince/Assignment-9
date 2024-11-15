import { Paper, Box, CardActions, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import TextInput from '../Input/TextInput';
import { userData } from '../../Utilities/siteData';

const LoginPage = () => {

    const [loginForm, setLoginForm] = useState({email: '', password: ''})

    //Handle email change
    const handleEmailChange = (e) => {
        // console.log("YOU TYPED: ", e.target.value);
        setLoginForm({...loginForm, email: e.target.value})
    }

    //Handle password change
    const handlePasswordChange = (e) => {
        // console.log("PASSWORD TYPED: ", e.target.value);
        setLoginForm({...loginForm, password: e.target.value})
    }

    //handle login action
    const handleLogin = () => {
        console.log("LOGGING IN...", loginForm);
        //find user with email from the input
        const userExists = userData.find(user => user.email === loginForm.email)
        //if the user exists then check to see if the password from the input matches
        if(userExists){
            return userExists.password === loginForm.password ? console.log("YES CORRECT CREDENTIALS") : console.log("INCORRECT CREDENTIALS")
        }
        //if there is no users that were found, then return
        return console.log("EMAIL DOES NOT EXISTS");
    }

    //Login Form
    return (
        <Box height="70vh" display="flex" justifyContent="center" alignItems={'center'}>
            <Paper elevation={10} sx={{ maxWidth: 275, paddingX: 2, paddingBottom: 2}}>
                <Typography textAlign={'center'} variant={"h5"} marginY={2}>Sign In</Typography>
                <TextInput textLabel="Email" type="email" onChange={handleEmailChange}/>
                <TextInput textLabel="Password" type="password" onChange={handlePasswordChange}/>
                <CardActions display='flex'>
                    <Button fullWidth onClick={handleLogin}>Login</Button>
                    <Button fullWidth>Sign up instead</Button>
                </CardActions>
            </Paper>
        </Box>
       
    )
}

export default LoginPage


