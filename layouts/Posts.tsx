import { ReactNode } from "react";

function PostLayout({ children }: { children: ReactNode }) {
  return <article className="py-24">{children}</article>;
}

export default PostLayout;
