import React from 'react'
import content from '../../data/content.json'

const Footer = () => {
  return (
    <div className='bg-black'>
      <div></div>
      <p className='text-lg text-white text-center content-center'>{content?.Footer?.copyright}</p>
    </div>
  )
}

export default Footer
