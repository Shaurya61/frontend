'use client'
import React from 'react'
import Navbar from './navbar'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Bell, Image } from 'lucide-react'
const Header = () => {
  return (
    <div className="flex items-center p-4">
        <Navbar />
        <Input placeholder="Search Property,Customer,etc" className="md:flex ml-auto mr-4 w-80 bg-gray-100 border-none outline-none borderless" />
        <Button variant="ghost" className="bg-gray-100 rounded-lg transition"> Search </Button>
        <Bell className="ml-auto mr-2" size={38} />
        <div className="flex justify-center">
          <Image size={40}/>
          <div className="flex flex-col text-xs">
            <span className="text-sm">Hawkins Maru</span>
            <span className="">Company Manager</span>
          </div>
        </div> 
    </div>
  )
}

export default Header;