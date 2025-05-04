import Image from "next/image";
import Link from "next/link";
import React from "react";
import Debut from "@/assets/imgNews/debut.png";
import Ciwalk from "@/assets/imgNews/ciwalk.png";
import Unpar from "@/assets/imgNews/UNPAR.png";
import Booth from "@/assets/imgNews/booth.png";
import Collab from "@/assets/imgNews/collab.png";

const posts = [
  {
    id: 1,
    title: "MingleDelight Membuka Cabang Baru di Bandung",
    date: "4 Mei 2025",
    excerpt:
      "Kabar gembira untuk MingleLovers di Bandung! MingleDelight akan segera hadir di kota kembang dengan konsep store yang lebih fresh dan inovatif.",
    image: Debut,
    slug: "mingledelight-membuka-cabang-baru-di-bandung",
  },
  {
    id: 2,
    title: "Workshop Latte Art Bersama Barista Profesional",
    date: "28 April 2025",
    excerpt:
      "MingleDelight mengadakan workshop latte art yang dipandu oleh barista profesional. Para peserta akan belajar teknik dasar hingga tingkat lanjut.",
    image: Ciwalk,
    slug: "workshop-latte-art-bersama-barista-profesional",
  },
  {
    id: 3,
    title: "Kolaborasi Spesial dengan Seniman Lokal",
    date: "15 April 2025",
    excerpt:
      "MingleDelight berkolaborasi dengan seniman lokal untuk menciptakan kemasan edisi terbatas yang unik dan artistik untuk produk signature kami.",
    image: Collab,
    slug: "kolaborasi-spesial-dengan-seniman-lokal",
  },
  {
    id: 4,
    title: "Kolaborasi Spesial dengan Seniman Lokal",
    date: "15 April 2025",
    excerpt:
      "MingleDelight berkolaborasi dengan seniman lokal untuk menciptakan kemasan edisi terbatas yang unik dan artistik untuk produk signature kami.",
    image: Unpar,
    slug: "kolaborasi-spesial-dengan-seniman-lokal",
  },
  {
    id: 5,
    title: "Kolaborasi Spesial dengan Seniman Lokal",
    date: "15 April 2025",
    excerpt:
      "MingleDelight berkolaborasi dengan seniman lokal untuk menciptakan kemasan edisi terbatas yang unik dan artistik untuk produk signature kami.",
    image: Booth,
    slug: "kolaborasi-spesial-dengan-seniman-lokal",
  },
];

export default function NewsList() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Berita Terbaru
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Ikuti perkembangan terbaru dari MingleDelight dan dunia kopi
        </p>
        <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {posts.map((post) => {
          return (
            <div
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-300"
                  width={600}
                  height={400}
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link href={`/news/${post.slug}`} className="text-cyan-400 text-sm">
                  Baca selengkapnya
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {/* Stay Tunned */}
      <div className="text-center">
        <p className="text-center text-gray-600 mb-8">
          Kabar seru lainnya bakal terus kami update. Stay connected,
          MingleLovers!
        </p>
      </div>
    </section>
  );
}
