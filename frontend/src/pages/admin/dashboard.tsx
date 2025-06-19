import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export default function Dashboard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: () => api.get('/admin/dashboard').then(res => res.data),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Gagal memuat data dashboard</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <h2 className="text-sm font-semibold">Total Siswa</h2>
        <div className="text-3xl font-bold">{data?.siswa ?? 0}</div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <h2 className="text-sm font-semibold">Total Guru</h2>
        <div className="text-3xl font-bold">{data?.guru ?? 0}</div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <h2 className="text-sm font-semibold">Total Mutasi</h2>
        <div className="text-3xl font-bold">{data?.mutasi ?? 0}</div>
      </div>
    </div>
  );
}