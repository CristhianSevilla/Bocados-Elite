import Image from "next/image"
import useBocados from "@/hooks/useBocados"
import { formatearDinero } from "@/helpers"

function Orden({ orden }) {

    const { id, nombre, total, pedido } = orden
    const { handleChangeModal, setOrden } = useBocados()

    const handleSetOrden = (orden) => {
        setOrden(orden)
    }

    return (
        <div className="shadow shadow-amber-700 rounded-md border-2 border-amber-800  mb-10 p-3 md:p-5 xl:px-10">
            <div>
                <h1 className="text-amber-100 text-3xl font-bold">Orden: {id}</h1>

                <p className="text-2xl my-3 md:my-4 text-amber-100">Cliente: {nombre}</p>
            </div>
            <div>
                {
                    pedido.map(platillo =>
                    (<div key={platillo.id} className="flex md:gap-5 py-3 border-b border-gray-400 items-center">
                        <div className="w-32">
                            <Image
                                width={400}
                                height={500}
                                src={`/assets/img/${platillo.imagen}.jpg`}
                                alt={`Imagen de ${platillo.imagen}`}
                            />
                        </div>
                        <div className="p-5 space-y-2">
                            <h4 className="text-lg md:text-xl xl:text-2xl text-amber-500 font-bold xl:pb-4">{platillo.nombre}</h4>
                            <p className="font-bold text-amber-100 text-lg">Cantidad: {platillo.cantidad}</p>
                        </div>
                    </div>)
                    )
                }
            </div>
            <div className="xl:flex py-6 px-3 md:items-center xl:justify-between">
                <p className="text-2xl md:text-3xl xl:text-2xl  text-amber-100 font-bold flex justify-between items-end gap-2">Total a Pagar: <span className="text-lime-600 text-3xl md:text-4xl xl:text-3xl">{formatearDinero(total)}</span></p>
                <button
                    className="w-full xl:w-auto xl:px-16 bg-lime-500 hover:bg-lime-600 text-amber-950 py-3 mt-6 md:mt-8 xl:mt-0 rounded-md font-bold uppercase text-xl"
                    type="button"
                    onClick={() => {
                        handleSetOrden(orden)
                        handleChangeModal()
                    }}
                >
                    Cobrar
                </button>
            </div>
        </div>
    )
}

export default Orden