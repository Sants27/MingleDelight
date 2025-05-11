import React from 'react'
import NewsList from './components/NewsList'
import { getPayload } from 'payload'
import payloadConfig from '@/payload.config'

const News = (await getPayload({config: payloadConfig})).find({
  collection: "news"
});
export default async function NewsPage() {
  return (
    <>
      <section className="space-y-8 w-full z-10 px-8 md:px-16 lg:px-24 pb-10">
        <NewsList news={(await News)}/>
      </section>
    </>
  )
}
