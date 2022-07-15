import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import Head from "next/head";
import { allSnippets, type Snippet } from "contentlayer/generated";
import BlogCard from "components/BlogCard";
import Link from "next/link";

export const getStaticProps: GetStaticProps<{
  snippets: Snippet[];
}> = () => {
  return { props: { snippets: allSnippets } };
};

const SnippetIndex = ({
  snippets,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="A collection of code snippets for Svelte and React"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-24">
        <div className="max-w-[720px] mx-auto">
          <h1 className="font-bold text-5xl mb-6">All Snippets</h1>
          <div className="flex gap-x-2 mt-2">
            {snippets.map((snippet) => (
              <Link href={`/snippets/${snippet.slug}`} key={snippet.slug}>
                <a className="flex flex-col items-start gap-y-3 w-full mt-6 mb-8 pt-4 pb-5 px-4 border border-black/10 dark:border-white/20 rounded hover:border-black/70 dark:hover:border-white/80 transition-colors duration-500 ease-out">
                  <h3 className="font-bold text-2xl">{snippet.title}</h3>
                  <p>{snippet.summary}</p>
                  <span className="font-medium text-sm px-3 py-0.5 bg-white/10 rounded-full">
                    {snippet.framework}
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SnippetIndex;
