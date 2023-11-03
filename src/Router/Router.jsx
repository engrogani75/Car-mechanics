import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Acount/LoginForm/Login";
import Singup from "../Acount/Singup/Singup";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <Singup></Singup>,
        },

        {
          path: "/services/:id",
          element: <ServiceDetails></ServiceDetails>,
    
        },
      ]
    },
  ]);

  export default router