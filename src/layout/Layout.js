import Head from "next/head"
import Sidebar from "@/components/Sidebar"
import Modal from "react-modal"
import useBocados from "@/hooks/useBocados";

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Color del fondo del modal
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#000', // Color del fondo del contenido del modal
  },
};

Modal.setAppElement('#__next');


export default function Layout({ children, pagina }) {

  const { modal } = useBocados()

  return (
    <>
      <Head>
        <title>BocadosElite - {pagina}</title>
        <meta name="description" content="Quiosco Bocados Élite" />
      </Head>

      <div className="md:flex ">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 bg-amber-300 ">
          <Sidebar />
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 md:h-screen md:overflow-y-scroll">
          <div className="pt-14 pb-10 px-5 xl:px-10">
            {children}
          </div>
        </main>
      </div>

      {
        modal && (
          <Modal
            isOpen={modal}
            style={customStyles}
          >
            <h1>Modal</h1>
          </Modal>
        )
      }
    </>
  )
}
