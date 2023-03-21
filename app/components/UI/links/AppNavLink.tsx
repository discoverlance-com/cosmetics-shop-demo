import { NavLink } from "@remix-run/react";
import { forwardRef } from "react";

interface Props
  extends Omit<
    React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    "href"
  > {
  to: string;
}

const AppNavLink = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { children, to, className, ...rest } = props;
  return (
    <NavLink
      to={to}
      className={`px-4 py-2 text-gray-100 bg-inherit hover:bg-blue-600 focus:ring-4 focus:ring-blue-800 outline-none focus:outline-none ${
        className ?? ""
      }`}
      {...rest}
      ref={ref}
    >
      {children}
    </NavLink>
  );
});

AppNavLink.displayName = "AppLink";
export default AppNavLink;
