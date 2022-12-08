import { useEffect } from 'react'
import { About,EB3, Expertise, Guide, Instagram, News, Footer } from '../components'
import BlueTop from '../components/CustomTops/BlueTop'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/dist/commonjs/serverSideTranslations'

export default function Home() {
  const { t } = useTranslation('common')
  const data = [1]
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    {
    data.length > 0 
    ? 
    <>
      <About /> 
       <EB3 />
      <Expertise />
      <Guide />
      <News />
      <Instagram />
    </>
    : 
    <></>
    }
    <BlueTop />
    <Footer/> 
    </>
    // <div >
    //   <h1>{locale}</h1>
    //   <div>
    //       <h3>{t("about-me")}</h3>
    //       <h1>Choose your locale: </h1>
    //       { locales.map((l)=>(
    //         <button 
    //           key={l} 
    //           onClick={()=>{handleSwitch('pt')}}>
    //             {l}
    //         </button>
    //       ))}
    //   </div>
    // </div>
  )
}
export async function getStaticProps({locale}){
  return{
    props:{
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}
