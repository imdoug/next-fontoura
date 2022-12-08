import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import { Header } from '../components'

function MyApp({ Component, pageProps }) {
  return <>
    <div className='container-master'>
      <Header/>
      <Component {...pageProps} />
    </div>
  </>
}

export default appWithTranslation(MyApp)
