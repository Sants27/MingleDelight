import React from 'react'
import Image from 'next/image'
import Cup from "@/assets/images/mingleCup.png"
export default function Hero() {
  return (
    <>
      <section className="space-y-8 mt-6 md:mt-12">
        <div className="flex flex-col md:flex-row items-center min-h-[550px] md:min-h-[600px] relative overflow-hidden">
            {/* Left content */}
            <div className="w-full md:w-3/5 lg:w-3/5 z-10 px-4 sm:px-8 md:px-16 lg:px-24 pt-16 md:pt-0">
                <div className="space-y-4 md:space-y-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                        TOGETHER TASTES BETTER
                        <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>
                            WITH <span className="text-[#AF8260]">MINGLE</span>
                    </h1>
            
                    <div className="space-y-1 text-gray-700 text-base sm:text-lg">
                        <p>Nikmati keseruan bareng MingleDelight</p>
                        <p>Minuman kopi dan non-kopi yang siap nemenin momen seru kamu</p>
                        <p>Yuk, temukan favoritmu dan jadi bagian dari #MingleLovers</p>
                    </div>
            
                    <div className="pt-2 md:pt-4">
                        <button className="bg-[#AF8260] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-medium hover:bg-[#95634a] transition-colors text-sm sm:text-base">
                            See Our Menus
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Content */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl">
                <Image
                    src={Cup}
                    alt="MingleDelight Coffee Cup"
                    className="w-full h-full object-cover object-top rounded-xl"
                />
            </div>
        </div>
      </section>
    </>
  )
}