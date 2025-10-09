import React from 'react';
import { RxArrowTopRight } from 'react-icons/rx';

const Contact = () => {

    const contacts = [
        {
            label: 'Email',
            link: 'mailto:saksham47t@gmail.com',
            displayLink: 'saksham47t@gmail.com'
        },
        {
            label: 'Phone',
            link: 'tel:+919034256888',
            displayLink: '+91 9034256888'
        },
        {
            label: 'GitHub',
            link: 'https://github.com/sakshamxt',
            displayLink: 'sakshamxt'
        },
        {
            label: 'Instagram',
            link: 'https://instagram.com/tyagiisaksham',
            displayLink: 'tyagiisaksham'
        },
        {
            label: 'Twitter',
            link: 'https://twitter.com/tyagiisaksham',
            displayLink: 'tyagiisaksham'
        },
    ];

  return (
    <div className='w-full flex flex-col items-start pt-16 pb-20'>
        <h1 className='text-[#eeeeee] text-sm tracking-[0.02em] cursor-default'>Contact</h1>
        <h2 className='text-[#bbbbbb] text-sm mt-1 tracking-[0.01em] cursor-default'>Let&apos;s Build Your Next Project</h2>
        <div className='flex flex-col w-full mt-3 gap-3'>
            {
                contacts.map((contact, index) => (
                    <div key={index} className='flex items-center justify-start'>
                        <div className='w-[28vw] md:w-[10vw]'>
                            <h1 className='text-[#888888] text-sm tracking-[0.01em]'>{contact.label}</h1>
                        </div>
                        <div className='flex items-start text-[#eeeeee]'>
                            <a className='text-[#eeeeee] tracking-[0.01em] text-sm border-b-[1px] border-transparent hover:border-b-[1px] hover:border-[#eeeeee] transition-all duration-100' href={contact.link}>{contact.displayLink}</a>
                            <RxArrowTopRight/>
                        </div>
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default Contact
