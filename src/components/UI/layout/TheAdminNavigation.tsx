import AppNavLink from "~/components/UI/links/AppNavLink";
import AppButtonLink from "~/components/UI/links/AppButtonLink";

const TheAdminNavigation = () => {
  return (
    <nav className="flex justify-between max-w-7xl mx-auto mb-8 bg-blue-700 py-3 px-4">
      <div className="flex gap-8">
        <AppNavLink to="/admin">Admin</AppNavLink>
        <AppNavLink to="/admin/products">Products</AppNavLink>
      </div>

      <AppButtonLink to="/">Home</AppButtonLink>
    </nav>
  );
};

export default TheAdminNavigation;
