import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import logo  from '../../public/assets/Logo.svg'
import { useTranslation } from 'react-i18next'

const NavBar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  const {t} = useTranslation('common');
  return (
    <div className='container'>
      <div className='logo-container'>
        <a to={'/'}><img className='app_NavBar-logo' src={logo.src} alt='logo'/></a>
      </div>
      <nav className='nav-container'>
            <a to={'/About'}>{t("about-me")}</a>
            <a to={'/Service'}>{t("services")}</a>
            <a to={'/News'}>{t("news")}</a>
            <a href='#contact'>{t("contact")}</a>
      </nav>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu fontSize={27} style={{color: 'var(--color-blue)'}} onClick={()=>{setToggleMenu(true)}} />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdClose fontSize={27} className="overlay__closed" onClick={() => setToggleMenu(false)}/>
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'>
              <a to={'/About'} className="app__navbar-smallscreen_link" onClick={() => setToggleMenu(false)}>{t("about-me")}</a>
              </li>
              <li className='p__opensans'>
              <a to={'/Service'} className="app__navbar-smallscreen_link"  onClick={() => setToggleMenu(false)}>{t("services")}</a>
              </li>
              <li className='p__opensans'>
              <a to={'/News'} className="app__navbar-smallscreen_link"  onClick={() => setToggleMenu(false)}>{t("news")}</a>
              </li>
              <li className='p__opensans'>
              <a href='#contact' className="app__navbar-smallscreen_link"  onClick={() => setToggleMenu(false)}>{t("contact")}</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
export async function getStaticProps({locale}){
  return{
    props:{
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}   

export default NavBar