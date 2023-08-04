import '@/styles/globals.css'
import {BocadosProvider} from '@/context/BocadosProvider'

export default function App({ Component, pageProps }) {
  return(
    <BocadosProvider>
      <Component {...pageProps}/>
    </BocadosProvider>
  )
}
