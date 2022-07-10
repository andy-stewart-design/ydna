import { ReactNode } from "react";

function PostLayout({ children }: { children: ReactNode }) {
  return <article className="py-24 px-2">{children}</article>;
}

export default PostLayout;
