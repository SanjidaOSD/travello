import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import SpotDetails from "../pages/SpotDetails/SpotDetails";
import MyList from "../pages/MyList/MyList";
import UpdateSpot from "../pages/UpdateSpot/UpdateSpot";
import CountryAllSpots from "../pages/CountryAllSpots/CountryAllSpots";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";

const Router = createBrowserRouter([
    {
        path: '/',
        element : <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
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
                element: <ProtectedRoute><AddTouristsSpot/></ProtectedRoute>
            },
            {
                path: '/allTouristsSpot',
                element: <AllTouristsSpot/>,
            },
            {
                path: '/spotDetails/:id',
                element: <ProtectedRoute><SpotDetails/></ProtectedRoute>,
                loader: async({params})=> await fetch(`http://localhost:5000/allTouristsSpot/${params.id}`)
            },
            {
                path: '/myList/email/:email',
                element: <ProtectedRoute><MyList/></ProtectedRoute>
            },
            {
                path: '/updateSpot/:id',
                element: <ProtectedRoute><UpdateSpot/></ProtectedRoute>,
                loader: async({params})=> await fetch(`http://localhost:5000/allTouristsSpot/${params.id}`)
            },
            {
                path: '/country/:country',
                element: <CountryAllSpots/>
            }
        ]
    }
])

export default Router;