import { PropsWithChildren } from "react";

const SectionTitle = ({ children }: PropsWithChildren) => {
  return <h2 className="text-lg font-semibold">{children}</h2>;
};

export default SectionTitle;
