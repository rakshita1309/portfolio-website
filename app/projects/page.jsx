'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import { CiLink } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from 'next/link';
import { Description } from '@radix-ui/react-dialog';

const projects = [
    {
        num: 1,
        title: 'Todo list',
        description: 'The to-do list application allows users to organize their tasks into multiple lists. Each list can contain multiple tasks which can be managed individually',
        href: 'https://todo-list-rakshitas-projects-0d6789cd.vercel.app/',
    },
    {
        num: 2,
        title: 'Shopping website',
        description: 'shopping application designed to offer a seamless user experience from product discovery to checkout',
        href: 'https://shopping-app-seven-mu.vercel.app/'
    },
    {
        num: 3,
        title: 'portfolio website',
        description: 'A portfolio website designed to showcase my work, skills, and provide a seamless user experience from introduction to contact',
        href: 'https://portfolio-website-drab-iota.vercel.app/'
    }
   
];



function Projects() {
    return (
        <section
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 px-48 md:py-0'
        >
            <div className='mx-auto grid grid-cols-2 md:grid-cols-2 gap-[60px]'>
                {projects.map((project, index) => {
                    return <div
                        key={index}
                        className='flex-1 flex flex-col justify-center gap-6'
                    >
                        <div className='text-xl font-extrabold hover:text-accent'>
                            {project.num}
                        </div>
                        {/* <Link
                            href={project.href}
                            className='w-[70px] h-[70px] rounded-full bg-white hover:bg-accent flex justify-center items-center hover:-rotate-45'
                        >
                            <BsArrowDownRight className='text-primary text-3xl' />
                        </Link> */}
                        <h2 className='text-[28px] md:text-[42px] font-bold leading-none text-white hover:text-accent'>
                            {project.title}
                        </h2>
                        <p>{project.description}</p>
                        <div className='flex flex-row gap-8 items-center'>
                            Vist live project  <Link href={project.href} target='_blank'><FaExternalLinkAlt /></Link>
                        </div>
                        <div className='border-b border-white/20 w-full'></div>
                    </div>

                })}
            </div>
        </section>
    )
}

export default Projects;