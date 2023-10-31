import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import CheckOut from "../Page/CheckOut/CheckOut";
import Booking from "../Page/Booking/Booking";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'checkout/:id',
          element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader:({params})=>fetch(`https://car-doctor-server-six-sooty.vercel.app/services/${params.id}`)
        },
        {
          path:'bookings',
          element:<PrivateRoute><Booking></Booking></PrivateRoute>
        }
      ]
    },
  ]);
  export default router