import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-6'>
                <div className='w-full justify-center mb-4'>
                    {featuredImage ?
                        (<img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />) :
                        (<div className='bg-gray-200 rounded-xl w-full h-40 flex items-center justify-center'>
                            <span className='text-gray-400'>No Image</span>
                        </div>)
                    }
                </div>
                <h2 className='text-xl font-bold'>
                    {title}
                </h2>
            </div>
        </Link>
    )
}

export default PostCard
