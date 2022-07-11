import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import Head from "next/head";
import { allSnippets, type Snippet } from "contentlayer/generated";
import Link from "next/link";

export const getStaticProps: GetStaticProps<{
  snippets: Snippet[];
}> = () => {
  return { props: { snippets: allSnippets } };
};

const Home = ({ snippets }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
          <div>
            {snippets.map((snippet) => (
              <Link href={`/snippets/${snippet.slug}`} key={snippet.slug}>
                <a>
                  <p>{snippet.title}</p>
                  <p>{snippet.framework}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
