import { useEffect, useState, createContext } from "react";
import axios from "axios"

const BocadosContext = createContext()

const BocadosProvider = ({children}) => {

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({})

    // Consultar API
    useEffect(() => {
        const obtenerCategorias = async () => {
            const {data} = await axios('/api/categorias')
            setCategorias(data)
        }
        obtenerCategorias()
    }, [])

    //Cargar una categoria la primera vez que se renderiza la pagina
    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    //Obtener categoria actual
    const handleClickCategoria = id => {
        const categoria = categorias.filter(cat => cat.id === id)
        setCategoriaActual(categoria[0])
    }


    return(
        <BocadosContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria
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