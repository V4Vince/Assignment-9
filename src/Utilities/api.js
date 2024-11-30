import axios from 'axios'
import { accessKey } from './credentials';

//Axios request to unsplash API for images
export const fetchImagesFromAPI = async () => {
    const response = await axios.get(`https://api.unsplash.com/photos/?client_id=${accessKey}`)
    console.log("RESPONSE", response);

    return response.data
} 

export const createNewUser = async (data) => {
    const response = await axios.post(`http://localhost:3000/user/create`, data)
    console.log("CREATE NEW USER RESPONSE", response);

    return response.data
}

export const signInUser = async (credentials) => {
    const response = await axios.post(`http://localhost:3000/user/sign-in`, credentials)
    console.log("SIGN IN USER RESPONSE", response);

    return response.data
}