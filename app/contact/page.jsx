'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, } from 'react-icons/fa';
import { Description } from '@radix-ui/react-dialog';

const info = [
    {
        icon: <FaEnvelope/>,
        title: 'Email',
        description: 'rakshitamohan03@gmail.com'
    },
    {
        icon: <FaPhoneAlt/>,
        title: 'Phone',
        description: 9027185263
    },
    {
        icon: <FaMapMarkedAlt/>,
        title: 'Address',
        description: 'Delhi'
    },
]

function Contact () {
    return(
        <div className='py-6'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-[30px]'>
                    <div className='xl:h-[54%] order-2 xl:order-none'>
                        <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl '>
                            <h3 className='text-4xl text-accent '>
                                let's work together
                            </h3>
                            <p className='text-white/60'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, quidem.
                            </p>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <Input type='name' placeholder='Name'></Input>
                                <Input type='email' placeholder='Email address'></Input>
                                <Input type='phone' placeholder='Phone number'></Input>
                            </div>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue></SelectValue>
                                </SelectTrigger>
                            </Select>
                        </form>
                    </div>
                    {/* <div 
                    className='flex items-center xl:justify-end order-1 xl:order-none mb-3 xl:mb-0'
                    >
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Contact;