import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import Head from "next/head";
import { allPosts, type Post } from "contentlayer/generated";
import BlogCard from "components/BlogCard";

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  return { props: { posts: allPosts } };
};

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Articles on design and development by Andy Stewart"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid place-items-center h-screen">
        <div className="max-w-[640px]">
          <h1 className="font-bold text-5xl mb-6">All Posts</h1>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
