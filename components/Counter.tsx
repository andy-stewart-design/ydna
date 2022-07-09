import { useState } from "react";

export default function Counter() {
  const [index, setIndex] = useState(0);
  const handleClick = () => setIndex(index + 1);

  return (
    <button
      className="bg-black text-white dark:bg-gray-100 dark:text-gray-900 w-24 p-2"
      onClick={handleClick}
    >
      {index}
    </button>
  );
}
