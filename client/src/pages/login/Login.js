import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { AuthContext } from '../../context/AuthContext'

const Login = () => {

    const { login } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleLogin = () => {
        login();
        navigate('/')
    };

    return (
        <div className='login-body'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-8'>
                        <div className='row g-0 align-items-center border-0 rounded bg-white'>
                            <div className='col-xl-6'>
                                <div className='bg-login p-5 text-white'>
                                    <div className='display-1 fw-bold'>Hello World.</div>
                                    <p className='small my-3'>
                                        Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın sektöründe kullanılan taklit yazı bloğu olarak tanımlanır. Lipsum, oluşturulacak şablon ve taslaklarda içerik yerine geçerek yazı bloğunu doldurmak için kullanılır
                                    </p>
                                    <div className='small my-4'> Don't you have an account ? </div>
                                    <Link to="/register" className="btn btn-outline-light rounded-0 px-5 fw-bold">Register</Link>
                                </div>
                            </div>
                            <div className='col-xl-6'>
                                <div className='p-5'>
                                    <div className='h2 mb-5'>Login</div>
                                    <form>
                                        <div className="mb-4">
                                            <input type="text" className="form-control rounded-0" placeholder='Username' />
                                        </div>
                                        <div className="mb-4">
                                            <input type="password" className="form-control rounded-0" placeholder='Password' />
                                        </div>
                                        <div className='d-grid'>
                                            <div className="btn btn-sm btn-outline-dark rounded-0 px-5 fw-bold" onClick={handleLogin}>Login</div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login