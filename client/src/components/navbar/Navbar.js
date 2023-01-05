import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope, faHome, faList, faMoon, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light border-bottom shadow-sm position-sticky top-0">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand text-primary fw-bold">Social Media</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-2">
                                <Link to="/" className="nav-link active" aria-current="page">
                                    <FontAwesomeIcon icon={faHome} />
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <button className="nav-link border-0 active" style={{ backgroundColor: "transparent" }}>
                                    <FontAwesomeIcon icon={faMoon} />
                                </button>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="/" className="nav-link active">
                                    <FontAwesomeIcon icon={faList} />
                                </Link>
                            </li>
                        </ul>
                        <form className="d-grid me-auto" role="search">
                            <input className="form-control me-5 rounded-0 ms-3 py-1" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <div>
                            <ul className="navbar-nav">
                                <li className="nav-item mx-2">
                                    <Link to="/" className="nav-link active" aria-current="page">
                                        <FontAwesomeIcon icon={faUser} />
                                    </Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <button className="nav-link border-0 active" style={{ backgroundColor: "transparent" }}>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </button>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link to="/" className="nav-link active">
                                        <FontAwesomeIcon icon={faBell} />
                                    </Link>
                                </li>
                                <div className='d-flex align-items-center ms-3'>
                                    <img src="/img/icons/user.svg" alt="user" className='img-fluid' style={{ width: "30px" }} />
                                    <div className='mx-2'>Kemal Hojayew</div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar