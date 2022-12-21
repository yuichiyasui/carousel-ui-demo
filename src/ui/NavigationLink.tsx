import clsx from "clsx";
import { NavLink, NavLinkProps } from "react-router-dom";

type Props = NavLinkProps;

export const NavigationLink = (props: Props) => {
  return (
    <NavLink
      {...props}
      className={(isActive) =>
        clsx(
          isActive ? ["text-blue-600", "hover:underline"] : "cursor-auto",
          props.className,
        )
      }
      end
    >
      {props.children}
    </NavLink>
  );
};
