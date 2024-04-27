import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";

const Router = createBrowserRouter([
    {
        path: '/',
        element : <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: async()=> await fetch('http://localhost:5000/allTouristsSpot')
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/addTouristsSpot',
                element: <AddTouristsSpot/>
            },
            {
                path: '/allTouristsSpot',
                element: <AllTouristsSpot/>,
                loader: async()=> await fetch('http://localhost:5000/allTouristsSpot')
            }
        ]
    }
])

export default Router;