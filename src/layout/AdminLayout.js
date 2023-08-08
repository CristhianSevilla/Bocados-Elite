import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children, pagina }) {
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
                    <div className="p-10">
                        {children}
                    </div>
                </main>
            </div>
            <ToastContainer />
        </>
    );
}