import { clsx } from "clsx";
import { NavLink } from "react-router-dom";

import { NavigationLink } from "./NavigationLink";

type Props = {
  className?: string;
};

export const Navigation = ({ className }: Props) => {
  return (
    <nav className={clsx("table", className)}>
      <ul className={clsx("flex", "gap-x-5")}>
        <li>
          <NavigationLink to="/">TOP</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/css-modules">CSS Modules</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/tailwind-css">TailwindCSS</NavigationLink>
        </li>
      </ul>
    </nav>
  );
};
