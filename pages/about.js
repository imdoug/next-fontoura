import React,{ useEffect } from 'react'
// import { Footer } from '../../components'
import photo from '../public/assets/Foto.png'
import styles from '../styles/About.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
export default function about() {
      const { locale, locales, push } = useRouter()
      const {t} = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <div className={styles.app_aboutScreen_container}>
      <div className={styles.app_aboutScreen}>
        <div className={styles.app_aboutScreen_content}>
              <p className={styles.app_aboutScreen_title}>{locale}</p>
              <h2 className={styles.about_h2}>Kelly Fontoura<span>.</span></h2>

              <p className={styles.app_aboutScreen_description}>{t("aboutScreen-text1")}<br></br><br></br>

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
        <div className={styles.app_aboutScreen_image}>
            <img src={photo.src} className={styles.about_img} alt="Kelly Fountora" />
        </div>
      </div>
    </div>
    {/* <Footer/>  */}
    </>
  )
}