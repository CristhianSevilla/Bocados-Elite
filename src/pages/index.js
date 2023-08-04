import Layout from "@/layout/Layout"
import useBocados from "@/hooks/useBocados"
import Producto from "@/components/Producto"

export default function Home() {

  const { categoriaActual } = useBocados()

  return (
    <Layout
      pagina={categoriaActual?.nombre}
    >

      <h1 className="text-amber-100 text-5xl font-black font-halant">{categoriaActual?.nombre}</h1>

      <p className="text-2xl mt-5 mb-10 text-amber-100">Elige y Personaliza tu pedido</p>

      <div className="grid gap-5 xl:gap-8 grid-cols-2 xl:grid-cols-4 ">
        {categoriaActual?.productos?.map(producto => (
          <Producto
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>

    </Layout>
  )
}
