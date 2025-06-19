import { ReactNode, useState } from "react";
import AdminSidebar from "./admin-sidebar";
import AdminNavbar from "./admin-navbar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar (show/hide on mobile) */}
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <AdminNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}