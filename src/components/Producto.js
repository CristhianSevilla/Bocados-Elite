import Image from "next/image"
import { formatearDinero } from "@/helpers";
import useBocados from "@/hooks/useBocados";

const Producto = ({ producto }) => {

    const { nombre, imagen, precio } = producto;
    const { handleSetProducto, handleChangeModal } = useBocados()

    return (
        <div className="border border-amber-100 rounded-md relative pb-14">
            <Image
                src={`/assets/img/${imagen}.jpg`}
                width={400}
                height={500}
                alt={`Imagen de ${nombre}`}
                className="rounded-t-md"
                priority
            />

            <div className="px-3 py-2 pb-9 relative">
                <h3 className="text-amber-100 md:text-lg">
                    {nombre}
                </h3>
            </div>

            <p className="absolute bottom-14 right-3 text-amber-500  font-black text-2xl">
                {formatearDinero(precio)}
            </p>

            <button
                className="flex gap-4 justify-center items-center absolute bottom-0 left-0 w-full border-t hover:bg-lime-500 hover:text-amber-950 text-amber-100 mt-5 font-bold md:text-xl uppercase p-1.5"
                type="button"
                onClick={() => {
                    handleChangeModal()
                    handleSetProducto(producto)
                }}
            >
                Agregar

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
            </button>
        </div>
    )
}

export default Producto