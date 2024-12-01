import { Navigate } from 'react-router-dom';
import { useAuth } from './authProvider';

const PrivateRoute = ({children, redirectTo }) => {
    const {isLoggedIn, actions} = useAuth()

    //If the user is logged in, then allow navigation
    //If user is not logged in, then redirect to sign in page
    return isLoggedIn.isLoggedIn ? {...children} : <Navigate to='/home'  /> 
}

export default PrivateRoute