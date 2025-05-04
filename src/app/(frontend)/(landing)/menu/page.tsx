"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Machiato from '@/assets/imgMenus/CaramelMachiato.png'
import Matcha from '@/assets/imgMenus/MachaLatte.png'
import Americano from '@/assets/imgMenus/Americano.png'
import Berry from '@/assets/imgMenus/BerrySmoothie.png'
import Vanila from '@/assets/imgMenus/VanilaFrappe.png'
import Mingle from '@/assets/imgMenus/MingleSpecial.png'

const menuItems = [
  {
    id: 1,
    name: 'Caramel Macchiato',
    description: 'Espresso dengan lapisan susu dan sentuhan caramel yang manis',
    image: Machiato,
    category: 'coffee',
    price: 45000,
    promoPrice: 35000,
    isPromo: true,
  },
  {
    id: 2,
    name: 'Matcha Latte',
    description: 'Bubuk matcha premium dicampur dengan susu creamy',
    image: Matcha,
    category: 'non-coffee',
    price: 40000,
    isPromo: false,
  },
  {
    id: 3,
    name: 'Americano',
    description: 'Espresso dengan air panas, kuat dan sederhana',
    image: Americano,
    category: 'coffee',
    price: 30000,
    isPromo: false,
  },
  {
    id: 4,
    name: 'Berry Smoothie',
    description: 'Campuran berry segar dengan yogurt dan es',
    image: Berry,
    category: 'non-coffee',
    price: 45000,
    promoPrice: 35000,
    isPromo: true,
  },
  {
    id: 5,
    name: 'Vanilla Frappe',
    description: 'Minuman dingin dengan es krim vanilla dan whipped cream',
    image: Vanila,
    category: 'non-coffee',
    price: 38000,
    isPromo: false,
  },
  {
    id: 6,
    name: 'Mingle Special',
    description: 'Minuman signature kami dengan rahasia bahan spesial',
    image: Mingle,
    category: 'coffee',
    price: 50000,
    promoPrice: 42000,
    isPromo: true,
  },
]

export default function MenuList() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isClient, setIsClient] = useState(false) // State to check if it's client side

  useEffect(() => {
    setIsClient(true) // Set to true once the component mounts in the client
  }, [])

  const filteredItems =
    activeFilter === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter)

  if (!isClient) {
    return null // Don't render anything until client side
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Menu Kami
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto whitespace-nowrap overflow-hidden text-ellipsis">
          Temukan berbagai pilihan minuman kopi dan non-kopi yang siap menemani momen spesial Anda
        </p>
        <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap justify-center mb-10">
        {['all', 'coffee', 'non-coffee'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`mr-4 mb-4 px-6 py-2 ${
              activeFilter === filter
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            } rounded-full cursor-pointer whitespace-nowrap`}
          >
            {filter === 'all'
              ? 'Semua'
              : filter === 'coffee'
              ? 'Kopi'
              : 'Non-Kopi'}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow relative"
          >
            <div className="h-64 relative">
              {item.isPromo && (
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 rounded-full z-10 text-sm font-medium">
                  Promo
                </div>
              )}
              <Image
                src={item.image}
                alt={`Gambar ${item.name}`}
                layout="fill" // Menggunakan layout fill
                className="object-cover object-top transition-transform hover:scale-105 duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <div className="flex items-center gap-2 mb-3">
                {item.isPromo ? (
                  <>
                    <span className="text-gray-400 line-through">
                      Rp {item.price.toLocaleString()}
                    </span>
                    <span className="text-orange-500 font-semibold">
                      Rp {item.promoPrice?.toLocaleString()}
                    </span>
                  </>
                ) : (
                  <span className="text-gray-900 font-semibold">
                    Rp {item.price.toLocaleString()}
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
