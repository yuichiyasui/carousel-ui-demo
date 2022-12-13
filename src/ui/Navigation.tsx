import { InternalLink } from "~/ui/InternalLink";

type Props = {
  className?: string;
};

export const Navigation = ({ className }: Props) => {
  return (
    <nav className={`table ${className ? className : ""}`}>
      <ul className="flex gap-x-5">
        <li>
          <InternalLink to="/">TOP</InternalLink>
        </li>
        <li>
          <InternalLink to="/css-modules">CSS Modules</InternalLink>
        </li>
        <li>
          <InternalLink to="/tailwind-css">TailwindCSS</InternalLink>
        </li>
      </ul>
    </nav>
  );
};
