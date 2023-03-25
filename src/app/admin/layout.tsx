import TheAdminLayout from '~/components/UI/layout/TheAdminLayout';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TheAdminLayout>{children} </TheAdminLayout>;
}
