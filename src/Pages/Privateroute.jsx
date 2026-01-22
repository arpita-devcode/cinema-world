import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // optional loading state
  if (loading) {
    return <p className="text-center mt-10">Checking authentication...</p>;
  }

  if (!user) {
    // redirect to login
    return <Navigate to="*" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
