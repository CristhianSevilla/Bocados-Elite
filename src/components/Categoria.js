import Image from "next/image"

const Categoria = ({ categoria }) => {

    const { nombre, icono, id } = categoria

    return (
        <div className="flex items-center gap-4 w-full border border-amber-950 py-4 px-2 text-amber-950 transition-bg transition-text duration-300 hover:bg-amber-800 hover:text-amber-100">
            <Image
                width={90}
                height={90}
                src={`/assets/img/icono_${icono}.jpg`}
                alt="Icono"
                priority
                className="rounded-full"
            />

            <button
            type="button"
            className="text-2xl font-bold hover:cursor-pointer "
            >
                {nombre}
            </button>
        </div>
    )
}

export default Categoria