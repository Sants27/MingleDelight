import { Media, News } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";
import { PaginatedDocs } from "payload";
import React from "react";

interface NewsListProps {
  news?: PaginatedDocs<News>
}

export default function NewsList({news} : NewsListProps) {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[#E0C097] text-3xl md:text-4xl font-bold mb-3">
            Berita Terbaru
          </h2>
          <p className=" max-w-2xl mx-auto">
            Ikuti perkembangan terbaru dari MingleDelight dan dunia kopi
          </p>
          <div className="w-20 h-1 bg-[#B85C38] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-10">
          {news?.docs.map((news) => {
            return (
              <div
                key={news.id}
                className="bg-[#f6f1eb] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={(news.cover as Media).url ?? ""}
                    alt={(news.cover as Media).alt ?? ""}
                    className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-300"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(news.date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {news.description}
                  </p>
                  <Link href={`/news/${news.slug}`} className="text-[#B85C38] text-sm">
                    Baca selengkapnya
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        {/* Stay Tunned */}
        <div className="text-center">
          <p className="text-center">
            Kabar seru lainnya bakal terus kami update. Stay connected,
            MingleLovers!
          </p>
        </div>
      </div>
    </section>
  );
}
