import { useEffect, useCallback } from "react"
import Layout from "@/layout/Layout"
import useBocados from "@/hooks/useBocados"
import { formatearDinero } from "@/helpers"

export default function Total() {

    const { pedido, nombre, setNombre, colocarOrden, total } = useBocados()

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === '' || nombre.length < 3
    }, [pedido, nombre])

    useEffect(() => {
        comprobarPedido()
    }, [pedido, comprobarPedido])

    return (
        <Layout
            pagina='Total'
        >
            <h1 className="text-amber-100 text-4xl font-bold mt-10">Total</h1>
            <p className="text-2xl mt-5 mb-10 text-amber-100">¡Confirma tu pedido!</p>

            <form
                onSubmit={colocarOrden}
                >
                <div>
                    <label
                        htmlFor="nombre"
                        className="block text-amber-100 text-2xl"
                    >Nombre:</label>
                    <input
                        id="nombre"
                        type="text"
                        className="bg-gray-200 text-amber-950 w-full xl:w-1/3 mt-3 rounded-md py-2 text-xl font-bold pl-3"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="mt-10 text-amber-100 text-2xl">
                    <p>Total a Pagar: {''} <span className="font-bold text-lime-600 text-3xl">{formatearDinero(total)}</span></p>
                </div>
                <div className="mt-10">
                    <input
                        type="submit"
                        value="Confirmar Pedido"
                        className={`${comprobarPedido() ? 'bg-indigo-100' : 'hover:bg-lime-600  bg-lime-500 hover:cursor-pointer'} w-full xl:w-auto  text-amber-950 mt-5 font-bold text-xl uppercase px-5 py-2 text-center rounded `}
                        disabled={comprobarPedido()}
                    />
                </div>
            </form>


        </Layout>
    )
}