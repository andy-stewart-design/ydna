import { MutableRefObject, useLayoutEffect, useRef } from "react";

const useAnimationFrame = (
  callback: () => void,
  shouldAnimate: boolean = true,
  props = {}
) => {
  const frame: MutableRefObject<number> = useRef(0);

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
  }, [shouldAnimate, { ...props }]);
};

export default useAnimationFrame;
