import Head from "next/head";
import Image from "next/image";
import Modal from "react-modal"
import ModalCobrar from "@/components/ModalCobrar";
import useBocados from "@/hooks/useBocados";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        width: '80%',
        maxWidth: '500px',
        zIndex: 30,
        position: 'fixed',
    },
};

Modal.setAppElement('#__next');

export default function AdminLayout({ children, pagina }) {

    const { modal, handleChangeModal, handleChangeModalCobrar } = useBocados()

    return (
        <>
            <Head>
                <title>Café - {pagina}</title>
                <meta name="description" content="Quosco Cafetería" />
            </Head>

            <div className="md:flex">
                <aside className="md:w-4/12 xl:w-3/12 2xl:w-1/5 bg-amber-300">
                    <div className="flex justify-center border border-x-0 border-black pt-2">
                        <Image width={150} height={150} src="/assets/img/logo.svg" alt="Logotipo Bocados Elite" priority />
                    </div>
                </aside>

                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 md:h-screen md:overflow-y-scroll">
                    <div className="p-5 md:p-10">
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
                    <ModalCobrar />
                    <button onClick={handleChangeModal}></button>
                </Modal>
            }

            <ToastContainer />
        </>
    );
}