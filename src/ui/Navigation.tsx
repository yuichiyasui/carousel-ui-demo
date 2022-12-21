import { clsx } from "clsx";

import { InternalLink } from "~/ui/InternalLink";

type Props = {
  className?: string;
};

export const Navigation = ({ className }: Props) => {
  return (
    <nav className={clsx("table", className)}>
      <ul className={clsx("flex", "gap-x-5")}>
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
