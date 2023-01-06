import React from 'react'
import Posts from '../../components/posts/Posts'
import Stories from '../../components/stories/Stories'

const Home = () => {
    return (
        <div className='my-5'>
            <Stories />
            <Posts />
        </div>
    )
}

export default Home