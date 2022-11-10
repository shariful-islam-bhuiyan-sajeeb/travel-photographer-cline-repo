import { createBrowserRouter } from "react-router-dom";
import Aboute from "../Blog/Aboute";
import Blog from "../Blog/Blog";
import DetailsCard from "../Home/DetailsCard/DetailsCard";
import Home from "../Home/Home";
import MyPhoto from "../Home/MyPhoto/MyPhoto";
import Main from "../Layout/Main";
import PackageReview from "../PackageReview/PackageReview";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <PrivateRoutes><Home></Home></PrivateRoutes>,
                loader: () => fetch('https://assignment-11-server-projects.vercel.app/tourServices')
            },
            {
                path:'/MyPhoto',
                element: <MyPhoto></MyPhoto>,
                loader: () => fetch('https://assignment-11-server-projects.vercel.app/tourAllCard')
            },
            {
               path:'/login',
               element:<Login></Login> 
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/detailsCard/:id',
                element:<DetailsCard></DetailsCard>,
                loader: ({ params }) => fetch(`https://assignment-11-server-projects.vercel.app/tourServices/${params.id}`)
            },
            {
                path:'/packageReview',
                element:<PackageReview></PackageReview>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/about',
                element:<Aboute></Aboute>
            },
           
        ]
    }
]);

export default router;
