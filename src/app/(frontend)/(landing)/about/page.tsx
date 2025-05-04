import React from 'react'
import Image from 'next/image'
import About from "@/assets/images/about.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUsers, faLeaf } from '@fortawesome/free-solid-svg-icons'

export default function AboutPage() {
  return (
    <section className="space-y-8 mt-12 w-full z-10 px-8 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Tentang MingleDelight
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>
        <div className="mb-16">
          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl mb-10">
            <Image
              src={About}
              alt="MingleDelight Cafe"
              className="w-full h-full object-cover object-top rounded-xl"
            />
          </div>
          <p className="text-lg mb-6 leading-relaxed">
            MingleDelight hadir untuk menciptakan momen menyenangkan lewat
            minuman kopi dan non-kopi yang menggugah selera. Kami percaya
            bahwa kebersamaan lebih indah ditemani dengan cita rasa yang
            autentik.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Berdiri sejak tahun 2020, MingleDelight telah menjadi bagian
            dari gaya hidup anak muda Indonesia yang menghargai kualitas dan
            kebersamaan. Kami memilih biji kopi terbaik dari petani lokal
            dan mengolahnya dengan standar kualitas tinggi untuk
            menghasilkan minuman yang tidak hanya lezat, tetapi juga
            memiliki cerita di baliknya.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Selain kopi, kami juga menyajikan berbagai minuman non-kopi yang
            inovatif, menyegarkan, dan cocok untuk berbagai selera. Setiap
            minuman kami dirancang untuk menjadi pendamping sempurna dalam
            setiap momen kebersamaan Anda.
          </p>
          <p className="text-lg font-medium">
            Mari bergabung dengan komunitas #MingleLovers dan rasakan
            pengalaman menikmati minuman yang berbeda!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-orange-50 p-8 rounded-xl text-center">
            <div className="text-orange-500 text-3xl mb-4">
              <FontAwesomeIcon icon={faCoffee} />
            </div>
            <h3 className="text-xl font-bold mb-3">Kualitas Premium</h3>
            <p className="text-gray-600">
              Kami hanya menggunakan bahan-bahan berkualitas terbaik untuk
              setiap minuman kami.
            </p>
          </div>
          <div className="bg-orange-50 p-8 rounded-xl text-center">
            <div className="text-orange-500 text-3xl mb-4">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h3 className="text-xl font-bold mb-3">Komunitas</h3>
            <p className="text-gray-600">
              Membangun hubungan dan menciptakan momen kebersamaan yang
              bermakna.
            </p>
          </div>
          <div className="bg-orange-50 p-8 rounded-xl text-center">
            <div className="text-orange-500 text-3xl mb-4">
              <FontAwesomeIcon icon={faLeaf} />
            </div>
            <h3 className="text-xl font-bold mb-3">Keberlanjutan</h3>
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
