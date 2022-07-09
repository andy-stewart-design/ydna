import { allPosts, type Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from "next";
import PostLayout from "layouts/Posts";
import MDXComponents from "components/blog/MDXComponents";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  return {
    props: {
      post: allPosts.find((post) => post.slug === params?.slug),
    },
  };
};

export default function SinglePostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <PostLayout>
      <div className="prose">
        <h1>{post.title}</h1>
        <MDXContent components={MDXComponents} />
      </div>
    </PostLayout>
  );
}
