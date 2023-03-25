import TheAdminHeader from './TheAdminHeader';
import TheAdminNavigation from './TheAdminHeader';
import TheAdminSidebar from './TheAdminSidebar';

interface Props {
  children: React.ReactNode;
}

const TheAdminLayout = (props: Props) => {
  return (
    <div className="relative bg-white">
      {/* Header */}
      <TheAdminHeader />
      {/* Sidebar */}
      <TheAdminSidebar />
      {/* Main page content */}
      <main className="p-4 sm:ml-64 text-gray-700">
        <div className="p-4 mt-14">{props.children}</div>
      </main>
    </div>
  );
};

export default TheAdminLayout;
