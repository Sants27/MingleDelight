import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import Logo from "@/assets/images/logo-circle.png"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-8 md:px-16 lg:px-24">
      {/* Logo */}
      <div className="w-16 h-16">
        <Image 
          src={Logo}
          alt="logo" 
          width={100} 
          height={100}
          className="w-full h-full" 
          priority
        />
      </div>
      
      {/* Navigation Links */}
      <ul className="flex gap-6 md:gap-8 text-sm md:text-base font-medium">
        <li>
          <Link 
            prefetch 
            href={"/"} 
            className="hover:text-[#74512D] hover:border-b-2 hover:border-[#74512D] transition-colors"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link 
            prefetch 
            href={"/about"} 
            className="hover:text-[#74512D] hover:border-b-2 hover:border-[#74512D] transition-colors"
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link 
            prefetch 
            href={"/menu"} 
            className="hover:text-[#74512D] hover:border-b-2 hover:border-[#74512D] transition-colors"
          >
            MENU
          </Link>
        </li>
        <li>
          <Link 
            prefetch 
            href={"/news"} 
            className="hover:text-[#74512D] hover:border-b-2 hover:border-[#74512D] transition-colors"
          >
            NEWS
          </Link>
        </li>
      </ul>
    </nav>
  )
}