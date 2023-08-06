import Image from "next/image"
import { formatearDinero } from "@/helpers"
import useBocados from "@/hooks/useBocados"

const ResumenProducto = ({ producto }) => {

    const { handleEditarCantidad, handleEliminarProducto } = useBocados()
    return (
        <div className="shadow rounded-md shadow-amber-700 mb-10 md:flex md:gap-4 xl:gap-10 md:items-center md:pr-3 xl:pr-5">
            <div className="md:w-4/12 xl:w-3/12">
                <Image
                    width={750}
                    height={850}
                    alt={`Imagen de  ${producto.nombre}`}
                    src={`/assets/img/${producto.imagen}.jpg`}
                    className="rounded-t-md md:rounded-none md:rounded-l-md"
                />
            </div>

            <div className="md:w-5/12 xl:w-7/12 px-5 pt-5 md:p-0">
                <p className="text-3xl md:text-xl xl:text-2xl text-amber-500 font-bold xl:pb-4">{producto.nombre}</p>
                <p className="text-2xl md:text-sm xl:text-2xl  text-amber-100 font-bold">Precio: {formatearDinero(producto.precio)}</p>
                <p className="text-2xl md:text-sm xl:text-2xl  text-amber-100 font-bold"> {`Cantidad: ${producto.cantidad}`}</p>
                <p className="text-2xl md:text-xl xl:text-2xl  text-lime-600 font-bold">Subtotal: {formatearDinero(producto.precio * producto.cantidad)}</p>
            </div>

            <div className="md:w-3/12 xl:w-2/12 p-5 md:p-0">
                <button
                    type="button"
                    className="bg-lime-500 text-amber-950 flex px-4 py-2 md:py-1 xl:py-2 rounded font-bold uppercase shadow shadow-lime-300 w-full justify-center hover:bg-lime-600"
                    onClick={() => handleEditarCantidad(producto.id)}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="bg-amber-400 hover:bg-amber-500 text-amber-950 flex px-4 py-2 md:py-1 xl:py-2 rounded font-bold uppercase shadow shadow-amber-300 w-full justify-center mt-5"
                    onClick={() => handleEliminarProducto(producto.id)}
                    >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default ResumenProducto