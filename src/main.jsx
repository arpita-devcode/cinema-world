import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";

import "./App.css"

import AuthProvider from "./context/AuthProvider";
import router from "./Pages/routes/Router";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);