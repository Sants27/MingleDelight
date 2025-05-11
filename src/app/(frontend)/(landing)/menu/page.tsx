import React from 'react'
import MenuList from './components/MenuList'
import { getPayload } from 'payload'
import payloadConfig from '@/payload.config'

const Menus = (await getPayload({config: payloadConfig})).find({
  collection: "menus"
});
export default async function MenuPage() {
  return (
    <>
      <section className="space-y-8 w-full z-10 px-8 md:px-16 lg:px-24 pb-10">
        <MenuList menus={(await Menus)}/>
      </section>
    </>
  )
}
