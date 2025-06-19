import { HiMenu } from "react-icons/hi";

export default function AdminNavbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="flex items-center h-16 bg-white border-b px-4 shadow md:shadow-none">
      <button
        className="md:hidden mr-4"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <HiMenu className="w-7 h-7" />
      </button>
      <div className="font-bold text-lg">Dashboard Admin</div>
      {/* Bisa tambahkan profil user di kanan */}
    </header>
  );
}