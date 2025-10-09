import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-center pt-10 py-6'>
        <h1 className='text-[#eeeeee] tracking-[0.01em] text-xs'>&copy; {new Date().getFullYear()} by Saksham Tyagi. All rights reserved.</h1>
    </div>
  )
}

export default Footer
