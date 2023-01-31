import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const PrivateRoute = ({children}) => {
    
    const {user, loading}=useContext(AuthContext);

    if(loading){
        return <div>loading..........................</div>
    }
    if(user?.email){
        return children;
    }else return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;