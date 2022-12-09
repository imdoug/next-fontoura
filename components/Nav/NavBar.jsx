import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import logo  from '../../public/assets/Logo.svg'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavBar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  const {locale} = useRouter()
  const {t} = useTranslation('home');
  return (
    <div className='container'>
      <div className='logo-container'>
        <Link href={'/'} locale={locale}><img className='app_NavBar-logo' src={logo.src} alt='logo'/></Link>
      </div>
      <nav className='nav-container'>
            <Link href={'/about'} locale={locale}>{t("about-me")}</Link>
            <Link href={'/services'} locale={locale}>{t("services")}</Link>
            <Link href={'/news'} locale={locale}>{t("news")}</Link>
            <Link href='#contact' >{t("contact")}</Link>
      </nav>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu fontSize={27} style={{color: 'var(--color-blue)'}} onClick={()=>{setToggleMenu(true)}} />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdClose fontSize={27} className="overlay__closed" onClick={() => setToggleMenu(false)}/>
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'>
              <Link href='/about' locale={locale} className="app__navbar-smallscreen_link" onClick={() => setToggleMenu(false)}>{t("about-me")}</Link>
              </li>
              <li className='p__opensans'>
              <Link href='/services' locale={locale} className="app__navbar-smallscreen_link"  onClick={() => setToggleMenu(false)}>{t("services")}</Link>
              </li>
              <li className='p__opensans'>
              <Link href='/news' locale={locale} className="app__navbar-smallscreen_link"  onClick={() => setToggleMenu(false)}>{t("news")}</Link>
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