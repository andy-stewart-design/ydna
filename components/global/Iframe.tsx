import { useState } from "react";

type Props = {
  src: string;
  className?: string;
};

function Iframe({ src, className }: Props) {
  const [isActive, setIsActive] = useState(false);
  const datasrc = src;
  const classList =
    "absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-200 dark:bg-gray-900 transition-opacity delay-1000 duration-500";
  function load() {
    setIsActive(true);
  }
  return (
    <div className="relative -mx-12">
      <div
        className={
          isActive ? classList + " pointer-events-none opacity-0" : classList
        }
      >
        <button
          onClick={load}
          className="border border-gray-100 min-w-[120px] p-3 px-6 rounded-lg"
        >
          {isActive ? "Loading..." : "Load"}
        </button>
      </div>
      <iframe
        src={isActive ? datasrc : ""}
        className={"w-full aspect-video bg-black " + className}
        allow="clipboard-read; clipboard-write"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default Iframe;
