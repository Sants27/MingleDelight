"use client"

import { Menu } from '@/payload-types'
import Image from 'next/image'
import { PaginatedDocs } from 'payload'
import React, { useState, useEffect } from 'react'
import MenuFilter from './MenuFilter'

interface MenuListProps {
  menus?: PaginatedDocs<Menu>
}

export default function MenuList({ menus }: MenuListProps) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient || !menus?.docs) return null

  const filteredItems =
    activeFilter === 'all'
      ? menus.docs
      : menus.docs.filter((item) => item.type === activeFilter)
  
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[#E0C097] text-3xl md:text-4xl font-bold mb-3">
            Menu Kami
          </h2>
          <p className="max-w-2xl mx-auto">
            Temukan berbagai pilihan minuman yang siap menemani momen spesial Anda
          </p>
          <div className="w-20 h-1 bg-[#B85C38] mx-auto mt-4" />
        </div>

        {/* Gunakan komponen filter */}
        <MenuFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-7">
          {filteredItems.map((item) => (
            <div
                key={item.id}
                className="bg-[#f6f1eb] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow relative"
            >
              <div className="h-64 relative">
                {item.promo === 'yes' && (
                  <div className="absolute top-4 left-4 bg-[#B85C38] px-4 py-1 rounded-full z-10 text-sm font-medium">
                    Promo
                  </div>
                )}
                {typeof item.image === 'object' && item.image?.url && (
                  <Image
                    src={item.image.url}
                    alt={`Gambar ${item.title}`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="transition-transform hover:scale-105 duration-300 rounded-t-xl"                    
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
                    priority
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-[#B85C38] text-xl font-bold mb-2">{item.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                    {item.promo === 'yes' ? (
                      <>
                        <span className="text-gray-400 line-through">
                          Rp {item.priceBefore?.toLocaleString()}
                        </span>
                        <span className="text-[#B85C38] font-semibold">
                          Rp {item.priceAfter?.toLocaleString()}
                        </span>
                      </>
                    ) : (
                      <span className="text-gray-900 font-semibold">
                        Rp {item.price?.toLocaleString()}
                      </span>
                    )}
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
