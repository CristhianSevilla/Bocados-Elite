import { useRouter } from "next/router"

const pasos = [
    { paso: 1, nombre: "Menú", url: "/" },
    { paso: 2, nombre: "Resumen", url: "/resumen" },
    { paso: 3, nombre: "Total", url: "/total" }
]

const Pasos = () => {

    const router = useRouter()

    const calcularProgreso = () => {
        let valor;
        if (router.pathname === "/") {
            valor = 25;
        } else if (router.pathname === "/resumen") {
            valor = 65;
        }else {
            valor == 100
        }
        return valor
    }

    return (
        <>
            <div className="flex justify-between mb-5" >
                {
                    pasos.map(paso => (
                        <button
                            className="text-amber-100 font-bold text-2xl"
                            key={paso.paso}
                            onClick={() => {
                                router.push(paso.url)
                            }}
                        >
                            {paso.nombre}
                        </button>
                    ))
                }
            </div>

            <div className="bg-amber-100 mb-10 rounded-full">
                <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white" style={{width: `${calcularProgreso()}%`}}>

                </div>
            </div>
        </>
    )

}

export default Pasos