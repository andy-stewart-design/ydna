import { useLayoutEffect } from "react";

const useAnimationFrame = (
  callback: () => void,
  shouldAnimate: boolean = true,
  props = {}
) => {
  useLayoutEffect(() => {
    let timerId: number;
    if (shouldAnimate) {
      const animate = () => {
        callback();
        timerId = requestAnimationFrame(animate);
      };
      timerId = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(timerId);
  }, [callback, shouldAnimate, props]);
};

export default useAnimationFrame;

// useLayoutEffect(() => {
//     let timerId: number;
//     if (isAnimating) {
//       const animate = () => {
//         setTime((t) => t + inc);
//         timerId = requestAnimationFrame(animate);
//       };
//       timerId = requestAnimationFrame(animate);
//     }
//     return () => cancelAnimationFrame(timerId);
//   }, [isAnimating, inc]);
