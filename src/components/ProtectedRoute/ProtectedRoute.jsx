import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRouteElement({ element: Component, isLoggedIn, ...props }) {
  return isLoggedIn ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...props} />
  ) : (
    <Navigate to='/signin' replace />
  );
}

export default ProtectedRouteElement;
