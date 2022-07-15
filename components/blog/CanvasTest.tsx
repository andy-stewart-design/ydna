import { useEffect, useRef, useState } from "react";
import useAnimationFrame from "lib/useAnimationFrame";
import { ClientOnly } from "components/global/ClientOnly";
import useResizeObserver, { ContentRect } from "lib/useResizeObserver";

function CustomCanvas() {
  const container = useRef<HTMLDivElement>(null);
  const canvasRef = useRef(null);

  // stateful variables
  const [time, setTime] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [inc, setInc] = useState<number>(0.05);
  const progressTime = () => setTime((t) => t + inc);
  const resetTime = () => setTime((t) => t * 0);
  const handlePlayback = () => setIsAnimating(!isAnimating);

  const setup = (canvas: HTMLCanvasElement) => {
    const { offsetWidth } = container.current!;
    const aspectRatio = 9 / 16;
    canvas.width = offsetWidth;
    canvas.height = offsetWidth * aspectRatio;
  };

  const draw = (ctx: CanvasRenderingContext2D | null, tick: number) => {
    if (ctx) {
      const { width, height } = ctx.canvas;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#222";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "blue";
      ctx.beginPath();
      ctx.arc(
        width / 2,
        height / 2,
        height * 0.3 * Math.sin(tick) ** 2,
        0,
        2 * Math.PI
      );
      ctx.fill();
    }
  };

  // Increment time variable
  useAnimationFrame(progressTime, isAnimating);

  // initialize resize observer for canvas container
  let size: ContentRect = useResizeObserver(container);

  // Run animation based on time
  useEffect(() => {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const ctx = canvas.getContext("2d");
      setup(canvas);
      draw(ctx, time);
    }
  }, [time, size]);

  return (
    <div className="my-8 lg:-mx-12">
      <div className="flex justify-between items-center gap-x-4 mb-4">
        <button
          className="bg-gray-200 dark:bg-gray-800 py-2 px-4 rounded min-w-[80px]"
          onClick={handlePlayback}
        >
          {isAnimating ? "pause" : "play"}
        </button>
        <div className="flex items-center gap-x-4">
          <button
            className="bg-gray-200 dark:bg-gray-800 py-2 px-4 rounded"
            onClick={() => setInc((i) => Math.max(0.01, i - 0.01))}
          >
            -
          </button>
          <p className="m-0">{Math.round(inc * 100)}</p>
          <button
            className="bg-gray-200 dark:bg-gray-800 py-2 px-4 rounded"
            onClick={() => setInc((i) => Math.min(0.1, i + 0.01))}
          >
            +
          </button>
        </div>
        <button
          className="bg-gray-200 dark:bg-gray-800 py-2 px-4 rounded min-w-[80px]"
          onClick={resetTime}
        >
          reset
        </button>
      </div>
      <div ref={container} className="aspect-video bg-black">
        <canvas ref={canvasRef} />
      </div>
      <div className="flex items-center justify-between gap-x-4 mt-4">
        <p className="text-sm m-0">Frame Count: {Math.round(time)}</p>
        <p className="text-sm m-0">Canvas Width: {size.width}</p>
      </div>
    </div>
  );
}

function CanvasTest() {
  return <ClientOnly>{() => <CustomCanvas />}</ClientOnly>;
}

export default CanvasTest;
