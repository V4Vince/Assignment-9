import { Paper, Box, CardActions, Button, Typography } from "@mui/material";
import React from "react";
import TextInput from '../Input/TextInput'
const LoginPage = () => {
    return (
        <Box height="70vh" display="flex" justifyContent="center" alignItems={'center'}>
            <Paper elevation={10} sx={{ maxWidth: 275, paddingX: 2, paddingBottom: 2}}>
                <Typography textAlign={'center'} variant={"h5"} marginY={2}>Sign In</Typography>
                <TextInput textLabel="Email"/>
                <TextInput textLabel="Password"/>
                <CardActions display='flex'>
                    <Button fullWidth>Login</Button>
                    <Button fullWidth>Sign up instead</Button>
                </CardActions>
            </Paper>
        </Box>
       
    )
}

export default LoginPage