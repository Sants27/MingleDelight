import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import Logo from "@/assets/images/logo-circle.png"
import { getPayload } from 'payload'
import payloadConfig from '@/payload.config'
import { Media } from '@/payload-types'

export default async function Navbar() {
  const general = (await getPayload({config: payloadConfig})).findGlobal({
    slug: "general",
  });

  const logo = (await general).logo as Media | undefined

  return (
    <nav className="flex justify-between items-center py-6 px-8 md:px-16 lg:px-24">
      {/* Logo */}
      <div className="w-16 h-16 rounded-full overflow-hidden">
        <Image 
          src={logo?.url ?? Logo}
          alt={logo?.alt ?? "Logo"} 
          width={100} 
          height={100}
          className="w-full h-full object-cover" 
          priority
        />
      </div>
      
      {/* Navigation Links */}
      <ul className="flex gap-6 md:gap-8 text-sm md:text-base font-medium">
        <li>
          <Link 
            prefetch 
            href={"/"} 
            className="text-[#E0C097] hover:text-[#B85C38] hover:border-b-2 hover:border-[#B85C38] transition-colors"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link 
            prefetch 
            href={"/about"} 
            className="text-[#E0C097] hover:text-[#B85C38] hover:border-b-2 hover:border-[#B85C38] transition-colors"
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link 
            prefetch 
            href={"/menu"} 
            className="text-[#E0C097] hover:text-[#B85C38] hover:border-b-2 hover:border-[#B85C38] transition-colors"
          >
            MENU
          </Link>
        </li>
        <li>
          <Link 
            prefetch 
            href={"/news"} 
            className="text-[#E0C097] hover:text-[#B85C38] hover:border-b-2 hover:border-[#B85C38] transition-colors"
          >
            NEWS
          </Link>
        </li>
      </ul>
    </nav>
  )
}