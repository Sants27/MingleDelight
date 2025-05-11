import React from "react";
import Image from "next/image";
import Cup from "@/assets/images/mingleCup.png";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 pb-8">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 min-h-[550px] md:min-h-[600px]">
        {/* Left content */}
        <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left">
          <h1 className="text-[#E0C097] text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            TOGETHER TASTES BETTER{" "}
            <br className="hidden sm:inline" />
            WITH <span className="text-[#B85C38]">MINGLE</span>
          </h1>

          <div className="text-base sm:text-lg space-y-1">
            <p>Nikmati keseruan bareng MingleDelight</p>
            <p>Minuman kopi dan non-kopi yang siap nemenin momen seru kamu</p>
            <p>Yuk, temukan favoritmu dan jadi bagian dari #MingleLovers</p>
          </div>

          <div className="pt-2 md:pt-4">
            <Link 
              href="/menu"
              prefetch
              className="bg-[#B85C38] px-6 sm:px-10 py-3 sm:py-4 rounded-full font-medium hover:bg-[#5C3D2E] transition-colors text-sm sm:text-base"
            >
              See Our Menus
            </Link>
          </div>
        </div>

        {/* Right content */}
        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden">
          <Image
            src={Cup}
            alt="MingleDelight Coffee Cup"
            fill
            className="object-cover object-top rounded-xl transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
