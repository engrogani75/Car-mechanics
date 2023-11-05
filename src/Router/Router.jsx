import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Acount/LoginForm/Login";
import Singup from "../Acount/Singup/Singup";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Chekout from "../Pages/ChekOut/Chekout";
import OrderBook from "../Pages/OrderBook/OrderBook";
import PrivateRoute from "./PrivateRoute";




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
          loader: ({params}) =>fetch(`http://localhost:5000/services/${params.id}`)
    
        },

        {
          path: "/checkout/:id",
          element: <Chekout></Chekout>,
          loader: ({params}) =>fetch(`http://localhost:5000/checkout/${params.id}`)
        },

        {
          path: "/orderBook",
          element: <PrivateRoute><OrderBook></OrderBook></PrivateRoute>,
  
        }
      ]
    },
  ]);

  export default router