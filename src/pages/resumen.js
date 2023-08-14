import Layout from "@/layout/Layout"
import ResumenProducto from "@/components/ResumenProducto"
import useBocados from "@/hooks/useBocados"
import Pasos from "@/components/Pasos"


export default function Resumen() {

    const { pedido } = useBocados()

    return (
        <Layout
            pagina='Resumen'
        >

            <h1 className="text-amber-100 text-4xl font-bold mt-10">Resumen</h1>
            <p className="text-2xl mt-5 mb-10 text-amber-100">Revisa tu pedido</p>

            {
                pedido.length === 0 ? (

                    <>
                        <p className="text-center text-amber-200 text-xl md:text-2xl mt-15 mb-5 px-10">Aún no agregas Bocaditos</p>
                        <p className="text-center text-amber-400 text-xl md:text-2xl">¡Ve al Menú y Elige tus Favoritos!</p>
                    </>

                ) : (
                    <div className="grid grid-cols-2 gap-5 md:block">
                    {  pedido.map(producto => (
                        <ResumenProducto
                            key={producto.id}
                            producto={producto}
                        />
                        ))}
                    </div>
                )
            }

            {
                pedido.length >= 3 ? <Pasos /> : ''
            }

        </Layout>
    )
}

