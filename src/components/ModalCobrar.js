import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import useBocados from "@/hooks/useBocados";
import { formatearDinero } from "@/helpers";
import { toast } from "react-toastify";

const ModalCobrar = () => {
  const { handleChangeModal, orden, setLoading } = useBocados();
  const { id, total } = orden;

  const [montoEntregado, setMontoEntregado] = useState(0);
  const [cambio, setCambio] = useState(0);

  useEffect(() => {
    if (montoEntregado < total) {
      setCambio(0);
    } else {
      setCambio(montoEntregado - total);
    }
  }, [montoEntregado]);

  const comprobarCantidad = useCallback(() => {
    return (
      montoEntregado < total ||
      montoEntregado === 0 ||
      montoEntregado.length === 0
    );
  }, [montoEntregado]);

  useEffect(() => {
    comprobarCantidad();
  }, [montoEntregado, comprobarCantidad]);

  const completarOrden = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(`/api/ordenes/${id}`);
      toast.success("Orden Cobrada Exitosamente");
      handleChangeModal();
    } catch (error) {
      console.log(error);
      toast.error("Acaba de ocurrir un error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <div className="absolute right-0 top-0 text-amber-100">
        <button onClick={handleChangeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      <form onSubmit={completarOrden} className="p-2 pt-12">
        <div className="md:flex md:gap-5 mb-5 items-center">
          <label
            htmlFor="nombre"
            className="md:flex md:justify-end text-amber-100 text-2xl w-52"
          >
            Monto Entregado:
          </label>
          <input
            id="nombre"
            type="number"
            className="bg-gray-100 text-amber-950 w-full xl:w-1/3 mt-3 rounded-md py-2 pl-2 font-bold text-2xl flex-1"
            placeholder={0}
            value={montoEntregado}
            onChange={(e) => setMontoEntregado(e.target.value)}
          />
        </div>

        <div className="md:flex md:gap-5 mb-5 items-center">
          <label
            htmlFor="nombre"
            className="md:flex md:justify-end text-amber-100 text-2xl w-52"
          >
            Monto a Pagar:
          </label>
          <input
            id="nombre"
            type="text"
            className="bg-gray-400 text-amber-950 w-full xl:w-1/3 mt-3 rounded-md py-2 pl-2 font-bold text-2xl flex-1"
            value={formatearDinero(total)}
            disabled={true}
          />
        </div>

        <div className="md:flex md:gap-5 items-center">
          <label
            htmlFor="nombre"
            className="md:flex md:justify-end text-amber-100 text-2xl w-52"
          >
            Cambio:
          </label>
          <input
            id="nombre"
            type="text"
            className="bg-gray-400 text-amber-950 w-full xl:w-1/3 mt-3 rounded-md py-2 pl-2 font-bold text-2xl flex-1"
            value={formatearDinero(cambio)}
            disabled={true}
          />
        </div>

        <div className="mt-10 md:px-5">
          <input
            type="submit"
            value=" Cobrar Pedido"
            className={`${
              comprobarCantidad()
                ? "bg-indigo-100"
                : "hover:bg-lime-600  bg-lime-500 hover:cursor-pointer"
            } w-full  text-amber-950 mt-5 font-bold text-xl uppercase py-2 px-5 text-center rounded`}
            disabled={comprobarCantidad()}
          />
        </div>
      </form>
    </div>
  );
};

export default ModalCobrar;
