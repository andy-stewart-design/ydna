import useResizeObserver from "lib/useResizeObserver";
import { useEffect, useRef, useState } from "react";

const ROTest = () => {
  const observed = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  const [sizeX, setSizeX] = useState({ min: 200, value: 400, max: 600 });
  const [sizeY, setSizeY] = useState({ min: 100, value: 200, max: 300 });

  const { width, height } = useResizeObserver(observed);

  useEffect(() => {
    console.log(container.current);

    if (container.current) {
      const width = container.current.offsetWidth / 2;
      const height = container.current.offsetHeight / 2;
      const offsetX = container.current.offsetWidth / 4;
      const offsetY = container.current.offsetHeight / 4;
      setSizeX({
        min: width - offsetX,
        value: width,
        max: width + offsetX,
      });
      setSizeY({
        min: height - offsetY,
        value: height,
        max: height + offsetY,
      });
    }
  }, []);

  return (
    <div
      ref={container}
      className="bg-gradient-to-br from-pink-600 to-blue-600 lg:-mx-12 my-10"
    >
      <div className="flex justify-center items-center w-full aspect-video min-h-[360px]">
        <div
          ref={observed}
          className="flex justify-center items-center font-mono text-lg text-gray-800 bg-white rounded-2xl shadow-xl"
          style={{ width: sizeX.value, height: sizeY.value }}
        >
          {Math.round(width)} x {Math.round(height)}
        </div>
      </div>
      <div className="flex gap-x-6 bg-gray-900/25 pt-4 p-6">
        <div className="flex flex-col gap-y-2 grow">
          <label className="text-sm font-medium" htmlFor="width">
            Width
          </label>
          <input
            className="w-full h-1 bg-gray-200 rounded-sm appearance-none cursor-pointer dark:bg-white/10 focus:outline-1 focus:outline-white focus:outline-offset-4"
            type="range"
            id="width"
            name="width"
            min={sizeX.min}
            max={sizeX.max}
            value={sizeX.value}
            onChange={(e) => {
              setSizeX({ ...sizeX, value: parseInt(e.target.value) });
            }}
          />
        </div>
        <div className="flex flex-col gap-y-2 grow">
          <label className="text-sm font-medium" htmlFor="width">
            Height
          </label>
          <input
            className="w-full h-1 bg-gray-200 rounded-sm appearance-none cursor-pointer dark:bg-white/10 focus:outline-1 focus:outline-white focus:outline-offset-4"
            type="range"
            id="width"
            name="width"
            min={sizeY.min}
            max={sizeY.max}
            value={sizeY.value}
            onChange={(e) => {
              setSizeY({ ...sizeY, value: parseInt(e.target.value) });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ROTest;
