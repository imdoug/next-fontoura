import eb3  from '../../../public/assets/eb3.png'
import { useTranslation } from 'react-i18next'


const EB3 = () => {
  const { t } = useTranslation('common');
  return (
    <div className='app_banner_eb3-container  section_padding'>
        <div className='app_banner_eb3-content'>
          <p className='app_banner_eb3-title'><span class="blue">EB3 </span>{t("banner-eb3-title")}<span>.</span></p>
          <p className='app_banner_eb3-text'>{t("banner-eb3-text")}</p>
          <div>
            <a href='https://wa.me/13478704216' target="_blank" rel="noopener noreferrer"
              className='app_customButton'>
              WhatsApp Chat
            </a>
          </div>
        </div>
        <div className='app_banner_eb3-image' >
          <img src={eb3.src} alt="" className='app_banner_eb3'/>
        </div>
    </div>
  )
}

export default EB3