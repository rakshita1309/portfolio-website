'use client';

import { Description } from '@radix-ui/react-dialog';
import { 
    FaHtml5, 
    FaCss3, 
    FaJs, 
    FaReact, 
    FaNodeJs
} from 'react-icons/fa';

import { SiTailwindcss}  from 'react-icons/si';

import { 
    Tabs, 
    TabsContent,
    TabsList, 
    TabsTrigger 
} from '@/components/ui/tabs';

import { 
    Tooltip,
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger 
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area'

const about = {
    title: 'About me',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, inventore.',
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Rakshita'
        },
        {
            fieldName: 'Email',
            fieldValue: 'rakshita.code.in@gmail.com'
        },
        {
            fieldName: 'Phone',
            fieldValue: 9027185263
        },
        {
            fieldName: 'freelance',
            fieldValue: 'Available'
        },
    ]
};

const skills = {
    title: 'My skills',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque tempora quaerat quod asperiores nemo minus!',
    skillList:  [
        {
            icon: '',
            name: 'JavaScript'
        },
        {
            icon: <FaReact />,
            name: 'React.js'
        },
        {
            icon: '',
            name: 'Next.js'
        },
        {
            icon: <FaNodeJs />,
            name: 'Node.js'
        },
        {
            icon: '',
            name: 'MongoDB'
        },
        {
            icon: '',
            name: 'Express.js'
        },
        {
            icon: <SiTailwindcss />,
            name: 'Taiwind CSS'
        },
        {
            icon: <FaHtml5 />,
            name: 'HTML'
        }, {
            icon: <FaCss3 />,
            name: 'CSS'
        },
    ]

}

const experience = {
    icon: '',
    title: 'My experience',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque tempora quaerat quod asperiores nemo minus!',
    item:[
        {
            company: 'iTech Mission pvt ltd',
            position: 'HR',
            duration: 'January 2023 - April 2023'
        }
    ]
}

const education = {
    icon:'',
    title: 'My education',
    description: 'bsjnskdjcnkdshnvoihsfvopwajopwihvfih',
    items: [
        {
            institution: 'Udemy',
            degree: 'Full stack web development bootcamp',
            duration: '2023'
        },
        {
            institution: 'Daulat Ram College, Delhi University',
            degree: 'B.com',
            duration: '2018-2021'
        },
        {
            institution: 'MIET Public school',
            degree: 'Higher Secondary',
            duration: '2016-2018'
        },
        {
            institution: 'Shanti niketan vidhya peeth',
            degree: 'Secondary school',
            duration: '2015-2016'
        },
    ]
}



function Resume () {
    return(
        <div
          className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div
            className='container mx-auto'
            >
                <Tabs 
                defaultValue='skills'
                className='flex flex-col xl:flex-row gap-[60px]'
                >
                    <TabsList
                    className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0'
                    >
                        <TabsTrigger value='skills'>Skills</TabsTrigger>
                        <TabsTrigger value='education'>Education</TabsTrigger>
                        <TabsTrigger value='about'>About me</TabsTrigger>
                    </TabsList>
                    <div
                className='min-h-[70vh] w-full'
                >
                 <TabsContent 
                 value='skills'
                 className='w-full h-full'
                 >
                    <div className='flex flex-col gap-[30px]'>
                      <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                        <h3 className='text-4xl font-bold'>
                            {skills.title}
                        </h3>
                        <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                            {skills.description}
                        </p>
                      </div>
                      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]'>
                        {skills.skillList.map((skill, index) => {
                            return(
                                <li key={index}>{skill.name}</li>
                            )
                        })}
                      </ul>
                    </div>
                 </TabsContent>
                 <TabsContent value='education' className='w-full'>
                    <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                        <h3 className='text-4xl font-bold'>
                            {education.title}
                        </h3>
                        <div className='h-[400px]'>
                            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                {
                                    education.items.map((item, index) => {
                                        return(
                                            <li 
                                            key={index}
                                            className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center gap-1 '
                                            >
                                                <span className='text-accent'>
                                                   {item.duration}
                                                </span>
                                                <h3 className=''>
                                                   {item.degree}
                                                </h3>
                                                <div className='flex items-start gap-3'>
                                                   <span className='w-[6px] h-[6px] rounded-full bg-accent my-[12px]' ></span>
                                                   <p className='text-white/60'>{item.institution}</p>
                                                   
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                 </TabsContent>
                 <TabsContent value='about'>
                    {about.description}
                 </TabsContent>
                </div>
                </Tabs>
            </div>
        </div>
    )
}

export default Resume;