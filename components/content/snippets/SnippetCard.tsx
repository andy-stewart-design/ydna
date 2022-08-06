import Link from "next/link";
import NextImage from "next/future/image";
import Button from "components/content/shared/CardButton";
import { type Snippet } from "contentlayer/generated";
import { useState } from "react";

interface Props {
  data: Snippet;
}

const SnippetCard = ({ data }: Props) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <div onMouseEnter={increment}>
      <Link href={`/snippets/${data.slug}`} key={data.slug}>
        <a className="group relative flex flex-col items-start w-full h-full bg-white bg-opacity-40 dark:bg-gray-800 dark:bg-opacity-20 border border-black/10 dark:border-white/20 rounded transition-colors duration-500 ease-out hover:bg-opacity-80 dark:hover:bg-opacity-50 hover:border-black/50 dark:hover:border-white/50 overflow-hidden">
          <div className="relative w-full bg-black">
            <NextImage
              src={data.image}
              className="relative w-full aspect-video group-hover:opacity-60 transition-opacity duration-500 ease-out"
              width="1920"
              height="1080"
              sizes="40vw"
              quality="60"
              alt="foo"
            ></NextImage>
            <span className="absolute top-4 left-4 font-medium text-sm text-white px-3 py-1 bg-black/60 rounded-full backdrop-blur-md">
              {data.framework}
            </span>
          </div>
          <div className="relative flex flex-col items-start gap-y-3 grow p-6 pb-18">
            <h3 className="font-bold text-2xl">{data.title}</h3>
            <p className="text-sm">{data.summary}</p>
            <Button focusable={false} trigger={count}></Button>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default SnippetCard;
