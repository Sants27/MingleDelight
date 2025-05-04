import React, {ReactNode} from 'react'
import NavBar from '../components/NavBar'

export default function LandingLayout({children}:{children:ReactNode}) {
  return (
    <main className="bg-[#d8c8af] min-h-screen">
      <NavBar />
      {children}
    </main>
  );
}

