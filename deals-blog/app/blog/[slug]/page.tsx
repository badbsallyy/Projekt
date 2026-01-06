import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { ParallaxImage } from "@/components/blog/ParallaxImage";
import { blogPosts } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils";

const TEXT = {
  back: "Zurück zum Blog",
  share: "Teilen",
  related: "Related Articles",
  checklistTitle: "Checkliste für smarte Deals",
  quote:
    "Wer Preise versteht, spart doppelt: Erst durch den Rabatt und dann durch bessere Kaufentscheidungen.",
  tipsTitle: "Praxis-Tipps",
  tips: [
    "Lege dir eine feste Deal-Zeit pro Woche fest, um Impulskäufe zu vermeiden.",
    "Vergleiche mindestens zwei Shops, auch wenn der Rabatt groß wirkt.",
    "Nutze Cashback und Newsletter nur gezielt für deine Wunschliste.",
    "Kaufe Technik am besten kurz nach einem Produkt-Launch."
  ]
};

const SHARE_LINKS = [
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin }
];

interface BlogDetailPageProps {
  params: { slug: string };
}

export const generateMetadata = ({ params }: BlogDetailPageProps): Metadata => {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    return {
      title: "Artikel nicht gefunden",
      description: "Der angefragte Artikel ist nicht verfügbar."
    };
  }

  return {
    title: `DealFlow | ${post.title}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl]
    }
  };
};

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.id !== post.id).slice(0, 3);

  const contentParts = post.content.split("\n\n");

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link href="/blog" className="text-sm text-emerald-300 hover:text-emerald-200">
        {TEXT.back}
      </Link>
      <div className="mt-6 space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
          {post.categories.join(" · ")}
        </p>
        <h1 className="text-3xl font-semibold text-white md:text-5xl">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <span>{formatDate(post.date)}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
      <div className="mt-10">
        <ParallaxImage src={post.imageUrl} alt={post.title} />
      </div>
      <article className="mt-10 space-y-6 text-sm text-slate-300">
        <p>{contentParts[0]}</p>
        <p>{contentParts[1]}</p>
        <h2 className="text-xl font-semibold text-white">{TEXT.checklistTitle}</h2>
        <ul className="list-disc space-y-2 pl-5">
          {TEXT.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
        <blockquote className="border-l-2 border-emerald-400/60 pl-4 text-base text-emerald-200">
          {TEXT.quote}
        </blockquote>
        <h3 className="text-lg font-semibold text-white">{TEXT.tipsTitle}</h3>
        <p>{contentParts[2]}</p>
        <p>{contentParts[3]}</p>
      </article>
      <div className="mt-10 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">{TEXT.share}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {SHARE_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-400/60 hover:text-emerald-200"
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
      <section className="mt-16">
        <h3 className="text-2xl font-semibold text-white">{TEXT.related}</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {relatedPosts.map((item) => (
            <BlogCard key={item.id} post={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
