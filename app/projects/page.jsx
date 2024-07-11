'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import todoImage from '../../public/assets/photo/todo.jpg';
import shoppingImage from '../../public/assets/photo/shopping.jpg';
import portfolioImage from '../../public/assets/photo/portfolio.jpg';
import SliderButtons from '@/components/SliderButtons';


const projects = [
    {
        num: 1,
        title: 'Todo list',
        description: 'The to-do list application allows users to organize their tasks into multiple lists. Each list can contain multiple tasks which can be managed individually',
        stack: [
          {name: 'React.js'},
          {name: 'Next.js'},
          {name: 'MobX'},
          {name: 'HTML'},
          {name: 'CSS'},
          {name: 'JavaScript'}
        ],
        image: todoImage,
        live: 'https://todo-list-rakshitas-projects-0d6789cd.vercel.app/',
        github: 'https://github.com/rakshita1309/todo-list-app'
    },
    {
        num: 2,
        title: 'Shopping website',
        description: 'shopping application designed to offer a seamless user experience from product discovery to checkout',
        stack: [
            {name: 'React.js'},
            {name: 'Next.js'},
            {name: 'HTML'},
            {name: 'CSS'},
            {name: 'JavaScript'}
          ],
          image: shoppingImage,
          live: 'https://shopping-app-seven-mu.vercel.app/',
          github: 'https://github.com/rakshita1309/shopping-app'
    },
    {
        num: 3,
        title: 'portfolio website',
        description: 'A portfolio website designed to showcase my work, skills, and provide a seamless user experience from introduction to contact',
        stack: [
            {name: 'React.js'},
            {name: 'Next.js'},
            {name: 'Tailwind CSS'},
            {name: 'HTML'},
            {name: 'JavaScript'}
          ],
          image: portfolioImage,
          live: 'https://portfolio-website-drab-iota.vercel.app/',
          github: 'https://github.com/rakshita1309/portfolio-website'
        
    }
   
];


function Projects() {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        // get cuurent slide index
        const currentIndex = swiper.activeIndex;
        // update project state
        setProject((projects[currentIndex]));
    }

    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-[30px]'>
                    <div 
                    className='w-full xl:w-[50%] xl:h-[460px] flex flex-col  xl:justify-between order-2 xl:order-none'
                    >
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            <div className='text-6xl font-extrabold leading-none'>
                                {project.num}
                            </div>
                            <h2 className='text-[42px] font-bold leading-none text-white hover:text-accent '>
                                {project.title}
                            </h2>
                            <p className='text-white/60'>
                                {project.description}
                            </p>
                            <ul className='flex gap-4'>
                                {project.stack.map((item, index) => {
                                    return(
                                        <li 
                                        key={index}
                                        className='text-xl text-accent'
                                        >
                                            {item.name}
                                            {/* remove last comma */}
                                            {index !== project.stack.length -1 && ','}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className='border border-white/20 '></div>
                            <div className='flex items-center gap-4'>
                                <Link href={project.live}>
                                   <TooltipProvider delayDuration={100}>
                                      <Tooltip>
                                        <TooltipTrigger
                                        className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center  '
                                        >
                                            <BsArrowUpRight className='text-white text-2xl hover:text-accent'/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p></p>
                                        </TooltipContent>
                                      </Tooltip>
                                   </TooltipProvider>
                                </Link>

                                <Link href={project.github}>
                                   <TooltipProvider delayDuration={100}>
                                      <Tooltip>
                                        <TooltipTrigger
                                        className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center  '
                                        >
                                            <BsGithub className='text-white text-2xl hover:text-accent'/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Git Repository</p>
                                        </TooltipContent>
                                      </Tooltip>
                                   </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper 
                        spaceBetween={30} 
                        slidesPerView={1}
                        className='xl:h-[520px] mb-12'
                        onSlideChange={handleSlideChange}
                        >
                            {projects.map((item, index) => {
                                return(
                                    <SwiperSlide 
                                    key={index}
                                    className='w-full'
                                    >
                                        <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                                            {/* overlay */}
                                            <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                                            {/* image */}
                                            <div className='relative w-full h-full'>
                                                <Image className='object-cover' fill src={project.image}/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/* slider buttons */}
                            <SliderButtons 
                            containerStyle={'flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max  xl:justify-none '}
                            buttonsStyle={'bg-accent text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center'}
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;