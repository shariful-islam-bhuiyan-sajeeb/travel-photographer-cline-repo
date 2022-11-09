import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import MyPhoto from "../Home/MyPhoto/MyPhoto";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000/tourServices')
            },
            {
                path:'/MyPhoto',
                element: <MyPhoto></MyPhoto>,
                loader: () => fetch('http://localhost:5000/tourAllCard')
            },
            {
               path:'/login',
               element:<Login></Login> 
            },
            {
                path:'/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;
