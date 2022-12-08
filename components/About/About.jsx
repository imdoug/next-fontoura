import photo from '../../public/assets/Foto.png'
import logo from '../../public/assets/about-logo.png'
import { useTranslation } from 'next-i18next'

const About = () => {
  const { t } = useTranslation('common')
  return (
    <div className='app_about' >
      <div className='app_about-content'>
            <p className='app_about-title'>{t("home-about-title")}asdasdasd</p>
            <img src={logo.src} alt="about-logo" className='app_about-logo'/>
            <p className='app_about-text'>{t("home-about-txt")}</p>
      </div>
      <div className='app_about-image'>
          <img src={photo.src} alt="Kelly Fountora" />
      </div>
    </div>
  )
}

export default About
