import { pick } from "contentlayer/client";
import { Post } from "contentlayer/generated";

export type PostPreview = ReturnType<typeof formatPostPreview>;

export const formatPostPreview = (post: Post) => {
  const partialPost = pick(post, [
    "title",
    "date",
    "image",
    "tags",
    "summary",
    "slug",
  ]);

  return {
    ...partialPost,
    tags: partialPost.tags || [],
    image: partialPost.image || null,
  };
};

export function sortPostsByDate(posts: Post[] | PostPreview[]) {
  return posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
}
