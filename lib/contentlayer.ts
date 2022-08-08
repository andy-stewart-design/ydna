import { pick } from "contentlayer/client";
import { Post, Snippet } from "contentlayer/generated";

export type PostPreview = ReturnType<typeof formatPostPreview>;
export type SnippetPreview = ReturnType<typeof formatSnippetPreview>;

export const formatPostPreview = (post: Post) => {
  const postPreview = pick(post, [
    "title",
    "date",
    "image",
    "tags",
    "summary",
    "slug",
  ]);

  return {
    ...postPreview,
    tags: postPreview.tags || [],
    image: postPreview.image || null,
  };
};

export const formatSnippetPreview = (snippet: Snippet) => {
  const snippetPreview = pick(snippet, [
    "title",
    "date",
    "image",
    "summary",
    "slug",
    "framework",
  ]);

  return {
    ...snippetPreview,
    // image: snippetPreview.image || null,
  };
};

export function sortContentByDate(
  posts: Post[] | PostPreview[] | Snippet[] | SnippetPreview[]
) {
  return posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
}
