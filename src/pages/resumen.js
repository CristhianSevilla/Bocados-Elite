import Layout from "@/layout/Layout"
import ResumenProducto from "@/components/ResumenProducto"
import useBocados from "@/hooks/useBocados"


export default function Resumen() {

    const {pedido} = useBocados()

    return(
       <Layout
        pagina='Resumen'
       >

        <h1 className="text-amber-100 text-5xl font-black font-halant">Resumen</h1>
        <p className="text-2xl mt-5 mb-10 text-amber-100">Revisa tu pedido</p>

        {
            pedido.length === 0 ? (
                <p className="text-center text-amber-200 text-2xl">Aún no agregas Bocaditos a tu pedido</p>
            ) : (
                pedido.map(producto => (
                    <ResumenProducto
                        key={producto.id}
                        producto={producto}
                    />
                ))
            )
        }

       </Layout>
    )
}

