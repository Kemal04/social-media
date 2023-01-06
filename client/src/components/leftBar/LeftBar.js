import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import './leftBar.css'
import { Link } from 'react-router-dom'

const LeftBar = () => {

    const { currentUser } = useContext(AuthContext);

    return (
        <div className='col-xl-2 border-right pt-4 px-3 shadow-sm position-sticky h-70'>
            <div className='row mx-3'>
                <div className='col-lg-12 mb-4'>
                    <Link to={`/profile/${currentUser.id}`} className='d-flex align-items-center text-decoration-none text-dark'>
                        <img src={currentUser.img} alt="user" className='img-fluid' style={{ width: "30px" }} />
                        <div className='mx-2'>{currentUser.name}</div>
                    </Link>
                </div>
                <div className='col-lg-12 mb-4'>
                    <div className='d-flex align-items-center'>
                        <img src="/img/icons/friend.png" alt="user" className='img-fluid' style={{ width: "30px" }} />
                        <div className='mx-2'>Friends</div>
                    </div>
                </div>
                <div className='col-lg-12 mb-4'>
                    <div className='d-flex align-items-center'>
                        <img src="/img/icons/group.png" alt="user" className='img-fluid' style={{ width: "30px" }} />
                        <div className='mx-2'>Groups</div>
                    </div>
                </div>
                <div className='col-lg-12 mb-4'>
                    <div className='d-flex align-items-center'>
                        <img src="/img/icons/online-shopping.png" alt="user" className='img-fluid' style={{ width: "30px" }} />
                        <div className='mx-2'>Marketplace</div>
                    </div>
                </div>
                <div className='col-lg-12 mb-4'>
                    <div className='d-flex align-items-center'>
                        <img src="/img/icons/watching-tv.png" alt="user" className='img-fluid' style={{ width: "30px" }} />
                        <div className='mx-2'>Watch</div>
                    </div>
                </div>
                <div className='col-lg-12 mb-4'>
                    <div className='d-flex align-items-center'>
                        <img src="/img/icons/alarm-clock.png" alt="user" className='img-fluid' style={{ width: "30px" }} />
                        <div className='mx-2'>Memeories</div>
                    </div>
                </div>
                <hr />
                <div className='small mb-4'>
                    Your shortcuts
                </div>
                <div className='col-lg-12 mb-4'>
                    <div className='d-flex align-items-center'>
                        <img src="/img/icons/calendar.png" alt="user" className='img-fluid' style={{ width: "30px" }} />
                        <div className='mx-2'>Events</div>
                    </div>
                </div>
                <div className='col-lg-12 mb-4'>
                    <div className='d-flex align-items-center'>
                        <img src="/img/icons/joystick.png" alt="user" className='img-fluid' style={{ width: "30px" }} />
                        <div className='mx-2'>Gaming</div>
                    </div>
                </div>
                <div className='col-lg-12 mb-4'>
                    <div className='d-flex align-items-center'>
                        <img src="/img/icons/photo.png" alt="user" className='img-fluid' style={{ width: "30px" }} />
                        <div className='mx-2'>Gallery</div>
                    </div>
                </div>
                <div className='col-lg-12 mb-4'>
                    <div className='d-flex align-items-center'>
                        <img src="/img/icons/video.png" alt="user" className='img-fluid' style={{ width: "30px" }} />
                        <div className='mx-2'>Videos</div>
                    </div>
                </div>
                <div className='col-lg-12 mb-4'>
                    <div className='d-flex align-items-center'>
                        <img src="/img/icons/message.png" alt="user" className='img-fluid' style={{ width: "30px" }} />
                        <div className='mx-2'>Messages</div>
                    </div>
                </div>
                <hr />
                <div className='small mb-4'>
                    Your shortcuts
                </div>
                <div className='col-lg-12 mb-4'>
                    <div className='d-flex align-items-center'>
                        <img src="/img/icons/calendar.png" alt="user" className='img-fluid' style={{ width: "30px" }} />
                        <div className='mx-2'>Events</div>
                    </div>
                </div>
                <div className='col-lg-12 mb-4'>
                    <div className='d-flex align-items-center'>
                        <img src="/img/icons/joystick.png" alt="user" className='img-fluid' style={{ width: "30px" }} />
                        <div className='mx-2'>Gaming</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar