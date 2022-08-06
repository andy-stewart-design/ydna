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
            <span className="absolute top-4 left-4 font-medium text-sm text-white p-2 bg-black/60 rounded-full backdrop-blur-md">
              {/* {data.framework} */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                xmlSpace="preserve"
                className="w-6"
              >
                <path
                  d="M13.961 12c0 1.083-.878 1.961-1.961 1.961-1.083 0-1.961-.878-1.961-1.961s.878-1.961 1.961-1.961c1.083 0 1.961.878 1.961 1.961zm4.415 3.682c.708 2.839.458 5.074-.876 5.844-.329.191-.701.284-1.109.284-.974 0-2.154-.535-3.433-1.575-.319-.26-.639-.553-.958-.863-.319.31-.639.604-.958.863-1.279 1.04-2.459 1.575-3.433 1.575-.408 0-.78-.093-1.109-.284-1.335-.77-1.585-3.006-.877-5.844C2.811 14.875 1 13.541 1 12c0-1.54 1.808-2.873 4.617-3.679-.11-.433-.205-.859-.27-1.268-.37-2.31.04-3.936 1.153-4.58 1.114-.643 2.726-.184 4.542 1.292.321.26.642.556.962.867 2.102-2.029 4.16-2.928 5.496-2.159 1.334.771 1.584 3.006.876 5.845C21.189 9.125 23 10.459 23 12s-1.811 2.875-4.624 3.682zM16.394 3.149c-.926 0-2.273.761-3.725 2.166.636.688 1.26 1.463 1.858 2.308 1.043.097 2.025.251 2.925.457.618-2.466.435-4.279-.43-4.779-.178-.102-.389-.152-.628-.152zM15.999 12c-.279-.578-.588-1.169-.934-1.769-.339-.588-.695-1.154-1.063-1.693-.641-.049-1.308-.077-2.002-.077-.694 0-1.36.028-2.001.076-.361.53-.718 1.093-1.064 1.693-.347.601-.656 1.193-.935 1.772.284.588.596 1.179.935 1.767.34.588.696 1.155 1.063 1.694.641.048 1.308.076 2.002.076.694 0 1.361-.028 2.002-.076.368-.54.724-1.106 1.063-1.694.346-.6.655-1.191.934-1.769zm-.107 2.247c-.216.375-.44.738-.669 1.094.702-.088 1.358-.205 1.97-.343-.186-.599-.413-1.225-.687-1.877-.194.374-.396.75-.614 1.126zm-2.613 2.218c-.42.019-.845.031-1.279.031-.434 0-.86-.012-1.28-.031.418.552.846 1.065 1.28 1.536.433-.471.861-.984 1.279-1.536zm-5.173-2.218c-.216-.374-.418-.75-.613-1.125-.274.652-.501 1.278-.687 1.877.612.138 1.267.255 1.969.343-.228-.357-.453-.72-.669-1.095zm0-4.495c.217-.376.441-.739.667-1.093-.702.088-1.358.206-1.97.344.191.61.421 1.236.69 1.874.194-.374.396-.749.613-1.125zm2.615-2.216c.42-.019.845-.031 1.279-.031.434 0 .86.012 1.28.031-.419-.553-.847-1.066-1.281-1.538-.424.46-.852.976-1.278 1.538zm5.785 3.342c.274-.651.501-1.278.687-1.876-.612-.138-1.268-.255-1.969-.343.228.357.452.719.668 1.094.218.376.42.751.614 1.125zM6.543 8.082c.901-.207 1.885-.362 2.929-.458.607-.857 1.232-1.631 1.862-2.309-.299-.29-.598-.565-.896-.807-1.098-.894-2.083-1.364-2.816-1.364-.244 0-.46.052-.644.158-.735.424-.985 1.736-.687 3.6.061.379.15.776.252 1.18zm-.664 6.68c.272-.883.629-1.81 1.067-2.762-.433-.939-.792-1.867-1.069-2.761-2.443.698-3.92 1.762-3.92 2.761 0 .999 1.478 2.064 3.922 2.762zm5.453 3.925c-.637-.688-1.261-1.464-1.859-2.31-1.043-.097-2.025-.251-2.926-.457-.618 2.466-.435 4.278.431 4.779.735.422 1.996-.016 3.46-1.206.298-.242.596-.517.894-.806zm6.12-2.767c-.9.206-1.883.361-2.926.457-.598.846-1.223 1.622-1.859 2.31.298.289.597.564.894.806 1.464 1.191 2.728 1.629 3.46 1.206.866-.501 1.049-2.314.431-4.779zM22.043 12c0-.999-1.479-2.064-3.923-2.762-.272.883-.629 1.81-1.067 2.762.438.952.795 1.88 1.067 2.762 2.445-.698 3.923-1.763 3.923-2.762z"
                  fill="#61dafb"
                />
              </svg>
            </span>
          </div>
          <div className="relative flex flex-col items-start gap-y-3 grow p-4 pt-6 pb-24 w-full">
            <h3 className="font-bold text-2xl">{data.title}</h3>
            <p className="text-sm">{data.summary}</p>
            <div className="absolute left-4 right-4 bottom-4 flex justify-between items-center border-t border-black/10 dark:border-white/20 pt-4">
              <Button focusable={false} trigger={count}></Button>
              <h6 className="font-medium tracking-wider text-sm">07.08.22</h6>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default SnippetCard;
