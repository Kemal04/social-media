import React from 'react'

const RightBar = () => {
    return (
        <div className='col-xl-3 border-right py-3 px-4 position-sticky h-70'>
            <div className='row'>

                <div className='col-xl-12 bg-light p-4 shadow-sm mb-4'>
                    <div className='small mb-4 text-secondary'>Suggestions For You</div>
                    <div className='d-flex align-items-center justify-content-between mb-4'>
                        <div className='d-flex align-items-center'>
                            <img src="/img/icons/user.svg" alt="user" className='img-fluid' style={{ width: "30px" }} />
                            <div className='mx-2'>Kemal Hojayew</div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <button className='btn btn-sm btn-primary rounded-0 me-2'>Follow</button>
                            <button className='btn btn-sm btn-danger rounded-0'>Dismiss</button>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <img src="/img/icons/user.svg" alt="user" className='img-fluid' style={{ width: "30px" }} />
                            <div className='mx-2'>Kemal Hojayew</div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <button className='btn btn-sm btn-primary rounded-0 me-2'>Follow</button>
                            <button className='btn btn-sm btn-danger rounded-0'>Dismiss</button>
                        </div>
                    </div>
                </div>

                <div className='col-xl-12 bg-light p-4 shadow-sm mb-4'>
                    <div className='small mb-4 text-secondary'>Last Activity</div>
                    <div className='d-flex align-items-center justify-content-between mb-4'>
                        <div className='d-flex align-items-center'>
                            <img src="/img/icons/user.svg" alt="user" className='img-fluid' style={{ width: "30px" }} />
                            <div className='mx-2 small'>
                                <span className='fw-bold'>Kemal Hojayew</span>
                                <span> changed their cover picture</span>
                            </div>
                        </div>
                        <div className='text-secondary small'>
                            1 min ago
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between mb-4'>
                        <div className='d-flex align-items-center'>
                            <img src="/img/icons/user.svg" alt="user" className='img-fluid' style={{ width: "30px" }} />
                            <div className='mx-2 small'>
                                <span className='fw-bold'>Kemal Hojayew</span>
                                <span> liked a post</span>
                            </div>
                        </div>
                        <div className='text-secondary small'>
                            1 min ago
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between mb-4'>
                        <div className='d-flex align-items-center'>
                            <img src="/img/icons/user.svg" alt="user" className='img-fluid' style={{ width: "30px" }} />
                            <div className='mx-2 small'>
                                <span className='fw-bold'>Kemal Hojayew</span>
                                <span> liked a comment</span>
                            </div>
                        </div>
                        <div className='text-secondary small'>
                            1 min ago
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <img src="/img/icons/user.svg" alt="user" className='img-fluid' style={{ width: "30px" }} />
                            <div className='mx-2 small'>
                                <span className='fw-bold'>Kemal Hojayew</span>
                                <span> posted</span>
                            </div>
                        </div>
                        <div className='text-secondary small'>
                            1 min ago
                        </div>
                    </div>
                </div>

                <div className='col-xl-12 bg-light p-4 shadow-sm'>
                    <div className='small mb-4 text-secondary'>Online Friends</div>
                    <div className='d-flex align-items-center justify-content-between mb-4'>
                        <div className='d-flex align-items-center'>
                            <div className=' position-relative'>
                                <img src="/img/icons/user.svg" alt="user" className='img-fluid' style={{ width: "30px" }} />
                                <span class="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                    <span class="visually-hidden">New alerts</span>
                                </span>
                            </div>
                            <div className='mx-2 small'>Kemal Hojayew</div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between mb-4'>
                        <div className='d-flex align-items-center'>
                            <div className=' position-relative'>
                                <img src="/img/icons/user.svg" alt="user" className='img-fluid' style={{ width: "30px" }} />
                                <span class="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                    <span class="visually-hidden">New alerts</span>
                                </span>
                            </div>
                            <div className='mx-2 small'>Kemal Hojayew</div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between mb-4'>
                        <div className='d-flex align-items-center'>
                            <div className=' position-relative'>
                                <img src="/img/icons/user.svg" alt="user" className='img-fluid' style={{ width: "30px" }} />
                                <span class="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                    <span class="visually-hidden">New alerts</span>
                                </span>
                            </div>
                            <div className='mx-2 small'>Kemal Hojayew</div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between mb-4'>
                        <div className='d-flex align-items-center'>
                            <div className=' position-relative'>
                                <img src="/img/icons/user.svg" alt="user" className='img-fluid' style={{ width: "30px" }} />
                                <span class="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                    <span class="visually-hidden">New alerts</span>
                                </span>
                            </div>
                            <div className='mx-2 small'>Kemal Hojayew</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar