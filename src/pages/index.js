import Layout from "@/layout/Layout"
import useBocados from "@/hooks/useBocados"

export default function Home() {

  const { categoriaActual } = useBocados()

  return (
    <Layout
      pagina={categoriaActual?.nombre}
    >

      <h1 className="text-amber-100 text-5xl font-black font-halant">{categoriaActual?.nombre}</h1>

      <p className="text-2xl my-5 text-amber-100">Elige y Personaliza tu pedido</p>

    </Layout>
  )
}
