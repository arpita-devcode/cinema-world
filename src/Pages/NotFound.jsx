import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
