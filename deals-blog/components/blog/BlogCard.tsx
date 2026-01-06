import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types";
import { CardHoverEffect } from "@/components/ui";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

const TEXT = {
  read: "Artikel lesen"
};

export const BlogCard = ({ post }: BlogCardProps) => (
  <CardHoverEffect className="flex h-full flex-col gap-4">
    <div className="relative h-44 w-full overflow-hidden rounded-2xl">
      <Image
        src={post.imageUrl}
        alt={post.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>{formatDate(post.date)}</span>
        <span>{post.readTime}</span>
      </div>
      <h3 className="text-lg font-semibold text-white">{post.title}</h3>
      <p className="text-sm text-slate-300">{post.excerpt}</p>
    </div>
    <Link
      href={`/blog/${post.slug}`}
      className="mt-auto inline-flex items-center justify-center rounded-full border border-emerald-400/40 px-4 py-2 text-sm text-emerald-200 transition hover:bg-emerald-500/10"
    >
      {TEXT.read}
    </Link>
  </CardHoverEffect>
);
