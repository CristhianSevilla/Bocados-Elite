import { useRouter } from "next/router"
import Image from "next/image";
import useBocados from "@/hooks/useBocados";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categorias, toggleMenu, menuOpen } = useBocados();

  const router = useRouter()

  return (
    <>
      <div className="flex justify-between md:justify-center h-20 md:h-auto py-2 md:py-0 ">
        <Image width={150} height={150} src="/assets/img/logo.svg" alt="Logotipo Bocados Elite" priority onClick={() => {
          router.push("/")
        }} />
        {/* Botón de hamburguesa para mostrar/ocultar el menú */}
        <div className="mt-4 mr-10 flex justify-center md:hidden">
          <button
            className="text-xl flex items-center gap-3 font-bold text-amber-950 uppercase"
            onClick={toggleMenu}
          >

            Bocaditos
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
            </svg>

          </button>
        </div>
      </div>

      {/* Mostrar el menú de hamburguesa solo en dispositivos móviles */}
      <nav className={`mt-4 ${menuOpen ? "block" : "hidden"} md:hidden`}>
        {categorias.map(categoria => (
          <Categoria
            key={categoria.id}
            categoria={categoria}
          />
        ))}
      </nav>

      {/* Menú completo para laptops y tabletas */}
      <nav className="hidden mt-4 md:block">
        {categorias.map(categoria => (
          <Categoria
            key={categoria.id}
            categoria={categoria}
            onClick={toggleMenu}
          />
        ))}
      </nav>
    </>
  )
}

export default Sidebar;
