import React, {ReactNode} from 'react'
import NavBar from '../components/NavBar'

export default function LandingLayout({children}:{children:ReactNode}) {
  return (
    <main className="bg-[#2D2424] min-h-screen">
      <NavBar />
      {children}
    </main>
  );
}

