import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import Head from "next/head";
import { allSnippets, type Snippet } from "contentlayer/generated";
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

      <main className="pt-40">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-bold text-5xl mb-6">All Snippets</h1>
          <div className="flex gap-x-4 mt-2">
            {snippets.map((snippet) => (
              <Link href={`/snippets/${snippet.slug}`} key={snippet.slug}>
                <a className="group relative flex flex-col items-start w-full mt-6 mb-8 border border-black/10 dark:border-white/20 rounded hover:border-black/50 dark:hover:border-white/50 transition-colors duration-500 ease-out overflow-hidden">
                  <div className="w-full bg-gray-800 aspect-video group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="relative flex flex-col items-start gap-y-3 grow p-6 pb-16">
                    <h3 className="font-bold text-2xl">{snippet.title}</h3>
                    <p>{snippet.summary}</p>
                    <span className="absolute left-6 bottom-5 font-medium text-sm px-3 py-1 bg-white/10 rounded-full">
                      {snippet.framework}
                    </span>
                  </div>
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
