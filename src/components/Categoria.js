import Image from "next/image"
import useBocados from "@/hooks/useBocados"

const Categoria = ({ categoria }) => {

    const { categoriaActual, handleClickCategoria } = useBocados()
    const { nombre, icono, id } = categoria

    return (
        <div className={`${categoriaActual?.id === id ? 'bg-amber-700 text-amber-100' : ''} w-full border border-black text-amber-950 transition-bg transition-text duration-300 hover:bg-amber-700 hover:text-amber-100`}>
            <button
                type="button"
                className="flex items-center gap-4 px-2 py-3 text-3xl font-bold hover:cursor-pointer w-full text-left font-halant"
                onClick={() => handleClickCategoria(id)}
            >
                <Image
                    width={85}
                    height={85}
                    src={`/assets/img/icono_${icono}.jpg`}
                    alt="Icono"
                    priority
                    className="rounded-full"
                />
                {nombre}
            </button>
        </div>
    )
}

export default Categoria