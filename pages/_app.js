import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import { Header } from '../components'
import { AnimatePresence } from 'framer-motion'
function MyApp({ Component, pageProps }) {
  return <>
      <div className='container-master'>
      <Header/>
        <AnimatePresence mode='wait' >
          <Component {...pageProps} />
        </AnimatePresence>
      </div>
  </>
}

export default appWithTranslation(MyApp)
