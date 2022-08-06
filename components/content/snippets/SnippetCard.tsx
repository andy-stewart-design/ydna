import Link from "next/link";
import NextImage from "next/future/image";
import { type Snippet } from "contentlayer/generated";

interface Props {
  data: Snippet;
}

const SnippetCard = ({ data }: Props) => {
  return (
    <Link href={`/snippets/${data.slug}`} key={data.slug}>
      <a className="group relative flex flex-col items-start w-full mt-6 mb-8 bg-white bg-opacity-40 dark:bg-gray-800 dark:bg-opacity-20 border border-black/10 dark:border-white/20 rounded hover:bg-opacity-80 dark:hover:bg-opacity-50 hover:border-black/50 dark:hover:border-white/50 transition-colors duration-500 ease-out overflow-hidden">
        <div className="relative w-full bg-black">
          <NextImage
            src={data.image}
            className="relative w-full aspect-video group-hover:opacity-60 transition-opacity duration-500"
            width="1920"
            height="1080"
            sizes="50vw"
            alt="foo"
          ></NextImage>
          <span className="absolute top-4 left-4 font-medium text-sm text-white px-3 py-1 bg-black/60 rounded-full backdrop-blur-md">
            {data.framework}
          </span>
        </div>
        <div className="relative flex flex-col items-start gap-y-3 grow p-6 pb-14">
          <h3 className="font-bold text-2xl">{data.title}</h3>
          <p className="text-sm">{data.summary}</p>
          <span className="absolute left-6 bottom-5 font text-xl">→</span>
        </div>
      </a>
    </Link>
  );
};

export default SnippetCard;
