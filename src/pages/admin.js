import useSWR from "swr";
import axios from "axios";
import AdminLayout from "@/layout/AdminLayout";
import Orden from "@/components/Orden";
import useBocados from "@/hooks/useBocados";
import { useEffect, useState } from "react";

export default function Admin() {
  const { setLoading } = useBocados();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // Consultar con axios utilizando promises
  const fetcher = async () => {
    try {
      // Solo activar el estado de carga en la primera carga
      if (isFirstLoad) {
        setLoading(true);
      }

      const response = await axios("/api/ordenes");
      return response.data;
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      // Puedes manejar el error de alguna manera, por ejemplo, retornando un valor por defecto
      return null;
    } finally {
      // Solo desactivar el estado de carga después de la primera carga
      if (isFirstLoad) {
        setLoading(false);
        setIsFirstLoad(false);
      }
    }
  };

  // UseSWR para obtener los datos
  const { data, error, isLoading } = useSWR("/api/ordenes", fetcher, {
    refreshInterval: 3000,
  });

  // Opcional: Puedes controlar el estado de carga adicionalmente aquí si es necesario
  useEffect(() => {
    if (!isLoading && !isFirstLoad) {
      setLoading(false);
    }
  }, [isLoading]);

  return (
    <AdminLayout pagina={"Admin"}>
      <h1 className="text-amber-100 text-4xl font-bold mt-10">
        Panel de Administración
      </h1>

      <p className="text-2xl mt-5 mb-10 text-amber-100">
        Administra tus ordenes
      </p>

      {data && data.length ? (
        data.map((orden) => <Orden key={orden.id} orden={orden} />)
      ) : (
        <p className="text-center text-amber-200 text-2xl mb-20">
          No Hay Ordenes Pendientes
        </p>
      )}
    </AdminLayout>
  );
}
