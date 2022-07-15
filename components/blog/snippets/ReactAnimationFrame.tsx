import { useState } from "react";
import useAnimationFrame from "lib/useAnimationFrame";
import { ClientOnly } from "components/global/ClientOnly";
import Link from "next/link";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [inc, setInc] = useState<number>(0.05);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  const update = () => setCount(count + inc);
  const handlePlayback = () => setIsAnimating(!isAnimating);
  const handleReset = () => setCount(0);

  useAnimationFrame(update, isAnimating);

  return (
    <div className="relative bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 lg:-mx-12 my-10 overflow-hidden">
      <div className="flex justify-between gap-x-6 bg-gray-900/25 pt-4 p-6">
        <div className="flex items-center gap-x-4">
          <button
            onClick={handlePlayback}
            className="font-semibold text-gray-800 bg-gray-100 min-w-[80px] py-2 px-4 rounded shadow"
          >
            {isAnimating ? "Pause" : "Play"}
          </button>
          <button
            onClick={handleReset}
            className="font-semibold text-gray-800 bg-gray-100 min-w-[80px] py-2 px-4 rounded shadow"
          >
            Reset
          </button>
        </div>
        <div className="flex items-center gap-x-4">
          <p className="font-semibold text-center text-white m-0 min-w-[18px]">
            Speed
          </p>
          <button
            className="font-semibold text-gray-800 bg-gray-100 py-2 px-4 rounded shadow"
            onClick={() => setInc((i) => Math.max(0.01, i - 0.01))}
          >
            -
          </button>
          <p className="text-center text-white m-0 min-w-[18px]">
            {Math.round(inc * 100)}
          </p>
          <button
            className="font-semibold text-gray-800 bg-gray-100 py-2 px-4 rounded shadow"
            onClick={() => setInc((i) => Math.min(0.1, i + 0.01))}
          >
            +
          </button>
        </div>
      </div>
      <div className="relative flex justify-center items-center w-full aspect-video">
        <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
          <div
            className="bg-white/10 w-96 h-96 shadow-2xl"
            style={{ transform: `rotate(${count * 6}deg)` }}
          ></div>
        </div>
        <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
          <div
            className="bg-white/10 w-64 h-64 shadow-2xl"
            style={{ transform: `rotate(-${count * 8}deg)` }}
          ></div>
        </div>
        <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
          <div
            className="bg-white/10 w-40 h-40 shadow-2xl"
            style={{ transform: `rotate(${count * 10}deg)` }}
          ></div>
        </div>
        <div className="flex justify-center items-center w-40 h-40">
          <h1 className="font-mono text-4xl">{Math.floor(count)}</h1>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 py-3">
        <Link href="/">
          <a className="text-sm px-4">Source Code</a>
        </Link>
      </div>
    </div>
  );
};

function ReactRAF() {
  return <ClientOnly>{() => <Counter />}</ClientOnly>;
}

export default ReactRAF;
