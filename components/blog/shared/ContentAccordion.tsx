import { ReactNode, useState } from "react";

const ContentAccordion = ({ children }: { children: ReactNode }) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  return (
    <div
      onClick={() => setIsHidden(!isHidden)}
      className={"w-full " + (isHidden ? "overflow-hidden h-96" : "")}
    >
      {children}
    </div>
  );
};

export default ContentAccordion;
