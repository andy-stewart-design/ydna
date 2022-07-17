import { RefObject, useEffect, useRef, useState } from "react";

export interface ContentRect {
  width: number;
  height: number;
}

export default function useResizeObserver(
  target: RefObject<HTMLElement>,
  callback: Function | null = null
) {
  const [contentRect, setContentRect] = useState<ContentRect>({
    width: 0,
    height: 0,
  });
  const observer = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    if (target.current) {
      observer.current = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        setContentRect({ width, height });
        if (callback) callback();
      });
      observer.current.observe(target.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [target, callback]);

  return contentRect;
}
