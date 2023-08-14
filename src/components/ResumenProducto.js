import Image from "next/image"
import { formatearDinero } from "@/helpers"
import useBocados from "@/hooks/useBocados"

const ResumenProducto = ({ producto }) => {

    const { handleEditarCantidad, handleEliminarProducto } = useBocados()
    return (
        <div className="shadow rounded-md border md:border-0 border-amber-100 md:shadow-amber-700 mb-10 md:flex md:gap-4 xl:gap-10 md:items-center md:pr-3 xl:pr-5 relative pb-28 md:pb-0">
            <div className="md:w-4/12 xl:w-3/12">
                <Image
                    width={750}
                    height={850}
                    alt={`Imagen de  ${producto.nombre}`}
                    src={`/assets/img/${producto.imagen}.jpg`}
                    className="rounded-t-md md:rounded-none md:rounded-l-md"
                    priority
                />
            </div>

            <div className="md:w-5/12 xl:w-7/12 px-3 pt-2 md:p-0">
                <p className="md:text-xl xl:text-2xl text-amber-500 font-bold xl:pb-4">{producto.nombre}</p>
                <p className="md:text-lg xl:text-2xl text-amber-100 md:font-bold">Precio: {formatearDinero(producto.precio)}</p>
                <p className="md:text-lg xl:text-2xl text-amber-100 md:font-bold"> {`Cantidad: ${producto.cantidad}`}</p>
                <p className="md:text-xl xl:text-2xl  text-lime-600 font-bold">Subtotal: {formatearDinero(producto.precio * producto.cantidad)}</p>
            </div>

            <div className="absolute w-full md:w-3/12 xl:w-2/12 mb-4 px-3 md:p-0 bottom-0 md:relative md:mb-0">
                <button
                    type="button"
                    className="bg-lime-500 text-amber-950 px-4 py-1 xl:py-2 rounded font-bold uppercase shadow shadow-lime-200 w-full hover:bg-lime-600 "
                    onClick={() => handleEditarCantidad(producto.id)}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="bg-red-600 hover:bg-red-700 text-amber-100 flex px-4 py-1 xl:py-2 rounded font-bold uppercase shadow shadow-red-400 w-full justify-center mt-5"
                    onClick={() => handleEliminarProducto(producto.id)}
                    >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default ResumenProducto