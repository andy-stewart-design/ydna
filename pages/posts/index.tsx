import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { allPosts, Post } from "contentlayer/generated";
import { formatPostPreview, sortContentByDate } from "lib/contentlayer";
import PostCard from "components/content/posts/PostCard";

export const getStaticProps = () => {
  const allPostsPreview = allPosts.map((post) => {
    return formatPostPreview(post);
  });

  const allPostsSorted = sortContentByDate(allPostsPreview);

  return { props: { posts: allPostsSorted } };
};

const PostIndex = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Articles on design and development by Andy Stewart"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-bold text-5xl mb-6">All Posts</h1>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post as Post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PostIndex;
