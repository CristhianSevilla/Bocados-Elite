import { useRouter } from "next/router"
import useBocados from "@/hooks/useBocados"

const pasos = [
    { paso: 1, nombre: "Menú", url: "/" },
    { paso: 2, nombre: "Resumen", url: "/resumen" },
    { paso: 3, nombre: "Total", url: "/total" }
]

const Pasos = () => {

    const router = useRouter()
    const { handleChangePaso, paso } = useBocados()

    const calcularProgreso = () => {
        // const porcentaje = (paso / 3) * 100;
        // return porcentaje;
        let valor;
        if (paso === 1) {
            valor = 25;
        } else if (paso === 2) {
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
                                handleChangePaso(paso.paso)
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