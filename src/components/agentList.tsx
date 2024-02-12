import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { MoreVertical } from 'lucide-react';

const AgentList = () => {
    const profiles = [
        {
            name: "Pratap ka chora",
            position: "Top Agent",
            images: "/profile1.jpeg"
        },
        {
            name: "Ashish Sharma",
            position: "Top Agent",
            images: "/profile2.jpeg"
        },
        {
            name: "Deepanshu Chabra",
            position: "Top Agent",
            images: "/profile3.jpg"
        },
        {
            name: "Shaurya Dahiya",
            position: "Top Agent",
            images: "/profile4.jpeg",
        },
        {
            name: "Aryan Dalal",
            position: "Top Agent",
            images: "/profile4.jpeg",
        },
    ];

    return (
        <div className='flex-row'>
            <div className='mt-4 rounded-lg bg-purple-100'>
                <div className='flex flex-wrap justify-between'>
                    <p className='p-4 text-xl text-center mt-2 font-medium font-weight-200'>Top Agent</p>
                    <Button className='align-right bg-blue-600 text-white h-10 rounded-lg m-4'>View All</Button>
                </div>
                <div className='pl-4 pr-4 pb-4'>
                    {profiles.map((profile, index) => (
                        <div className='flex justify-between' key={index}>
                            <div className='flex gap-4 mt-4'> 
                                <Image src={profile.images} alt='profile' width="50" height="20" className="gap-4 rounded-full"/>
                                <div className='flex-col'>
                                    <p>{profile.name}</p>
                                    <p>{profile.position}</p>
                                </div>
                            </div>
                            <div>
                                <MoreVertical />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AgentList;
