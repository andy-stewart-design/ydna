import { useLayoutEffect, useRef } from "react";

const useAnimationFrame = (
  callback: () => void,
  shouldAnimate: boolean = true
) => {
  const frame = useRef<number>(0);

  useLayoutEffect(() => {
    const anim = () => {
      callback();
      frame.current = requestAnimationFrame(anim);
    };

    if (shouldAnimate) {
      frame.current = requestAnimationFrame(anim);
    }

    return () => {
      frame.current && cancelAnimationFrame(frame.current);
    };
  }, [shouldAnimate, callback]);
};

export default useAnimationFrame;
