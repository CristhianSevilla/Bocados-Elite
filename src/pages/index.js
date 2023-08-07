import Layout from "@/layout/Layout"
import useBocados from "@/hooks/useBocados"
import Producto from "@/components/Producto"
import Pasos from "@/components/Pasos"

export default function Home() {

  const { categoriaActual, pedido } = useBocados()

  return (
    <Layout
      pagina={categoriaActual?.nombre}
    >

      <h1 className="text-amber-100 text-4xl font-bold mt-10">{categoriaActual?.nombre}</h1>

      <p className="text-2xl mt-5 mb-10 text-amber-100">Elige y Personaliza tu pedido</p>

      <div className="grid gap-6 md:gap-8 xl:gap-10 grid-cols-2 xl:grid-cols-4 mb-10">
        {categoriaActual?.productos?.map(producto => (
          <Producto
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>

      <Pasos />
    </Layout>
  )
}
