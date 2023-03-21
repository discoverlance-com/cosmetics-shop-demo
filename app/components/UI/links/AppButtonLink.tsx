import { Link } from "@remix-run/react";
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

const AppButtonLink = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { children, to, className, ...rest } = props;
  return (
    <Link
      to={to}
      className={`bg-white px-4 py-2 rounded text-gray-700 shadow shadow-white/50 transition-all duration-300 hover:translate-y-1 hover:rounded-none focus:ring-4 focus:ring-blue-200 outline-none focus:outline-none  ${
        className ?? ""
      }`}
      {...rest}
      ref={ref}
    >
      {children}
    </Link>
  );
});

AppButtonLink.displayName = "AppButtonLink";
export default AppButtonLink;
