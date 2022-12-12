import React,{ useEffect } from 'react'
import { Expertise, Footer } from '../components'
import about_me from '../public/assets/about-me.png'
import logo from '../public/assets/about-logo.png'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Slider from '../components/Carousel/Slider'

export default function About() {
  const {t} = useTranslation('home');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <div className="app_aboutScreen-container">
      <div className="app_aboutScreen">
        <div className="app_aboutScreen-image">
            <img src={about_me.src}  alt="Kelly Fountora" />
        </div>
        <div className="app_aboutScreen-content">
              <p className="app_aboutScreen-title">{t("home-about-title")}</p>
              <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                <img src={logo.src} alt="about-logo" className='app_aboutScreen-logo'/>
              </div>
              <p className="app_aboutScreen-description">{t("aboutScreen-text1")}<br></br><br></br>

              {t("aboutScreen-text2")}<br></br><br></br>

              {t("aboutScreen-text3")}<br></br><br></br>

              {t("aboutScreen-text4")}<br></br><br></br>

              {t("aboutScreen-text5")}<br></br><br></br>

              {t("aboutScreen-b-text6")}<br></br><br></br>

              {t("aboutScreen-text7")}<br></br><br></br>
              </p>
        </div>
    </div>
    <div  className="app_aboutScreen-content2">
      <p className="app_aboutScreen-description">
              {t("aboutScreen-text8")}<br></br><br></br>
              {t("aboutScreen-text9")}<br></br><br></br>
              <span style={{fontSize: 12}}>{t("aboutScreen-b-text10")}</span>
      </p>
    </div>
        <div style={{marginBottom: 20}}></div>
        <Expertise />
        <div style={{marginBottom: 120}}></div>
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