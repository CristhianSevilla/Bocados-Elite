import { useEffect, useState, createContext } from "react";
import axios from "axios"
import { toast } from "react-toastify"
import { useRouter } from "next/router";

const BocadosContext = createContext()

const BocadosProvider = ({ children }) => {

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [nombre, setNombre] = useState('')
    const [total, setTotal] = useState(0)

    const router = useRouter()

    // Consultar API
    useEffect(() => {
        const obtenerCategorias = async () => {
            const { data } = await axios('/api/categorias')
            setCategorias(data)
        }
        obtenerCategorias()
    }, [])

    //Cargar una categoria la primera vez que se renderiza la pagina
    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    //Calcular Total
    useEffect(() => {
        const totalFinal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)

        setTotal(totalFinal);
    }, [pedido])

    //Obtener categoria actual
    const handleClickCategoria = id => {
        const categoria = categorias.filter(cat => cat.id === id)
        setCategoriaActual(categoria[0])
        router.push('/')
    }

    //Agregar el Producto al State
    const handleSetProducto = producto => {
        setProducto(producto)
    }

    //Activar o desactivar modal
    const handleChangeModal = () => {
        setModal(!modal)
    }

    //Agregar un pedido
    const handleAgregarPedido = ({ categoriaId, ...producto }) => {
        //Comprobar si el producto ya esta en el pedido
        if (pedido.some(productoState => productoState.id === producto.id)) {
            //Actualizar la cantidad
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
            setPedido(pedidoActualizado)

            //Mostrar Notificación
            toast.success(`Pedido Actualizado con: ${producto.cantidad} ${producto.nombre} `,
                {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                }
            )
        } else {
            setPedido([...pedido, producto])

            //Mostrar Notificación
            toast.success(`¡${producto.cantidad} Bocadito${producto.cantidad > 1 ? 's' : ''} Agregado${producto.cantidad > 1 ? 's' : ''} al Pedido!`,
                {
                    position: "top-right",
                    autoClose: 3800,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                }
            )
        }

        //Asegurar que el modal se cierre cuando se agrega al pedido
        setModal(false)
    }

    //Editar catidad del producto en el pedido
    const handleEditarCantidad = (id) => {
        const productoActuActualizar = pedido.filter(producto => producto.id === id)
        setProducto(productoActuActualizar[0])
        setModal(!modal)
    }

    //Eliminar el producto del pedido
    const handleEliminarProducto = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
    }

    //
    const colocarOrden = async (e) => {
        e.preventDefault()

        try {
            const { data } = await axios.post("/api/ordenes", {pedido, nombre, total, fecha: Date.now().toString()})
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <BocadosContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                producto,
                handleSetProducto,
                modal,
                handleChangeModal,
                handleAgregarPedido,
                pedido,
                handleEditarCantidad,
                handleEliminarProducto,
                nombre,
                setNombre,
                colocarOrden,
                total
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