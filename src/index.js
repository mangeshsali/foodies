import React, { Children, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import About from "./Component/About";
import Head from "./Component/Head";
import Contact from "./Component/Contact";
import Body from "./Component/Body";
import Cart from "./Component/Cart";
import LogIn from "./Component/LogIn";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPg } from "./Component/ErrorPg";
import ResturantDetails from "./Component/ResturantDetails";
import Loader from "./Component/Loader";
import Profile from "./Component/Profile";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPg />,
    children: [
      {
        path: "/",
        element: <LogIn />,
      },
      {
        path: "/body",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:id",
        element: <ResturantDetails />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
