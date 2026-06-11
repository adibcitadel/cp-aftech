import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data/posts";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, guides, and updates from AFTECH on IoT, AI, cybersecurity, ERP, and digital transformation in Indonesia.",
  openGraph: {
    title: "Blog | AFTECH",
    description: "Insights, guides, and updates from AFTECH on IoT, AI, cybersecurity, ERP, and digital transformation.",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Insights & <span className="text-gradient">Updates</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Guides, industry trends, and company updates from the AFTECH team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="h-full rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-background/80 backdrop-blur-sm text-foreground border border-border">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-primary font-semibold mt-4 group-hover:gap-2 transition-all">
                    Read More <ArrowRight size={14} />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
