import React from 'react'
import Post from "../post/Post";

const Posts = () => {

    const posts = [
        {
            id: 1,
            name: "Kemal",
            userId: 1,
            profileImg: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 2,
            name: "Kemal",
            userId: 2,
            profileImg: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
            img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
    ];

    return (
        <div className="container">
            <div className='row'>
                {posts.map(post => (
                    <Post post={post} key={post.id} />
                ))}
            </div>
        </div>
    )
}

export default Posts