import React from "react";
import { Route, useNavigate } from "react-router-dom";
import AuthService from "./auth.service";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = AuthService.getCurrentUser();
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? <Component /> : navigate("/login", { replace: true })
      }
    />
  );
};

export default ProtectedRoute;
