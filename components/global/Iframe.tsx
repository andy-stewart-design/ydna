import { useState } from "react";

type Props = {
  src: string;
  className?: string;
};

function Iframe({ src, className }: Props) {
  const [isActive, setIsActive] = useState(false);
  const datasrc = src;
  const classList =
    "absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-200 dark:bg-gray-900 transition-opacity duration-500";
  function load() {
    setIsActive(true);
  }
  return (
    <div className="relative -mx-12">
      <div className={isActive ? classList + " opacity-0" : classList}>
        <button
          onClick={load}
          className="border border-gray-100 p-3 px-6 rounded-lg"
        >
          Load
        </button>
      </div>
      <iframe
        src={isActive ? datasrc : ""}
        className={"w-full aspect-video bg-black " + className}
        allow="fullscreen"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default Iframe;
