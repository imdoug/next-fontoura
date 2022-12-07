import React from 'react'
import './About.css'
import photo from '../../assets/Foto.png'
import logo from '../../assets/about-logo.png'
import { useTranslation } from 'react-i18next'

const About = () => {
  const {t} = useTranslation();
  return (
    <div className='app_about' >
      <div className='app_about-content'>
            <p className='app_about-title'>{t("home-about-title")}</p>
            <img src={logo} alt="about-logo" className='app_about-logo'/>
            <p className='app_about-text'>{t("home-about-txt")}</p>
      </div>
      <div className='app_about-image'>
          <img src={photo} alt="Kelly Fountora" />
      </div>
    </div>
  )
}

export default About