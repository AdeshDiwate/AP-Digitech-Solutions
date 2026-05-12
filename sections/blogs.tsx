import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export interface BlogPost {
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  author: string;
  authorRole?: string;
  authorAvatar?: string;
  date: string;
  readTime: string;
  technologies?: string[];
  keyResults?: string[];
  url?: string;
}

export const blogPosts: BlogPost[] = [
  {
    category: "Engineering",
    title: "How Modern Systems Handle Massive Read Traffic Efficiently",
    subtitle: "Learn how modern systems efficiently handle massive read traffic using caching, replication, and scalable architecture techniques.",
    description: "Learn how modern systems efficiently handle massive read traffic using caching, replication, and scalable architecture techniques.",
    image: "/blogs/blog-image-1.webp",
    imageAlt: "City skyline with long-exposure traffic representing modern system infrastructure",
    author: "Adesh Diwate",
    authorRole: "Technical Architect",
    date: "April 07, 2026",
    readTime: "4 min read",
    technologies: ["System Design", "Backend Engineering", "Big Data"],
    keyResults: [
      "Handling 100k req/sec with caching and sharding",
      "Optimizing database queries for high-concurrency reads",
      "Implementing CDN and replication strategies"
    ],
    url: "https://medium.com/@adeshdiwate03/how-modern-systems-handle-massive-read-traffic-efficiently-7b44712ff75d"
  },
  {
    category: "System Design",
    title: "Understanding Rate Limiting Algorithms: A Practical Analysis of Leaky Bucket and Token Bucket",
    subtitle: "Discover how modern applications use rate limiting algorithms to control traffic and maintain system stability.",
    description: "Discover how modern applications use rate limiting algorithms to control traffic and maintain system stability.",
    image: "/blogs/blog-image-2.webp",
    imageAlt: "Diagram illustrating the Token Bucket rate limiting algorithm",
    author: "Adesh Diwate",
    authorRole: "Technical Architect",
    date: "March 12, 2026",
    readTime: "4 min read",
    technologies: ["Algorithms", "System Design", "Distributed Systems"],
    keyResults: [
      "Improved system scalability",
      "Better traffic management",
      "Enhanced system stability"
    ],
    url: "https://medium.com/@adeshdiwate03/understanding-rate-limiting-algorithms-a-practical-analysis-of-leaky-bucket-and-token-bucket-1bdc4bd9bca5"
  },
  {
    category: "Engineering",
    title: "How We Migrated 1 Billion Database Records Without Downtime",
    subtitle: "A deep dive into the engineering strategies used to migrate massive datasets while maintaining 99.99% availability.",
    description: "Learn the step-by-step process of migrating over a billion records across distributed databases with zero impact on user experience.",
    image: "/blogs/blog%20image%203.webp",
    imageAlt: "Database migration visualization with high-speed data transfer represention",
    author: "Adesh Diwate",
    authorRole: "Technical Architect",
    date: "March 06, 2026",
    readTime: "4 min read",
    technologies: ["Database Migration", "Distributed Systems", "Cloud Infrastructure"],
    keyResults: [
      "Successfully migrated 1B+ records with 0% downtime",
      "Maintained system performance during peak traffic",
      "Implemented automated rollback and verification checks"
    ],
    url: "https://medium.com/@adeshdiwate03/how-we-migrated-1-billion-database-records-without-downtime-8b7004c3d3d7"
  }
];

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="bg-white px-6 py-18 text-slate-950 md:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-500 sm:text-sm">
            Blogs
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl text-balance">
            Latest Insights
            <span className="mt-1 block text-sky-500">Shaping the Industry</span>
          </h2>
          <div className="mt-5 flex flex-col items-center gap-6">
            <p className="max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
              Insights on AI, design, engineering, and digital innovation.
            </p>

           </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <CardContainer
              key={post.title}
              containerClassName="py-0"
              className="inter-var"
            >
              <CardBody className="relative h-auto min-h-[420px] sm:min-h-[460px] w-full rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                <CardItem
                  translateZ="28"
                  as="p"
                  className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500 sm:text-sm"
                >
                  {post.category}
                </CardItem>

                <CardItem
                  translateZ="55"
                  className="mt-3 max-w-md text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl line-clamp-2 h-[3.5rem] sm:h-[4.5rem]"
                >
                  {post.title}
                </CardItem>

                <CardItem translateZ="90" className="mt-6 w-full">
                  <div className="overflow-hidden rounded-[1.5rem] border border-slate-100 bg-slate-50 relative aspect-[16/10]">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardItem>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <CardItem translateZ={20} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
                      <User className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900 tracking-tight">{post.author}</span>
                      <span className="text-[11px] text-slate-400 mt-0.5">
                        {post.date}
                      </span>
                    </div>
                  </CardItem>

                  <CardItem
                    translateZ={30}
                    as={post.url ? "a" : Link}
                    href={post.url || "#"}
                    {...(post.url ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={`Read more about ${post.title}`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white transition-all duration-300 hover:bg-blue-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        {/* View All Blogs Button at the bottom */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/Blog"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-2xl hover:-translate-y-1"
          >
            View All Blogs
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
