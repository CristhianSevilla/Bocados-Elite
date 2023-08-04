import { useContext } from "react";
import BocadosContext from "@/context/BocadosProvider";

const useBocados = () => {
    return useContext(BocadosContext)
}

export default useBocados