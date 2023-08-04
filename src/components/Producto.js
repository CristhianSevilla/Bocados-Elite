import Image from "next/image"
import { formatearDinero } from "@/helpers";

const Producto = ({producto}) => {

    const { nombre, imagen, precio } = producto;

  return (
    <div className="border border-amber-100">
        <Image
            src={`/assets/img/${imagen}.jpg`}
            width={300}
            height={400}
            alt={`Imagen de ${nombre}`}
        />

        <div className="p-3">
            <h3 className="text-amber-100 text-2xl">
                {nombre}
            </h3>
            <p className="mt-5 text-amber-500 font-black text-4xl">
                {formatearDinero(precio)}
            </p>
        </div>
    </div>
  )
}

export default Producto