import React from "react";
import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllMovies from "../Pages/AllMovies";
import MovieDetails from "../Pages/MovieDetails";
import AddMovie from "../Pages/AddMovie";
import MyCollection from "../Pages/MyCollection";
import UpdateMovie from "../Pages/UpdateMovie";
import NotFound from "../Pages/NotFound";
import Root from "../Pages/Root";
import Watchlist from "../Pages/Watchlist";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },

      {
        path: "movies",
        children: [
          { index: true, Component: AllMovies },
          { path: ":id", Component: MovieDetails },
          { path: "add", Component: AddMovie },
          { path: "my-collection", Component: MyCollection },
          { path: "update/:id", Component: UpdateMovie },
          { path: "my-watchlist", Component:Watchlist},
          { path: "register", Component:Register},
          {path:"login", Component:Login}
        ],
      },
    ],
  },

  {
    path: "/movies/:id",
    Component: MovieDetails,
  },
  // {
  //   path: "/movies/add",
  //   Component: AddMovie,
  // },
  // {
  //   path: "/movies/my-collection",
  //   Component: MyCollection,
  // },
  {
    path: "/movies/update/:id",
    Component: UpdateMovie,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
