import React, { useContext } from 'react'
//ROUTER
import { BrowserRouter as Outlet, Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
//PAGES
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
//COMPONENTS
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'
import Navbar from './components/navbar/Navbar'
//CONTEXT
import { AuthContext } from './context/AuthContext'

const App = () => {

    const { currentUser } = useContext(AuthContext);

    const Layout = () => {
        return (
            <div>
                <Navbar />
                <div className='row g-0'>

                    <LeftBar />

                    <div className='col-xl-7 bg-light'>
                        <Outlet />
                    </div>

                    <RightBar />

                </div>
            </div>
        );
    };

    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/login" />;
        }

        return children;
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
            ),
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/profile/:id",
                    element: <Profile />,
                }
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App