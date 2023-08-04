import { useEffect, useState, createContext } from "react";

const BocadosContext = createContext()

const BocadosProvider = ({children}) => {

    return(
        <BocadosContext.Provider
            value={{

            }}
        >
            {children}
        </BocadosContext.Provider>
    )
}

export {
    BocadosProvider
}

export default BocadosContext