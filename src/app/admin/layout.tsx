import TheAdminLayout from '~/components/UI/layout/TheAdminLayout';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TheAdminLayout>{children} </TheAdminLayout>
    </div>
  );
}
