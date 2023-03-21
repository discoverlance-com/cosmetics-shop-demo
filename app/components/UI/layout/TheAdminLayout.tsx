import TheAdminNavigation from "./TheAdminNavigation";

interface Props {
  children: React.ReactNode;
}

const TheAdminLayout = (props: Props) => {
  return (
    <div className="pt-4 pl-4 pr-4 relative bg-white">
      {/* Navigation */}
      <TheAdminNavigation />
      {/* Main page content */}
      <main className="max-w-7xl mx-auto pb-16 text-gray-700">
        {props.children}
      </main>
    </div>
  );
};

export default TheAdminLayout;
