import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data/posts";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <article className="container mx-auto px-6 max-w-3xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        {/* Category & Meta */}
        <div className="flex items-center gap-4 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            {post.category}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
          <span className="flex items-center gap-1.5">
            <User size={14} />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString("en-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        {/* Featured Image */}
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none leading-relaxed text-muted-foreground whitespace-pre-line">
          {post.content}
        </div>

        {/* Back to blog */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold"
          >
            <ArrowLeft size={16} />
            Back to all articles
          </Link>
        </div>
      </article>
    </main>
  );
}
