import Image from "next/image"
import { formatearDinero } from "@/helpers";
import useBocados from "@/hooks/useBocados";

const Producto = ({ producto }) => {

    const { nombre, imagen, precio } = producto;
    const { handleSetProducto, handleChangeModal } = useBocados()

    return (
        <div className="border border-amber-100 relative pb-16">
            <Image
                src={`/assets/img/${imagen}.jpg`}
                width={300}
                height={400}
                alt={`Imagen de ${nombre}`}
            />

            <div className="p-3 pb-9 relative">
                <h3 className="text-amber-100 text-xl">
                    {nombre}
                </h3>
            </div>

            <p className="absolute bottom-12 right-3 mb-3 text-amber-500  font-black text-3xl">
                {formatearDinero(precio)}
            </p>

            <button
                className="absolute bottom-0 left-0 w-full bg-amber-200 hover:bg-amber-300 text-amber-950 mt-5 font-black text-xl md:text-2xl uppercase p-1.5"
                type="button"
                onClick={() => {
                    handleChangeModal()
                    handleSetProducto(producto)
                }}
            >
                Agregar
            </button>
        </div>
    )
}

export default Producto