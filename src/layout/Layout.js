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
    width: '70%',
    maxWidth: '800px',
  },
};

Modal.setAppElement('#__next');


export default function Layout({ children, pagina }) {

  const { modal, handleChangeModal} = useBocados()
  return (
    <>
      <Head>
        <title>BocadosElite - {pagina}</title>
        <meta name="description" content="Quiosco Bocados Élite" />
      </Head>

      <div className="md:flex">
        <aside className={`${modal ? 'z-0' : 'z-10'} md:w-4/12 xl:w-3/12 2xl:w-1/5 bg-amber-400 md:bg-amber-300 fixed md:static w-full md:z-0`}>
          <Sidebar />
        </aside>

        <main className={`${modal ? 'fixed md:static' : ''} md:w-8/12 xl:w-9/12 2xl:w-4/5 md:h-screen md:overflow-y-scroll`}>
          <div className="pt-28 pb-8 md:py-8 px-5 md:px-8 xl:px-12">
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
