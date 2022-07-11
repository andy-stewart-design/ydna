import useResizeObserver from "lib/useResizeObserver";
import { useRef } from "react";

const ROTest = () => {
  const container = useRef<HTMLDivElement>(null);
  const { width, height } = useResizeObserver(container);
  return (
    <div
      ref={container}
      className="flex justify-center items-center font-mono text-xl w-full aspect-video bg-blue-600"
    >
      <span className="py-40">
        {Math.round(width)} x {Math.round(height)}
      </span>
    </div>
  );
};

export default ROTest;
