import React from 'react'
import Posts from "../../components/posts/Posts"

const Profile = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-xl-12'>
                    <img src='https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' className='w-100' style={{ height: "300px", objectFit: "cover" }} />
                </div>
                <div className='col-xl-12 d-flex justify-content-center' style={{ marginTop: "-80px", marginBottom: "-80px", zIndex: "1" }}>
                    <img src='https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' alt='' className='img-fluid rounded-circle' style={{ width: "200px", height: "200px", objectFit: "cover" }} />
                </div>
                <div className='col-xl-12'>
                    <div className='row justify-content-center '>
                        <div className='col-xl-10 card border-0 rounded-4 bg-white shadow p-4 pt-5'>
                            <div className='row'>
                                <div className='col-xl-12 h4 pt-5 text-center'>
                                    Kemal Hojayew
                                </div>
                                <div className='col-xl-12 my-3'>
                                    <div className='row justify-content-between align-items-center'>
                                        <div className='col-xl-4'>
                                            <div className='row justify-content-start'>
                                                <div className='col-xl-auto'>
                                                    <img src='/img/icons/facebook.svg' alt='Facebook' style={{ width: "30px" }} />
                                                </div>
                                                <div className='col-xl-auto'>
                                                    <img src='/img/icons/ins.svg' alt='Instagram' style={{ width: "30px" }} />
                                                </div>
                                                <div className='col-xl-auto'>
                                                    <img src='/img/icons/tweeter.svg' alt='Tweeter' style={{ width: "30px" }} />
                                                </div>
                                                <div className='col-xl-auto'>
                                                    <img src='/img/icons/pint.svg' alt='Pinterest' style={{ width: "30px" }} />
                                                </div>
                                                <div className='col-xl-auto'>
                                                    <img src='/img/icons/whatsap.svg' alt='Whatsap' style={{ width: "30px" }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-xl-4 text-center'>
                                            <div className='row justify-content-between align-items-center'>
                                                <div className='col-xl-6 d-flex aling-items-center'>
                                                    <img src='/img/icons/loc.svg' alt='Location' style={{ width: "18px" }} />
                                                    <div className='small ms-2'>Turkmenistan</div>
                                                </div>
                                                <div className='col-xl-6 d-flex aling-items-center justify-content-end'>
                                                    <img src='/img/icons/lang.svg' alt='Languages' style={{ width: "20px" }} />
                                                    <div className='small ms-2'>kemal.com</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-xl-4'>
                                            <div className='row justify-content-end align-items-center text-end'>
                                                <div className='col-xl-2'>
                                                    <img src='/img/icons/mail.svg' alt='Mail' className='mt-2' style={{ width: "18px" }} />
                                                </div>
                                                <div className='col-xl-2 d-flex flex-column fw-bold text-start' style={{ lineHeight: "7px" }}>
                                                    <div>.</div>
                                                    <div>.</div>
                                                    <div>.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-12 mt-3 text-center'>
                                    <button className='btn btn-primary px-5 btn-sm'>Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-12'>
                    <Posts />
                </div>
            </div>
        </div>
    )
}

export default Profile