import Head from "next/head"
import { ToastContainer } from "react-toastify";
import Modal from "react-modal"
import Sidebar from "@/components/Sidebar"
import ModalProducto from "@/components/ModalProducto";
import Pasos from "@/components/Pasos";
import useBocados from "@/hooks/useBocados";
//Hoja de estilos de tostify
import "react-toastify/dist/ReactToastify.css"

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Color del fondo del modal
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#000', // Color del fondo del contenido del modal
    width: '75%',
    maxWidth: '800px',
  },
};

Modal.setAppElement('#__next');


export default function Layout({ children, pagina }) {

  const { modal, pedido, handleChangeModal } = useBocados()
  return (
    <>
      <Head>
        <title>BocadosElite - {pagina}</title>
        <meta name="description" content="Quiosco Bocados Élite" />
      </Head>

      <div className="md:flex ">
        <aside className="md:w-4/12 xl:w-3/12 2xl:w-1/5 bg-amber-400 md:bg-amber-300 fixed md:static w-full z-50">
          <Sidebar />
        </aside>

        <main className="md:w-8/12 xl:w-9/12 2xl:w-4/5 md:h-screen md:overflow-y-scroll">
          <div className="py-10 px-5 md:px-8 xl:px-12">
            <Pasos />
            {children}

          </div>
        </main>
      </div>

      {
        <Modal
          isOpen={modal}
          style={customStyles}
          onRequestClose={handleChangeModal} // Configurando la función para cerrar el modal
        >
          <ModalProducto />
          <button onClick={handleChangeModal}></button>
        </Modal>
      }

      <ToastContainer />

    </>
  )
}
