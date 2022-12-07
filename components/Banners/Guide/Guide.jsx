import React from 'react'
import './Guide.css'
import img  from '../../../assets/guide.png'
import stars  from '../../../assets/stars-guide.png'
import { AiOutlineLeft, AiOutlineRight }  from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Guide = ({posts}) => {
  const { t, i18n } = useTranslation();
  // console.log(i18n.language)
  return (
    <div className='app_banner_guide-container'>
        <div className='app_banner_guide-content'>
          <p className='app_banner_guide-title'>{t("new-guide-title")}<span>.</span></p>
          <div className='app_banner_guide-image-container' >
            <img src={img} alt="guide-image"  className='app_banner_guide-image' />
          </div>
          <div  className='app_banner_guide-button-container'>
            <a  href='https://www.uscis.gov/sites/default/files/document/guides/M-618_p.pdf' target="_blank" rel="noopener noreferrer"
                className='app_banner_guide-button'>Download</a>
          </div>
        </div>
        <div className='app_banner_guide-post' >
          <div className='app_banner_guide-post-content'>
            <Link to={`/News/${posts[0].node.id}`} className="app_banner_guide-post-title" >{i18n.language === 'en' ? posts[0].node.title : posts[0].node.localizations[0].title}</Link>
            <p className='app_banner_guide-post-text'>{i18n.language === 'en' ? posts[0].node.shortDescription : posts[0].node.localizations[0].shortDescription}</p>
            <p className='app_banner_guide-post-font'>{t("source")} {posts[0].node.from}</p>
          </div>
          <div className='hr' />
          <div  className='app_banner_guide-post-content'>
          <Link to={`/News/${posts[1].node.id}`} className="app_banner_guide-post-title" >{i18n.language === 'en' ? posts[1].node.title : posts[1].node.localizations[0].title}</Link>
            <p className='app_banner_guide-post-text'>{i18n.language === 'en' ? posts[1].node.shortDescription : posts[1].node.localizations[0].shortDescription}</p>
            <p className='app_banner_guide-post-font'>{t("source")} {posts[1].node.from}</p>
          </div>
          <div  className='app_banner_guide-arrows'>
            <AiOutlineLeft  size={28} className='app_banner_guide-arrow-left' />
            <AiOutlineRight size={28} className='app_banner_guide-arrow-right'/>
          </div>
          <div className='app_banner_guide-stars-container'>
            <img src={stars} alt="" className='app_banner_guide-stars'/>
          </div>
        </div>
    </div>
  )
}

export default Guide