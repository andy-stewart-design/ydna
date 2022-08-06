import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import Head from "next/head";
import { allSnippets, type Snippet } from "contentlayer/generated";
import Wrapper from "components/global/Wrapper";
import SnippetCard from "components/content/snippets/SnippetCard";

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
        <Wrapper>
          <div className="mx-auto">
            <h1 className="font-bold text-5xl mb-6">All Snippets</h1>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 auto-rows-fr gap-x-4 mt-2">
              {snippets.map((snippet) => (
                <SnippetCard data={snippet} key={snippet.title}></SnippetCard>
              ))}
            </div>
          </div>
        </Wrapper>
      </main>
    </div>
  );
};

export default SnippetIndex;
