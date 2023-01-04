import React from 'react'
import './leftBar.css'

const LeftBar = () => {
    return (
        <div className='col-xl-2 border-right pt-4 px-3 shadow-sm bg-light position-sticky h-70'>
            <div className='row mx-3'>
                <div className='col-lg-12 mb-4'>
                    <div className='d-flex align-items-center'>
                        <img src="/img/icons/user.svg" alt="user" className='img-fluid' style={{ width: "30px" }} />
                        <div className='mx-2'>Kemal Hojayew</div>
                    </div>
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