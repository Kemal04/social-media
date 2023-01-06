import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Comments from "../comments/Comments";

const Post = ({ post }) => {

    const [commentOpen, setCommentOpen] = useState(false);

    //TEMPORARY
    const liked = 0;

    return (
        <div className="container px-5 mt-5">
            <div className="row">
                <div className='card border-0 rounded-2 shadow p-3'>

                    <div className="col-xl-12">
                        <div className="row justify-content-between align-items-center">
                            <div className='col-xl-6 d-flex align-items-center'>
                                <img src={post.profileImg} alt="card" className='img-fluid' style={{ width: '60px', height: "60px", borderRadius: "50%", objectFit: "cover" }} />
                                <div className="d-flex flex-column ms-3">
                                    <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
                                        <span className="fw-bold h5">{post.name}</span>
                                    </Link>
                                    <span className="small">1 min ago</span>
                                </div>
                            </div>
                            <div className='col-xl-6 text-end'>
                                * * *
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-12'>
                        <div className="mt-3">
                            <p>{post.desc}</p>
                            <img src={post.img} className="w-100" style={{ maxHeight: "500px", objectFit: "cover" }} />
                        </div>
                    </div>

                    <div className='col-xl-12 mt-3'>
                        <div className="d-flex align-items-center">
                            <div className="me-3">
                                {liked
                                    ?
                                    <img src='/img/icons/heart-black.png' className='img-fluid me-2' style={{ width: "20px" }} />
                                    :
                                    <img src='/img/icons/heart-white.png' className='img-fluid me-2' style={{ width: "20px" }} />
                                }
                                12 Likes
                            </div>
                            <div className="mx-3" onClick={() => setCommentOpen(!commentOpen)}>
                                <img src='/img/icons/comment.png' className='img-fluid me-2' style={{ width: "20px" }} />
                                12 Comments
                            </div>
                            <div className="mx-3">
                                <img src='/img/icons/share.png' className='img-fluid me-2' style={{ width: "20px" }} />
                                Share
                            </div>
                        </div>
                        {commentOpen && <Comments />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post