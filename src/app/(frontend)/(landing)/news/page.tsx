import React from 'react'
import NewsList from './components/NewsList'

export default function NewsPage() {
  return (
    <>
      <section className="space-y-8 mt-12 w-full z-10 px-8 md:px-16 lg:px-24">
        <NewsList />
      </section>
    </>
  )
}
