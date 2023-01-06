import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';

const Stories = () => {

    const { currentUser } = useContext(AuthContext);

    const stories = [
        {
            id: 1,
            name: "Yunus",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 2,
            name: "Mergen",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 3,
            name: "Kemal",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 4,
            name: "Kerimberdi",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
    ]

    return (
        <div className='container px-5'>
            <div className='row justify-content-between'>
                <div className='col-xl-2'>
                    <div class="card text-bg-dark border-0">
                        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img" alt={currentUser.name} />
                        <div class="card-img-overlay" style={{ top: "65%" }}>
                            <h5 class="card-title rounded-circle bg-primary w-25 text-center pb-1 fw-bold">+</h5>
                            <h5 class="card-title">{currentUser.name}</h5>
                        </div>
                    </div>
                </div>
                {
                    stories.map((story) => (
                        <div className='col-xl-2'>
                            <div class="card text-bg-dark border-0">
                                <img src={story.img} class="card-img" alt={story.name} />
                                <div class="card-img-overlay" style={{ top: "70%" }}>
                                    <h5 class="card-title">{story.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Stories