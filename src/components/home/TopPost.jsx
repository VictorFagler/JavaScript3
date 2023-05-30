import React from 'react'

const TopPost = ({ post }) => {
  return (
    <div>
      <div className='top-post-card'>
        <img src={post.image} />
        <div className='post-product'>
          <p>{post.product}</p>
          <p>{post.productDesc}</p>
        </div>
        <div className='post-comment'>
          <p>{post.postedBy}</p>
          <p>{post.comments}</p>
        </div>
      </div>
    </div>
  )
}

export default TopPost