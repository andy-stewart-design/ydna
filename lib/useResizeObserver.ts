import { RefObject, useEffect, useRef, useState } from "react";

export interface ContentRect {
  width: number;
  height: number;
}

export default function useResizeObserver(elRef: RefObject<HTMLDivElement>) {
  const [contentRect, setContentRect] = useState<ContentRect>({
    width: 0,
    height: 0,
  });
  const observer = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    if (elRef.current) {
      observer.current = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        setContentRect({ width, height });
      });
      observer.current.observe(elRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  return contentRect;
}
