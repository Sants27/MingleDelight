import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Debut from "@/assets/imgNews/debut.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';

type NewsDetailProps = {
    params: {
      slug: string;
    }
}
export default async function NewsDetail({params} : NewsDetailProps) {
  const slug = (await params).slug;
  
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link 
            prefetch 
            href={"/news"} 
            className="inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-1"/>
          Back to News
        </Link>
      </div>
      {/* Article Header */}
      <article className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          MingleDelight Membuka Cabang Baru di Bandung {slug}
        </h1>
        <div className="flex items-center mb-6 text-gray-500 text-sm">
          <span className="mr-4">
            <FontAwesomeIcon icon={faCalendarDays} className="mr-1"/>4 Mei 2025
          </span>
          <span className="mr-4">
            <FontAwesomeIcon icon={faUser} className="mr-1"/>Admin MingleDelight
          </span>
        </div>
        {/* Main Image */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden mb-8">
          <Image
            src={Debut}
            alt="MingleDelight Bandung"
            className="w-full h-full object-cover object-top rounded-xl"
          />
        </div>
        {/* Article Content */}
        <div className="prose max-w-none mb-8">
          <p className="text-lg leading-relaxed mb-6">
            Kabar gembira untuk MingleLovers di Bandung! MingleDelight akan
            segera hadir di kota kembang dengan konsep store yang lebih
            fresh dan inovatif. Cabang baru ini akan menjadi yang pertama di
            luar Jakarta, menandai langkah ekspansi yang signifikan bagi
            brand kopi yang telah menjadi favorit anak muda ini.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Berlokasi di Jalan Riau No. 150, area yang dikenal sebagai pusat
            kuliner dan lifestyle di Bandung, MingleDelight siap
            menghadirkan pengalaman ngopi yang berbeda. Store baru ini akan
            mengusung konsep &quot;Urban Garden&quot; yang menggabungkan elemen modern
            dengan sentuhan alam.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-4">
            Konsep Store yang Unik
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Berbeda dengan cabang Jakarta yang mengusung tema industrial
            minimalis, cabang Bandung akan hadir dengan konsep yang lebih
            segar dan organik. Pengunjung akan dimanjakan dengan interior
            yang dipenuhi tanaman hijau, furniture kayu alami, dan
            pencahayaan yang hangat.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            &quot;Kami ingin menciptakan ruang yang tidak hanya nyaman untuk
            nongkrong, tapi juga menenangkan dan menginspirasi. Bandung
            dengan iklimnya yang sejuk sangat cocok dengan konsep Urban
            Garden yang kami usung&quot;, jelas Dian Sastro, Creative Director
            MingleDelight.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="h-[200px] overflow-hidden rounded-xl">
              <Image
                src={Debut}
                alt="MingleDelight Interior Design Concept"
                className="w-full h-full object-cover object-top rounded-xl"
              />
            </div>
            <div className="h-[200px] overflow-hidden rounded-xl">
              <Image
                src={Debut}
                alt="MingleDelight Barista Counter"
                className="w-full h-full object-cover object-top rounded-xl"
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-10 mb-4">
            Menu Spesial Bandung
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Selain menu signature yang sudah dikenal, MingleDelight Bandung
            akan menghadirkan beberapa menu spesial yang terinspirasi dari
            cita rasa lokal. Pengunjung dapat menikmati kreasi seperti Kopi
            Susu Pandan, Bandung Berry Frappe, dan berbagai pastry dengan
            sentuhan lokal.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            &quot;Kami melakukan riset mendalam tentang preferensi konsumen
            Bandung dan menciptakan menu yang tidak hanya enak, tapi juga
            punya cerita dan koneksi dengan kota ini&quot;, ungkap Bima Arya,
            Head Barista MingleDelight.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-4">Grand Opening</h2>
          <p className="text-lg leading-relaxed mb-6">
            MingleDelight Bandung dijadwalkan akan melakukan soft opening
            pada tanggal 15 Mei 2025, diikuti dengan grand opening pada 1
            Juni 2025. Berbagai acara menarik seperti workshop kopi, live
            music, dan promo spesial telah disiapkan untuk menyambut para
            pengunjung.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            &quot;Kami sangat antusias untuk bertemu dengan MingleLovers di
            Bandung. Semoga kehadiran kami bisa menjadi bagian dari gaya
            hidup dan momen spesial mereka&quot;, kata Rendy Juliansyah, CEO
            MingleDelight.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Untuk informasi lebih lanjut dan update terbaru, ikuti akun
            media sosial resmi MingleDelight atau kunjungi website kami.
          </p>
        </div>
      </article>
    </section>
  )
}
