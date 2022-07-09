import Image from "next/image";
import Link from "next/link";
import { type Post } from "contentlayer/generated";

const BlogCard = ({ post }: { post: Post }) => {
  return (
    <div className="flex flex-col gap-y-2 mt-6 mb-8">
      <Link href={`/posts/${post.slug}`}>
        <a className="font-bold text-2xl">{post.title}</a>
      </Link>
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
    </div>
  );
};

export default BlogCard;
