import Layout from "@/layout/Layout"
import ResumenProducto from "@/components/ResumenProducto"
import useBocados from "@/hooks/useBocados"


export default function Resumen() {

    const { pedido } = useBocados()

    return (
        <Layout
            pagina='Resumen'
        >

            <h1 className="text-amber-100 text-4xl font-bold">Resumen</h1>
            <p className="text-2xl mt-5 mb-10 text-amber-100">Revisa tu pedido</p>

            {/* <dic className="md:grid md:grid-cols-2 md:gap-5 xl:grid-cols-1"> */}
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
            {/* </dic> */}

        </Layout>
    )
}

