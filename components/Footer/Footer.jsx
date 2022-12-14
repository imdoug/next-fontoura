import React from 'react'
import  Contact  from './Contact/Contact'
import EmailForm from './EmailForm/EmailForm'
import { useTranslation } from 'next-i18next'

const Footer = () => {
  const {t} = useTranslation('home');
  return (
    <>
      <div className="app_footer" id="contact">
          <Contact />
          <EmailForm />
          <footer className='app_footer-text'>
            <p >{t("footer-txt1")}</p>
          </footer>
      </div>
      <div className='app_footer_outer-container'>
        <p className="app_footer_outer-text"style={{paddingBottom: 10}}>{t("footer-txt2")}</p>
      </div>
    </>
  )
} 

export default Footer