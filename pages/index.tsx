import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { allPosts, type Post } from "contentlayer/generated";

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  return { props: { posts: allPosts } };
};

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Andy Stewart Design</title>
        <meta name="description" content="Andy Stewart Design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid place-items-center h-screen">
        <div>
          <h1 className="text-5xl">Andy Stewart Design</h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
