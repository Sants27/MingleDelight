import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
import { Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";

type NewsDetailProps = {
    params: Promise <{
      slug: string;
    }>;
}

async function getNews(slug: string) {
  const newspost = await (
    await getPayload({config: payloadConfig})
  ).find({
    collection: "news",
    where: {
      slug: {
        equals: slug,
      },
    },
  });
  if (!newspost.docs.length) {
    throw new Error("Blog not found");
  }

  return newspost.docs[0];
}

export default async function NewsDetail({params} : NewsDetailProps) {
  const slug = (await params).slug;
  
  const data = await getNews(slug);

  return (
    <section className="space-y-8 w-full z-10 px-8 md:px-16 lg:px-24 pb-10">
      <section className="max-w-7xl mx-auto">
        <div className="pt-2 mb-6">
          <Link
              prefetch
              href={"/news"}
              className="inline-flex items-center text-[#B85C38] hover:text-[#5C3D2E] transition-colors cursor-pointer !rounded-button whitespace-nowrap"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-1"/>
            Back to News
          </Link>
        </div>
        {/* Article Header */}
        <article>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {data.title}
          </h1>
          <div className="flex items-center mb-6 text-sm">
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
              src={(data.cover as Media).url ?? ""}
              alt={(data.cover as Media).alt}
              width={500} 
              height={400}
              className="w-full h-full object-cover object-top rounded-xl"
            />
          </div>
          {/* Article Content */}
          <div className="prose max-w-none">
              <RichText 
                className="prose dark:prose-invert w-full max-w-none mx-auto text-left text-base md:text-lg leading-relaxed"
                data={data.content}
              />
          </div>
        </article>
      </section>
    </section>
  )
}
