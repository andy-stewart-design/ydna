// import Image from "next/image";
import Link from "next/link";
import { type Post } from "contentlayer/generated";

const BlogCard = ({ post }: { post: Post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a className="flex flex-col gap-y-2 mt-6 mb-8 pt-4 pb-5 px-4 border border-black/10 dark:border-white/20 rounded">
        <p className="font-medium text-sm">{post.date}</p>
        <h3 className="font-bold text-2xl">{post.title}</h3>
        <p>{post.summary}</p>
        <div className="flex gap-x-2 mt-2">
          {post.tags?.map((tag) => (
            <span
              className="font-medium text-sm px-3 py-0.5 bg-blue-500/20 rounded-full"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
