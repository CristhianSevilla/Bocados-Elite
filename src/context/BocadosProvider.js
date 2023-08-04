import { useEffect, useState, createContext } from "react";
import axios from "axios"

const BocadosContext = createContext()

const BocadosProvider = ({children}) => {

    const [categorias, setCategorias] = useState([]);

    // Consultar API
    useEffect(() => {
        const obtenerCategorias = async () => {
            const {data} = await axios('/api/categorias')
            setCategorias(data)
        }

        obtenerCategorias()
    }, [])


    return(
        <BocadosContext.Provider
            value={{
                categorias
            }}
        >
            {children}
        </BocadosContext.Provider>
    )
}

export {
    BocadosProvider
}

export default BocadosContext