import useSWR from "swr"
import axios from "axios"
import AdminLayout from "@/layout/AdminLayout"
import Orden from "@/components/Orden"

export default function Admin() {

    //Consultar con axios utilizando promises
    const fetcher = () => axios('/api/ordenes').then(datos => datos.data)

    //UseSWR para obtener los datos
    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, {refreshInterval: 100})

    return (
        <AdminLayout pagina={"Admin"}>

            <h1 className="text-amber-100 text-4xl font-bold mt-10">Panel de Administración</h1>

            <p className="text-2xl mt-5 mb-10 text-amber-100">Administra tus ordenes</p>

            {
                data && data.length
                    ?
                    data.map(orden =>
                        <Orden
                            key={orden.id}
                            orden={orden}
                        />
                    )
                    :
                    <p className="text-center text-amber-200 text-2xl mb-20">No Hay Ordenes Pendientes</p>
            }
        </AdminLayout>
    )
}