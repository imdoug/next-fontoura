import React,{useEffect, useState} from 'react'
import { Footer } from '../components'
import { MdFamilyRestroom } from 'react-icons/md'
import { BsFileEarmarkText } from 'react-icons/bs'
import { IoMdCopy} from 'react-icons/io'
import { VscPieChart} from 'react-icons/vsc'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { AiOutlineIdcard } from 'react-icons/ai'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Services() {
      const [expertise, setExpertise] = useState('')
      const { t } = useTranslation('home')
      const expertisesPT = [
        { 
              icon : <AiOutlineIdcard  className="app_expertise-items-icons"/>,
              title: 'EB-3',
              content: t("expertise-eb3-sub"),
              key: "eb3"
        },
        { 
              icon : <HiOutlineBriefcase className="app_expertise-items-icons"/>,
              title: t("expertise-prose-title"),
              content: '',
              key: "prose"
        },
        { 
              icon : <MdFamilyRestroom className="app_expertise-items-icons"/>,
              title: t("expertise-familyVisa-title"),
              content: t("expertise-familyVisa-sub"),
              key: "famVisa"
        },
        { 
              icon : <IoMdCopy className="app_expertise-items-icons"/>,
              title: t("expertise-translation-title"),
              content: t("expertise-translation-sub"),
              key: "transl"
        },
        { 
              icon : <BsFileEarmarkText className="app_expertise-items-icons"/>,
              title: t("expertise-changeOfStatus-title"),
              content: t("expertise-changeOfStatus-sub"),
              key: "change"
        },
        { 
              icon : <VscPieChart className="app_expertise-items-icons"/>,
              title: t("expertise-consultant-title"),
              content: t("expertise-consultant-sub"),
              key: "consult"
        }
    ]
      useEffect(() => {
      //   if(id){
      //     if(window.screen.width > 900){
      //       const element = document.getElementById("title");
      //       element.scrollIntoView();
      //     }else{
      //       const element = document.getElementById(`${id}`);
    
      //       element.scrollIntoView();
      //     }
      //   }else if{
      //     window.scrollTo(0, 0)
      //   }
        window.scrollTo(0, 0)
      }, [])
      return (
        <>
          <div style={{width: '100%'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100%'}}>
            <div className="app_expertise-main-container  section_padding">
                <div className='app_section-title-page'>
                      <p>Expertise<span>.</span></p>
                </div>
                <div id="title" className="app_expertise-container">
                      {expertisesPT.map((expertise, i)=>(
                            <div className="app_expertise-items" key={i} onClick={()=>{setExpertise(expertise.key)}} >
                                  <p className='app_expertise-items-icons-container'>{expertise.icon}</p>   
                                  <p className='app_expertise-items-title'>{expertise.title}</p> 
                                  <p className='app_expertise-items-content'>{expertise.content}</p>        
                            </div>
                      ))}
                </div>
          </div>
          <div style={{marginBottom: 40}}></div>
            </div>
    
              <div className='app_serviceScreen-eb3-container section_padding'>
              {expertise === "eb3" && 
              <>
                <h2 id='eb3' className='app_serviceScreen-eb3-title'>EB-3 <span className='eb3'>{t("banner-eb3-title")}</span><span>.</span></h2>
                <p>{t("services-eb3-txt1")}</p>
                <p>{t("services-eb3-txt2")}</p>
                <p>{t("services-eb3-txt3")}</p>
              </>
              }
              {expertise === "prose" && 
              <>
                <h2 id='prose' className='app_serviceScreen-eb3-title'>{t("services-prose-title")} <span className='eb3'>PRO-SE</span><span>.</span></h2>
                <p>{t("services-prose-txt1")}</p>
                <p>{t("services-prose-txt2")}</p>
                <label htmlFor='translations'>{t("services-prose-label")}</label>
                <ul id='translations' style={{textAling: "left"}}>
                  <li>I-130 Petition for Alien Relative</li>
                  <li>I-765 Employment Authorization Card</li>
                  <li>I-485 Adjustment of Status/Green Card</li>
                  <li>I-751 Remove Conditions on Green Card</li>
                  <li>I-90 Replace/Renew Green Card</li>
                  <li>N-400 Naturalization/Citizenship</li>
                  <li>I-90 Green Card Renewal</li>
                  <li>I-131 Travel Authorization</li>
                  <li>I-131 Reentry Permit</li>
                  <li>DS-260 Immigrant Consular Processing</li>
                </ul>
              </>
              }
              {expertise === "famVisa" && 
              <>
                <h2 id='famvisa' className='app_serviceScreen-eb3-title'>{t("services-fam-title1")} <span className='eb3'>{t("services-fam-title2")}</span><span>.</span></h2>
                <p>{t("services-fam-txt1")}</p>
                <p>{t("services-fam-txt2")}</p>
                <p>{t("services-fam-txt3")}</p>
              </>}
              {expertise === "transl" && 
              <>
                <h2 id='transl' className='app_serviceScreen-eb3-title'>{t("expertise-translation-title")}<span>.</span></h2>
                <p>{t("services-trans-txt1")}</p>
                <p>{t("services-trans-txt2")}</p>
                <p>{t("services-trans-txt3")}</p>
                <label htmlFor='translations'>{t("services-trans-ul-tile")}</label>
                <ul id='translations'  style={{textAling: "left"}}>
                  <li>{t("services-trans-item1")}</li>
                  <li>{t("services-trans-item2")}</li>
                  <li>{t("services-trans-item3")}</li>
                  <li>{t("services-trans-item4")}</li>
                  <li>{t("services-trans-item5")}</li>
                  <li>{t("services-trans-item6")}</li>
                  <li>{t("services-trans-item7")}</li>
                  <li>{t("services-trans-item8")}</li>
                </ul>
              </>
              }
              {expertise === "change" && 
              <>
                <h2 id='change' className='app_serviceScreen-eb3-title'>{t("expertise-changeOfStatus-title")}<span>.</span></h2>
                <p>{t("services-change-txt1")}</p>
                <p>{t("services-change-txt2")}</p>
              </>
              }
              {expertise === "consult" && 
              <>
              <h2 id='consult' className='app_serviceScreen-eb3-title'>{t("expertise-consultant-title")}<span>.</span></h2>
                <p>{t("services-consult-txt1")}</p>
                <p>{t("services-consult-txt2")}</p>
                <p>{t("services-consult-txt3")}</p>
                <p>{t("services-consult-single")}</p>
                <p>{t("services-consult-group")}</p>
              </>
              }
            </div>          
          </div>
          <Footer/> 
        </>
    
      )
    }
    export async function getStaticProps({locale}){
      return{
        props:{
          ...(await serverSideTranslations(locale, ['home']))
        }
      }
    }    