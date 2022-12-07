import React from 'react'
import './Contact.css'
import { MdOutlineMail, MdOutlineLocationOn } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import stars from '../../../assets/star-footer.png'
import { useTranslation } from 'react-i18next'


const Contact = () => {
  const {t} = useTranslation();
  return (
    <>
    <div className="app_contact-container">
      <div className="app_contact-section1">
            <p className="app_contact-title">{t("footer-title")} <span>.</span></p>
            <div>
              <a href='https://wa.me/13478704216' target="_blank" rel="noopener noreferrer"
                className='app_customButton'>
                  WhatsApp Chat
              </a>
            </div>
      </div>
      <div className='app_contact-items'>
        <div className="app_contact-info-items">
          <div className="app_contact-info-item">
            <div className="app_contact-info-content">
              <p className='app_contact-info-icon'><BsTelephone color='var(--color-blue)'/></p>
              <p className='app_contact-info-text'>(+1)347-870-4216</p>
            </div>
          </div>
          <div className="app_contact-info-item">
            <div className="app_contact-info-content">
              <p className='app_contact-info-icon'><MdOutlineLocationOn color='var(--color-blue)'/></p>
              <p className='app_contact-info-text'>New York City</p>
            </div>
          </div>
          <div className="app_contact-info-item">
            <div className="app_contact-info-content">
              <p className='app_contact-info-icon'><MdOutlineMail color='var(--color-blue)'/></p>
              <p className='app_contact-info-text'>info@fontoura.us</p>
            </div>
          </div>
        </div>
        <div className='app_contact-items-img'>
            <img src={stars} alt="stars-footer" className='app_contact-star' />
          </div>
      </div>  
    </div>
    </>
  )
}

export default Contact