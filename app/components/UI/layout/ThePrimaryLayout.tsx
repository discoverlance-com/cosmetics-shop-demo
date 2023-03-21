import ThePrimaryFooter from "./ThePrimaryFooter";
import ThePrimaryNavigation from "./ThePrimaryNavigation";

interface Props {
  children: React.ReactNode;
}

const ThePrimaryLayout = (props: Props) => {
  return (
    <div className="bg-blue-700 pt-4 pl-4 pr-4 relative">
      {/* Navigation */}
      <ThePrimaryNavigation />
      {/* Main page content */}
      <main className="max-w-7xl mx-auto pb-16">{props.children}</main>

      <ThePrimaryFooter />
    </div>
  );
};

export default ThePrimaryLayout;
