import { useLayoutEffect, useRef } from "react";

const useAnimationFrame = (
  callback: () => void,
  shouldAnimate: boolean = true,
  deps = {}
) => {
  const frame = useRef<number>(0);

  const anim = () => {
    callback();
    frame.current = requestAnimationFrame(anim);
  };

  useLayoutEffect(() => {
    if (shouldAnimate) {
      frame.current = requestAnimationFrame(anim);
    }

    return () => {
      frame.current && cancelAnimationFrame(frame.current);
    };
  }, [shouldAnimate, { ...deps }]);
};

export default useAnimationFrame;
