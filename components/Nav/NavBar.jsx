import React, { useState } from 'react'
import './NavBar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import logo  from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const NavBar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  const {t} = useTranslation();
  return (
    <div className='container'>
      <div className='logo-container'>
        <Link to={'/'}><img className='app_NavBar-logo' src={logo} alt='logo'/></Link>
      </div>
      <nav className='nav-container'>
            <Link to={'/About'}>{t("about-me")}</Link>
            <Link to={'/Service'}>{t("services")}</Link>
            <Link to={'/News'}>{t("news")}</Link>
            <a href='#contact'>{t("contact")}</a>
      </nav>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu fontSize={27} style={{color: 'var(--color-blue)'}} onClick={()=>{setToggleMenu(true)}} />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdClose fontSize={27} className="overlay__closed" onClick={() => setToggleMenu(false)}/>
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'>
              <Link to={'/About'} className="app__navbar-smallscreen_link" onClick={() => setToggleMenu(false)}>{t("about-me")}</Link>
              </li>
              <li className='p__opensans'>
              <Link to={'/Service'} className="app__navbar-smallscreen_link"  onClick={() => setToggleMenu(false)}>{t("services")}</Link>
              </li>
              <li className='p__opensans'>
              <Link to={'/News'} className="app__navbar-smallscreen_link"  onClick={() => setToggleMenu(false)}>{t("news")}</Link>
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

export default NavBar