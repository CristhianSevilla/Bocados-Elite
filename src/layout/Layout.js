import Head from "next/head"
import Sidebar from "@/components/Sidebar"


export default function Layout({children, pagina}) {

    return (
      <>
        <Head>
            <title>BocadosElite - {pagina}</title>
            <meta name="description" content="Quiosco Bocados Élite" />
        </Head>

        <div className="md:flex ">
            <aside className="md:w-5/12 xl:w-1/4 2xl:w-1/5 bg-amber-100">
                <Sidebar/>
            </aside>

            <main className="md:w-7/12 xl:w-3/4 2xl:w-4/5 h-screen ">
                {children}
            </main>
        </div>
      </>
    )
  }
  