import React from 'react'
import Image from 'next/image'
import About from "@/assets/images/about.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUsers, faLeaf } from '@fortawesome/free-solid-svg-icons'

export default function AboutPage() {
  return (
    <section className="space-y-8 mt-12 w-full z-10 px-8 md:px-16 lg:px-24 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Tentang MingleDelight
          </h2>
          <div className="w-20 h-1 bg-[#B85C38] mx-auto" />
        </div>
        <div className="mb-8">
          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl mb-10">
            <Image
              src={About}
              alt="MingleDelight Cafe"
              className="w-full h-full object-cover object-top rounded-xl"
            />
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-white">
            <p>
              MingleDelight lahir pada 25 November 2023, berangkat dari sebuah mimpi sederhana—menciptakan momen yang lebih bermakna lewat segelas minuman. Kami adalah brand minuman yang menggabungkan dua dunia: rasa kopi dan non-kopi, menyatu dalam harmoni yang bikin setiap tegukan jadi pengalaman yang seru, unik, dan... ngangenin.
            </p>
            <p>
              Di setiap resep, kami menuangkan semangat untuk bereksperimen dengan rasa, menciptakan kreasi yang gak hanya nikmat tapi juga punya cerita. Mulai dari kamu yang pecinta kopi klasik, sampai yang lebih suka minuman manis atau segar tanpa kafein—di MingleDelight, semua bisa menemukan “teman minum” favoritnya.
            </p>
            <p>
              Buat kami, minuman bukan sekadar minuman. Ini tentang merayakan waktu istirahat di tengah hiruk-pikuk hari, tentang tawa bersama teman, atau sekadar me-time sambil menikmati suasana. Kami percaya, satu tegukan bisa mengubah mood, menghidupkan hari, dan bikin kamu pengin balik lagi.
            </p>
            <p>
              Kami terus berinovasi, menghadirkan menu-menu baru dengan bahan berkualitas dan rasa yang konsisten. Karena kamu layak dapetin lebih dari sekadar minuman—kamu layak dapetin pengalaman yang menyenangkan
            </p>
            <p className="font-medium">
              📍 Ikuti kami di Instagram:{' '}
              <a
                href="https://instagram.com/mingledelight"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E0C097] underline hover:text-[#B85C38]"
              >
                @mingledelight
              </a>
              <br />
              📞 Hubungi kami via WhatsApp:{' '}
              <a
                href="https://wa.me/6287879076807"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E0C097] underline hover:text-[#B85C38]"
              >
                0878-7907-6807
              </a>
            </p>

          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-orange-50 p-8 rounded-xl text-center">
            <div className="text-[#B85C38] text-3xl mb-4">
              <FontAwesomeIcon icon={faCoffee} />
            </div>
            <h3 className="text-[#E0C097] text-xl font-bold mb-3">Kualitas Premium</h3>
            <p className="text-gray-600">
              Kami hanya menggunakan bahan-bahan berkualitas terbaik untuk
              setiap minuman kami.
            </p>
          </div>
          <div className="bg-orange-50 p-8 rounded-xl text-center">
            <div className="text-[#B85C38] text-3xl mb-4">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h3 className="text-[#E0C097] text-xl font-bold mb-3">Komunitas</h3>
            <p className="text-gray-600">
              Membangun hubungan dan menciptakan momen kebersamaan yang
              bermakna.
            </p>
          </div>
          <div className="bg-orange-50 p-8 rounded-xl text-center">
            <div className="text-[#B85C38] text-3xl mb-4">
              <FontAwesomeIcon icon={faLeaf} />
            </div>
            <h3 className="text-[#E0C097] text-xl font-bold mb-3">Keberlanjutan</h3>
            <p className="text-gray-600">
              Berkomitmen untuk praktik bisnis yang bertanggung jawab dan
              ramah lingkungan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
