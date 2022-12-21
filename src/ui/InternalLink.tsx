import { Link, LinkProps } from "react-router-dom";
import { clsx } from "clsx";

export const InternalLink = (props: LinkProps) => {
  return (
    <Link
      {...props}
      className={clsx("text-blue-600", "hover:underline", props.className)}
    />
  );
};
