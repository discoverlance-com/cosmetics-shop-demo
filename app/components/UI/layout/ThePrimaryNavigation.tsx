import AppNavLink from "~/components/UI/links/AppNavLink";
import AppButtonLink from "../links/AppButtonLink";

const ThePrimaryNavigation = () => {
  return (
    <nav className="flex justify-between max-w-7xl mx-auto mb-8">
      <div className="flex gap-8">
        <AppNavLink to="/">Home</AppNavLink>
        <AppNavLink to="/#products">Products</AppNavLink>
      </div>

      <AppButtonLink to="/admin">Admin</AppButtonLink>
    </nav>
  );
};

export default ThePrimaryNavigation;
