import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading){
     return (
      <h1 className="text-center py-30">
        <span className="loading loading-bars loading-xl"></span>
      </h1>
    );
  }
    if(user){
        return children;
    }
    return <Navigate state={location?.pathname} to={`/login`}></Navigate>;
};

export default PrivateRoute;