import type { Metadata } from "next";
import { BlogGrid } from "@/components/blog";
import { BackgroundBeams } from "@/components/ui";
import { blogPosts } from "@/lib/data/blog";

const TEXT = {
  title: "DealFlow Blog",
  subtitle: "Insights, Strategien und Guides für smarteres Shopping"
};

export const metadata: Metadata = {
  title: "DealFlow | Blog",
  description: "Tipps, Strategien und News rund um Deals und smartes Shopping."
};

export default function BlogPage() {
  return (
    <BackgroundBeams className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">{TEXT.title}</p>
          <h1 className="mt-3 text-3xl font-semibold text-white md:text-5xl">{TEXT.subtitle}</h1>
        </div>
        <div className="mt-12">
          <BlogGrid posts={blogPosts} />
        </div>
      </div>
    </BackgroundBeams>
  );
}
