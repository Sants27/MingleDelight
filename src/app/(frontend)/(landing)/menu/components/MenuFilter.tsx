'use client'

import React from 'react'

interface MenuFilterProps {
  activeFilter: string
  setActiveFilter: (filter: string) => void
}

export default function MenuFilter({ activeFilter, setActiveFilter }: MenuFilterProps) {
  const filters = ['all', 'coffee', 'non-coffee']

  return (
    <div className="flex flex-wrap justify-center mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`mr-3 mb-3 px-6 py-2 rounded-full cursor-pointer whitespace-nowrap ${
            activeFilter === filter
              ? 'bg-[#B85C38]'
              : 'bg-[#f6f1eb] hover:bg-[#ecdfcc] text-gray-800'
          }`}
        >
          {filter === 'all' ? 'Semua' : filter === 'coffee' ? 'Kopi' : 'Non-Kopi'}
        </button>
      ))}
    </div>
  )
}
