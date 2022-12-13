import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export const PageTitle = ({ children, className }: Props) => {
  return (
    <h1 className={`text-center text-3xl font-bold ${className ?? ""}`}>
      {children}
    </h1>
  );
};
