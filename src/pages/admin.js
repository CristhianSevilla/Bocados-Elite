import AdminLayout from "@/layout/AdminLayout"

export default function Admin() {
    return (
        <AdminLayout pagina={"Admin"}>
            
      <h1 className="text-amber-100 text-4xl font-bold mt-10">Panel de Administración</h1>

<p className="text-2xl mt-5 mb-10 text-amber-100">Administra tus ordenes</p>
        </AdminLayout>
    )
}