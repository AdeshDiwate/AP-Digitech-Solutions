"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/sections/footer";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { blogPosts } from "@/sections/blogs";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-10 lg:px-16 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-500 mb-6">
              Our Publication
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8">
              Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">Innovation</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
              Exploring the intersection of design, technology, and business strategy.
              Stay ahead of the curve with our latest articles and industry reports.
            </p>
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-20 px-6 md:px-10 lg:px-16 bg-slate-50/50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-900">Latest Articles</h2>
            <p className="text-slate-500 mt-2">Discover our most recent thoughts and discoveries.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <CardContainer
                key={post.title}
                containerClassName="py-0"
                className="inter-var"
              >
                <CardBody className="relative h-auto min-h-[580px] w-full rounded-[2.5rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.05)] transition-all hover:shadow-[0_30px_70px_rgba(15,23,42,0.1)] group/card">
                  {/* Category Tag */}
                  <CardItem
                    translateZ="28"
                    as="div"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-4"
                  >
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </CardItem>

                  {/* Title */}
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-bold leading-tight tracking-tight text-slate-900 transition-colors duration-300 line-clamp-2 min-h-[3.5rem] sm:min-h-[4rem]"
                  >
                    {post.title}
                  </CardItem>

                  {/* Image */}
                  <CardItem translateZ="80" className="mt-8 w-full">
                    <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 relative aspect-[16/10]">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                      />
                    </div>
                  </CardItem>

                  {/* Description */}
                  <CardItem
                    translateZ="40"
                    className="mt-6 text-slate-500 text-sm leading-relaxed line-clamp-3"
                  >
                    {post.description}
                  </CardItem>

                  {/* Meta Data */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <CardItem translateZ={20} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-900">{post.author}</span>
                        <span className="text-[10px] text-slate-400 flex items-center gap-1">
                          <Calendar className="w-2.5 h-2.5" />
                          {post.date}
                        </span>
                      </div>
                    </CardItem>

                    <CardItem
                      translateZ={30}
                      as={post.url ? "a" : Link}
                      href={post.url || "#"}
                      {...(post.url ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white transition-all group-hover/card:bg-blue-600 group-hover/card:scale-110"
                    >
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>

          {/* Pagination/Load More */}
          <div className="mt-24 flex justify-center">
            <button className="px-8 py-4 rounded-full bg-slate-900 text-white font-semibold shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all hover:-translate-y-1">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
