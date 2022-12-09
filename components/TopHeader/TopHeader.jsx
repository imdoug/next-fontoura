
// import i18n from "../../service/i18n"
import brazilFlag from '../../public/assets/brazil-flag.png'
import usaFlag from '../../public/assets/usa-flag.png'
import { useRouter } from 'next/router'

const TopHeader = () => {
  const { pathname, asPath , locales, push, query } = useRouter()
  const switchLenguage = (l)=>{
    push({ pathname, query }, asPath, { locale: l }) 
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
              { locales.map((l)=>{
                if(l === 'en'){
                  return (
                    <div className='language-icons' style={{width: 22, height :22, backgroundImage: `url(${usaFlag.src})`, backgroundSize: 'cover' }} value={"pt"} onClick={()=>{switchLenguage('en')}}></div>
                  )
                }else{
                  return(
                    <div className='language-icons' style={{width: 22, height :22, backgroundImage: `url(${brazilFlag.src})`, backgroundSize: 'cover' }} value={"pt"} onClick={()=>{switchLenguage('pt')}}></div>
                  )
                }
              })}
            </div>
      </div>
      <div className='app-hr'/>
      </>
  )
}

export default TopHeader