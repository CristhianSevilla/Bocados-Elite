import Image from "next/image"
import { formatearDinero } from "@/helpers"

const ResumenProducto = ({producto}) => {
  return (
    <div className="shadow rounded-md shadow-amber-100 mb-10 flex gap-10 items-center">
        <div className="md:w-3/12">
            <Image
                width={400}
                height={500}
                alt={`Imagen de  ${producto.nombre}`}
                src={`/assets/img/${producto.imagen}.jpg`}
                className="rounded-l-md"
            />
        </div>

        <div className="md:w-9/12">
            <p className="text-3xl text-amber-500 font-bold">{producto.nombre}</p>
            <p className="text-2xl text-amber-100 font-bold">Precio: {formatearDinero(producto.precio)}</p>
            <p className="text-2xl text-amber-100 font-bold"> {`Cantidad: ${producto.cantidad}`}</p>
            <p className="text-2xl text-lime-600 font-bold">Subtotal: {formatearDinero(producto.precio * producto.cantidad)}</p>
        </div>
    </div>
  )
}

export default ResumenProducto