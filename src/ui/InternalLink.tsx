import { Link, LinkProps } from "react-router-dom";

export const InternalLink = (props: LinkProps) => {
  return (
    <Link
      {...props}
      className={`text-blue-600 hover:underline ${
        props.className ? props.className : ""
      }`}
    />
  );
};
