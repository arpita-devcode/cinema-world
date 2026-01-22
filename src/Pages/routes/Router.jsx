import React from "react";
import { createBrowserRouter } from "react-router";

import Root from "../../Pages/Root";
import Home from "../../Pages/Home"
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import AllMovies from "../../Pages/AllMovies";
import MovieDetails from "../../Pages/MovieDetails";
import AddMovie from "../../Pages/AddMovie";
import MyCollection from "../../Pages/MyCollection";
import UpdateMovie from "../../Pages/UpdateMovie";
import Watchlist from "../../Pages/Watchlist";
import NotFound from "../../Pages/NotFound";
import PrivateRoute from "../../Pages/Privateroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />, // ✅ BEST 404 HANDLING
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        children: [
          {
            index: true,
            element: <AllMovies />,
          },
          {
            path: ":id",
            element: (
              <PrivateRoute>
                <MovieDetails />
              </PrivateRoute>
            ),
          },
          {
            path: "add",
            element: (
              <PrivateRoute>
                <AddMovie />
              </PrivateRoute>
            ),
          },
          {
            path: "my-collection",
            element: (
              <PrivateRoute>
                <MyCollection />
              </PrivateRoute>
            ),
          },
          {
            path: "update/:id",
            element: (
              <PrivateRoute>
                <UpdateMovie />
              </PrivateRoute>
            ),
          },
          {
            path: "my-watchlist",
            element: (
              <PrivateRoute>
                <Watchlist />
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
