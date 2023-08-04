import { useEffect, useState, createContext } from "react";
import axios from "axios"

const BocadosContext = createContext()

const BocadosProvider = ({children}) => {

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)

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

    //Agregar el Producto al State
    const handleSetProducto = producto => {
        setProducto(producto)
    }

    //Activar o desactivar modal
    const handleChangeModal = () => {
        setModal(!modal)
    }


    return(
        <BocadosContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                producto,
                handleSetProducto,
                modal,
                handleChangeModal
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