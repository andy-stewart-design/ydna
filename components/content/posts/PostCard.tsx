import Image from "next/image";
import Link from "next/link";
import { type Post } from "contentlayer/generated";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a className="flex flex-row mt-6 mb-8 border border-black/10 dark:border-white/10 rounded overflow-hidden hover:dark:border-white/30 transition-colors duration-300">
        {post.image && (
          <div className="relative shrink-0 w-48">
            <Image
              src={post.image}
              width={800}
              height={800}
              layout="fill"
              objectFit="cover"
              alt="FPO"
            ></Image>
          </div>
        )}
        <div className="flex grow flex-col gap-y-3 pt-7 pb-8 px-6">
          <p className="font-medium text-sm">{post.date}</p>
          <h3 className="font-bold text-2xl">{post.title}</h3>
          <p>{post.summary}</p>
          <div className="flex gap-x-2 mt-2">
            {post.tags?.map((tag) => (
              <span
                className="font-medium text-sm px-3 py-0.5 bg-white/10 rounded-full"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;
