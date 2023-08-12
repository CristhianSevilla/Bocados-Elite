import { useState, useEffect } from "react"
import Image from "next/image"
import useBocados from "@/hooks/useBocados"
import { formatearDinero } from "@/helpers"

const ModalProducto = () => {

    const { producto, handleChangeModal, handleAgregarPedido, pedido } = useBocados()
    const [cantidad, setCantidad] = useState(1)
    const [edicion, setEdicion] = useState(false)
    useEffect(() => {
        //Comprobar si el Modal Actual esta en el pedido
        if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
            const productoEdicion = pedido.find((pedidoState) => pedidoState.id === producto.id);
            setEdicion(true)
            setCantidad(productoEdicion.cantidad)
        }
    }, [producto, pedido])

    return (
        <div className="md:flex md:gap-5 xl:gap-10 relative">
            <div className="absolute right-0 top-0 text-amber-100">
                <button
                    onClick={handleChangeModal}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            <div className="md:w-1/3">
                <Image
                    width={400}
                    height={500}
                    alt={`imagen de ${producto.imagen}`}
                    src={`/assets/img/${producto.imagen}.jpg`}
                />
            </div>
            <div className="md:w-2/3">

                <h1 className="text-2xl xl:text-3xl font-bold mt-5 text-amber-100">{producto.nombre}</h1>
                <p className="mt-2 xl:mt-5 font-black text-3xl xl:text-5xl text-amber-500">
                    {formatearDinero(producto.precio)}
                </p>
                <div className="flex gap-5 mt-2 xl:mt-5 text-amber-100">
                    <button
                        type="button"
                        onClick={() => {
                            if (cantidad <= 1) return
                            setCantidad(cantidad - 1)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </button>

                    <p className="text-3xl">{cantidad}</p>

                    <button
                        type="button"
                        onClick={() => {
                            if (cantidad >= 10) return
                            setCantidad(cantidad + 1)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>

                <button
                    type="button"
                    className="w-full bg-amber-200 hover:bg-lime-600 text-amber-950 mt-3 xl:mt-5 font-bold text-lg md:text-2xl uppercase p-1.5"
                    onClick={() => handleAgregarPedido({ ...producto, cantidad })}
                >
                    {edicion ? "Guardar Cambios" : "Agregar al pedido"}
                </button>
            </div>
        </div>
    )
}

export default ModalProducto