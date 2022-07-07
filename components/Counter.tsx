import { useState } from "react";

export default function Counter() {
  const [index, setIndex] = useState(0);
  const handleClick = () => setIndex(index + 1);

  return (
    <button className="bg-black w-24 p-2 text-white" onClick={handleClick}>
      {index}
    </button>
  );
}
