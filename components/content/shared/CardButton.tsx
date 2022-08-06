import { timeline } from "motion";
import { useEffect, useRef } from "react";

interface Props {
  focusable?: boolean;
  trigger?: number;
}

const Button = ({ focusable = true, trigger = 0 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && trigger > 0)
      timeline([
        [
          ref.current,
          { x: "200%" },
          { duration: 0.2, easing: [0.83, 0, 0.17, 1] },
        ],
        [ref.current, { x: "-200%" }, { duration: 0.0001 }],
        [
          ref.current,
          { x: "0%" },
          { duration: 0.2, easing: [0.33, 1, 0.68, 1] },
        ],
      ]);
  }, [trigger]);

  return (
    <button
      className="p-2 border border-black/10 dark:border-white/20 rounded-full transition-colors duration-500 ease-out group-hover:border-black/50 dark:group-hover:border-white/50 overflow-hidden"
      tabIndex={focusable ? 0 : -1}
    >
      <div ref={ref}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          xmlSpace="preserve"
          className="w-4"
        >
          <path
            d="m14.707 7.293-6-6-1.414 1.414L11.586 7H1v2h10.586l-4.293 4.293 1.414 1.414 6-6c.391-.391.391-1.023 0-1.414z"
            fill="currentColor"
          />
        </svg>
      </div>
    </button>
  );
};

export default Button;
