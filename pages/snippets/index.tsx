import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import Head from "next/head";
import { allSnippets, type Snippet } from "contentlayer/generated";
import { formatSnippetPreview, sortContentByDate } from "lib/contentlayer";
import Wrapper from "components/global/Wrapper";
import SnippetCard from "components/content/snippets/SnippetCard";

export const getStaticProps = () => {
  const allSnippetsPreview = allSnippets.map((snippet) => {
    return formatSnippetPreview(snippet);
  });

  const allSnippetsSorted = sortContentByDate(allSnippetsPreview);

  return { props: { snippets: allSnippetsSorted } };
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
          <>
            <h1 className="font-bold text-5xl mb-8">All Snippets</h1>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 auto-rows-fr gap-y-5 gap-x-4 mt-2">
              {snippets.map((snippet) => (
                <SnippetCard
                  data={snippet as Snippet}
                  key={snippet.title}
                ></SnippetCard>
              ))}
            </div>
          </>
        </Wrapper>
      </main>
    </div>
  );
};

export default SnippetIndex;
