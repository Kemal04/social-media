import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (

        <div className='login-body'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-8'>
                        <div className='row g-0 align-items-center border-0 rounded bg-white'>
                            <div className='col-xl-6'>
                                <div className='p-5'>
                                    <div className='h2 mb-5'>Register</div>
                                    <form>
                                        <div className="mb-4">
                                            <input type="text" className="form-control rounded-0" placeholder='Username' />
                                        </div>
                                        <div className="mb-4">
                                            <input type="text" className="form-control rounded-0" placeholder='Name' />
                                        </div>
                                        <div className="mb-4">
                                            <input type="password" className="form-control rounded-0" placeholder='Password' />
                                        </div>
                                        <div className="mb-4">
                                            <input type="password" className="form-control rounded-0" placeholder='Confirim Password' />
                                        </div>
                                        <div className='d-grid'>
                                            <div className="btn btn-sm btn-outline-dark rounded-0 px-5 fw-bold">Register</div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='col-xl-6'>
                                <div className='bg-login p-5 text-white'>
                                    <div className='display-1 fw-bold'>Hello World.</div>
                                    <p className='small my-3'>
                                        Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın sektöründe kullanılan taklit yazı bloğu olarak tanımlanır. Lipsum, oluşturulacak şablon ve taslaklarda içerik yerine geçerek yazı bloğunu doldurmak için kullanılır
                                    </p>
                                    <div className='small my-4'> Do you have an account ? </div>
                                    <Link to="/login" className="btn btn-outline-light rounded-0 px-5 fw-bold">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register