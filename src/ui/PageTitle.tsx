import { ReactNode } from "react";
import { clsx } from "clsx";

type Props = {
  className?: string;
  children: ReactNode;
};

export const PageTitle = ({ children, className }: Props) => {
  return (
    <h1 className={clsx("text-center", "text-3xl", "font-bold", className)}>
      {children}
    </h1>
  );
};
