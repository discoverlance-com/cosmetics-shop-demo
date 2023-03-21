import { Outlet } from "@remix-run/react";

import TheAdminLayout from "~/components/UI/layout/TheAdminLayout";

export const meta = () => ({
  title: "Admin - My Cosmetics",
});

export default function Index() {
  return (
    <TheAdminLayout>
      <>
        <Outlet />
      </>
    </TheAdminLayout>
  );
}
