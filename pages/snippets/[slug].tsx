import { allSnippets, type Snippet } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from "next";
import PostLayout from "layouts/Posts";
import MDXComponents from "components/blog/shared/MDXComponents";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allSnippets.map((snippet) => ({
      params: {
        slug: snippet.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ snippet: Snippet }> = ({
  params,
}) => {
  const snippet = allSnippets.find((snippet) => snippet.slug === params?.slug);

  if (!snippet) {
    return { notFound: true };
  }

  return { props: { snippet } };
};

export default function SinglePostPage({
  snippet,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXContent = useMDXComponent(snippet.body.code);
  return (
    <PostLayout>
      <div className="prose">
        <h1>{snippet.title}</h1>
        <MDXContent components={MDXComponents} />
      </div>
    </PostLayout>
  );
}
