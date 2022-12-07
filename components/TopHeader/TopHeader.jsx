import React from 'react'
import './TopHeader.css'
import i18n from "../../service/i18n"
import brazilFlag from '../../assets/brazil-flag.png'
import usaFlag from '../../assets/usa-flag.png'

const TopHeader = () => {
  const switchLenguage = (ln)=>{
    i18n.changeLanguage(ln)
  }
  return (
    <>
      <div className='app_topHeader'>
          <div className='app_topHeader-location'>
            {/* fix text  size on  mobile */}
            <p className='app_topHeader-text'>New York, NY</p>
            <p className='app_topHeader-bullet'>•</p>
            <p className='app_topHeader-text'>info@fonntoura.us</p>
          </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems:'center'}}>
              <div className='language-icons' style={{width: 22, height :22, backgroundImage: `url(${brazilFlag})`, backgroundSize: 'cover' }} value={"pt"} onClick={()=>{switchLenguage("pt")}}>
            </div>
              <div className='language-icons' style={{width: 22, height :22, backgroundImage: `url(${usaFlag})` , backgroundSize: 'cover' }} value={"en"} onClick={()=>{switchLenguage("en")}}>
            </div>
          </div>
      </div>
      <div className='app-hr'/>
      </>
  )
}

export default TopHeader