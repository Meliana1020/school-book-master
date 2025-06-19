import { Routes, Route} from "react-router-dom";
import AdminLayout from "@/components/layouts/admin-layout";
import Dashboard from "@/pages/admin/dashboard";
import SiswaList from "@/pages/admin/siswa-list";
// import GuruList from "@/pages/admin/guru-list";
// import MutasiList from "@/pages/admin/mutasi-list";

export default function AdminRoutes() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/siswa/*" element={<SiswaList />} />
        {/* <Route path="/guru/*" element={<GuruList />} />
        <Route path="/mutasi/*" element={<MutasiList />} />
        <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </AdminLayout>
  );
}