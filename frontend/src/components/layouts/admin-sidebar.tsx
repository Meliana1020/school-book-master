import { Link, useLocation } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

const menu = [
  { path: "/admin", label: "Dashboard" },
  { path: "/admin/siswa", label: "Siswa" },
  { path: "/admin/guru", label: "Guru" },
  { path: "/admin/mutasi", label: "Mutasi" },
];

export default function AdminSidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const location = useLocation();
  // Responsive: sidebar slide for mobile
  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className={`fixed z-40 md:static left-0 top-0 h-full w-56 bg-white border-r shadow transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="p-4 text-xl font-bold">Admin Panel</div>
        <nav className="flex flex-col gap-2 px-2">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`rounded px-3 py-2 text-base hover:bg-blue-100 ${
                location.pathname.startsWith(item.path)
                  ? "bg-blue-200 font-semibold"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            className="mt-6 text-left px-3 py-2 rounded hover:bg-red-100 text-red-600"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/auth/login";
            }}
          >
            Logout
          </button>
        </nav>
      </aside>
    </>
  );
}