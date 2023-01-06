import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';

const Comments = () => {

    const { currentUser } = useContext(AuthContext);

    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
            name: "John Doe",
            userId: 1,
            profileImg: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
            name: "Jane Doe",
            userId: 2,
            profileImg:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
    ];
    return (
        <div className="row mt-4">
            <div className="col-xl-12">
                <div className='row justify-content-between align-items-center'>
                    <div className='col-xl-1'>
                        <img src={currentUser.img} style={{ width: "40px" }} alt={currentUser.name}/>
                    </div>
                    <div className='col-xl-10'>
                        <input className='form-control py-1 rounded-0' type="text" placeholder="Write a comment" />
                    </div>
                    <div className='col-xl-1 text-end'>
                        <button className='btn btn-primary rounded-0'>Send</button>
                    </div>
                </div>
            </div>
            {comments.map((comment) => (
                <div className="row align-items-baseline">
                    <div className='col-xl-1'>
                        <img src={comment.profileImg} alt="Comment" className="img-fluid rounded-circle mt-4" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                    </div>
                    <div className='col-xl-11'>
                        <div className='row align-items-center'>
                            <div className='col-xl-10'>
                                <span className='fw-bold'>{comment.name}</span>
                                <p>{comment.desc}</p>
                            </div>
                            <div className='col-xl-2 text-end'>
                                <span className='small text-secondary'>1 hour ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Comments