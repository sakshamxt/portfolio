import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project1.png';
import project3 from '../assets/project1.png';

const Projects = () => {


    const projects = [
        {
            title: 'SustainED',
            description: 'An AI platform making SDG education interactive and rewarding.',
            startDate: 'Sep 2025',
            endDate: 'Oct 2025',
            imageUrl: project1,
            liveLink: 'https://github.com/sakshamxt/sustained-web',
            repoLink: 'https://github.com/sakshamxt/sustained-web',
        },
        {
            title: 'SustainED',
            description: 'An AI platform making SDG education interactive and rewarding.',
            startDate: 'Sep 2025',
            endDate: 'Oct 2025',
            imageUrl: project1,
            liveLink: 'https://github.com/sakshamxt/sustained-web',
            repoLink: 'https://github.com/sakshamxt/sustained-web',
        },
        {
            title: 'SustainED',
            description: 'An AI platform making SDG education interactive and rewarding.',
            startDate: 'Sep 2025',
            endDate: 'Oct 2025',
            imageUrl: project1,
            liveLink: 'https://github.com/sakshamxt/sustained-web',
            repoLink: 'https://github.com/sakshamxt/sustained-web',
        },
    ];

  return (
    <div className='w-full flex flex-col items-start pt-16'>
        <h1 className='text-[#eeeeee] text-sm tracking-[0.02em] cursor-default'>Selected Projects</h1>
        <h2 className='text-[#bbbbbb] text-sm mt-1 tracking-[0.01em] cursor-default'>Cool Projects I&apos;ve Worked On.</h2>
        <div className='w-full flex flex-col gap-3 mt-3 '>
            {
                projects.map((project, index) => (
                    <a key={index} href={project.liveLink} target='_blank' rel='noreferrer'>
                        <div className='h-[20vw] md:h-[12vw] lg:h-[7vw] flex items-center justify-between px-2 pl-3 gap-4 md:gap-0 py-2 rounded-lg border-[1px] border-[#bbbbbb] border-opacity-15 hover:border-opacity-30 cursor-pointer transition-all duration-100'>
                            <div className='flex flex-col items-start'>
                                <h1 className='text-[#eeeeee] text-sm'>{project.title}</h1>
                                <h2 className='text-[#bbbbbb] text-xs'>{project.description}</h2>
                                <h2 className='text-[#bbbbbb] text-xs font-thin'>{project.startDate} - {project.endDate}</h2>
                            </div>
                            <img src={project.imageUrl} alt={project.title} className='h-full rounded-md' />
                        </div>
                    </a>
                ))
            }
        </div>
    </div>
  )
}

export default Projects
