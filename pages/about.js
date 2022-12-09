import React,{ useEffect } from 'react'
import { Footer } from '../components'
import photo from '../public/assets/Foto.png'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function about() {
  const {t} = useTranslation('home');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <div className="app_aboutScreen_container">
      <div className="app_aboutScreen">
        <div className="app_aboutScreen_content">
              <p className="app_aboutScreen_title">{t("about-me")}</p>
              <h2 >Kelly Fontoura<span>.</span></h2>

              <p className="app_aboutScreen_description">{t("aboutScreen-text1")}<br></br><br></br>

              {t("aboutScreen-text2")}<br></br><br></br>

              {t("aboutScreen-text3")}<br></br><br></br>

              {t("aboutScreen-text4")}<br></br><br></br>

              {t("aboutScreen-text5")}<br></br><br></br>

              {t("aboutScreen-b-text6")}<br></br><br></br>

              {t("aboutScreen-text7")}<br></br><br></br>

              {t("aboutScreen-text8")}<br></br><br></br>

              {t("aboutScreen-text9")}<br></br><br></br>

              {t("aboutScreen-b-text10")}</p>
        </div>
        <div className="app_aboutScreen_image">
            <img src={photo.src}  alt="Kelly Fountora" />
        </div>
      </div>
    </div>
    <Footer/> 
    </>
  )
}
export async function getStaticProps({locale}){
  return{
    props:{
      ...(await serverSideTranslations(locale, ['home']))
    }
  }
}