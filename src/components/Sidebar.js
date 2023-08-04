import Image from "next/image"
import useBocados from "@/hooks/useBocados"
import Categoria from "./Categoria";

const Sidebar = () => {

  const { categorias } = useBocados();

  return (
    <>
      <div className="flex justify-center border border-black pt-2">
        <Image width={200} height={200} src="/assets/img/logo.svg" alt="Logotipo Bocados Elite" priority />
      </div>

      <nav>
        {categorias.map(categoria => (
          <Categoria
            key={categoria.id}
            categoria={categoria}
          />
        ))}
      </nav>
    </>
  )
}

export default Sidebar