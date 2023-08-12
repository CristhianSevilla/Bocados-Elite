import Image from "next/image"
import useBocados from "@/hooks/useBocados"

const Categoria = ({ categoria }) => {

    const { categoriaActual, handleClickCategoria, toggleMenu } = useBocados()

    const { nombre, icono, id } = categoria

    return (
        <div className={`${categoriaActual?.id === id ? 'bg-amber-800 text-amber-100' : 'text-amber-950'} w-full border border-amber-950 border-x-0 last-of-type:border-b-2 first-of-type:border-t-2 transition-bg transition-text duration-300 hover:bg-amber-800 hover:text-amber-100`}
        onClick={toggleMenu}
        >
            <button
                type="button"
                className="flex items-center gap-4 px-2 py-3 text-2xl font-bold hover:cursor-pointer w-full text-left"
                onClick={() => handleClickCategoria(id)}
            >
                <Image
                    width={50}
                    height={50}
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