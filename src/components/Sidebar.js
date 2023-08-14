import { useRouter } from "next/router"
import Image from "next/image";
import useBocados from "@/hooks/useBocados";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categorias, toggleMenu, menuOpen } = useBocados();

  const router = useRouter()

  return (
    <>
      <div className="flex justify-between md:justify-center h-20 md:h-auto px-0 py-2 md:py-0 ">
        <Image width={130} height={130} src="/assets/img/logo.svg" alt="Logotipo Bocados Elite" priority onClick={() => {
          router.push("/")
        }} />
        {/* Botón de hamburguesa para mostrar/ocultar el menú */}
        <div className="mt-4 mr-7 flex justify-center md:hidden">
          <button
            className="text-xl flex items-center gap-3 font-bold text-amber-950 uppercase"
            onClick={toggleMenu}
          >

            Menú

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </button>
        </div>
      </div >

      {/* Mostrar el menú de hamburguesa solo en dispositivos móviles*/}
      <nav className={`${menuOpen ? "block" : "hidden"} md:block`
      }>
        {
          categorias.map(categoria => (
            <Categoria
              key={categoria.id}
              categoria={categoria}
            />
          ))
        }
      </nav >

    </>
  )
}

export default Sidebar;
