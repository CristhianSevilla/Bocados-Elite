import "@/styles/globals.css";
import { BocadosProvider } from "@/context/BocadosProvider";
import Spinner from "@/components/Spinner";

export default function App({ Component, pageProps }) {
  return (
    <BocadosProvider>
      <Spinner />
      <Component {...pageProps} />
    </BocadosProvider>
  );
}
