import React from 'react'
//ROUTER
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom'
//PAGES
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from './pages/home/Home'
//COMPONENTS
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'
import Navbar from './components/navbar/Navbar'
//CSS
import './app.css'

const App = () => {

    return (
        <>
            <Router>
                <Routes>

                    <Route path="/" element={<WithNavbar />}>
                        <Route path='/' element={<Home />}></Route>
                    </Route>

                    <Route path='/register' element={<Register />}></Route>
                    <Route path='/login' element={<Login />}></Route>

                </Routes>
            </Router>
        </>
    )
}


const WithNavbar = () => {
    return (
        <div className='theme-dark'>
            <Navbar />
            <div className='row g-0'>
                <LeftBar />

                <Outlet />

                <RightBar />
            </div>
        </div>
    );
}

export default App