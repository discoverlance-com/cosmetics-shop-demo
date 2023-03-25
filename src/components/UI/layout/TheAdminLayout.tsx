import AppBanner from '~/components/UI/banner/AppBanner';
import TheAdminHeader from './TheAdminHeader';
import TheAdminSidebar from './TheAdminSidebar';

interface Props {
  children: React.ReactNode;
}

const TheAdminLayout = (props: Props) => {
  return (
    <div className="relative bg-white">
      {/* Header */}
      <AppBanner>
        We only keep the data for demo purposes. So changes might not show up or
        be deleted with time.
      </AppBanner>
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
