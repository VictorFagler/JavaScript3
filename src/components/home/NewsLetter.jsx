import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsletter-container'>
      <div className='input-container'>
        <div className='input-controls'>
          <input type="text" placeholder='Enter your mail here' />
          <button className='button-subscribe btn-sm'>subscribe to newsletter</button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter