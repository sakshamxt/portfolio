import React from 'react';
import logo from '../assets/logo.jpg';

const Header = () => {
  return (
    <div className='w-full h-[20vh] flex items-center gap-4 pt-20 pb-20'>
        <div className=''>
            <img src={logo} alt='logo' className='w-[24vw] md:w-[12vw] lg:w-[6vw] h-auto rounded-full' />
        </div>
        <div className='flex flex-col items-start gap-1'>
            <h1 className='text-[#eeeeee] font-medium text-xl tracking-[0.02em]'>Saksham Tyagi</h1>
            <h2 className='text-[#bbbbbb] text-sm tracking-[0.02em]'>Full Stack Web Developer, CSE Student</h2>
            <a href='https://github.com/sakshamxt' target='blank' className='text-xs text-[#bbbbbb] bg-[#383838] px-3 py-1 rounded-xl'>github.com/sakshamxt</a>
        </div>
    </div>
  )
}

export default Header
