import React from 'react'
import { MdFamilyRestroom } from 'react-icons/md'
import { BsFileEarmarkText } from 'react-icons/bs'
import { IoMdCopy} from 'react-icons/io'
import { VscPieChart} from 'react-icons/vsc'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { AiOutlineIdcard } from 'react-icons/ai'
import { useTranslation } from 'next-i18next'

const Expertise = () => {
  const { t } = useTranslation("home");
  const expertisesPT = [
      { 
            icon : <AiOutlineIdcard  className="app_expertise-items-icons"/>,
            title: 'EB-3',
            content: t("expertise-eb3-sub"),
            id:"eb3"
      },
      { 
            icon : <HiOutlineBriefcase className="app_expertise-items-icons"/>,
            title: t("expertise-prose-title"),
            content: '',
            id:"prose"
      },
      { 
            icon : <MdFamilyRestroom className="app_expertise-items-icons"/>,
            title: t("expertise-familyVisa-title"),
            content: t("expertise-familyVisa-sub"),
            id:"famVisa"
      },
      { 
            icon : <IoMdCopy className="app_expertise-items-icons"/>,
            title: t("expertise-translation-title"),
            content: t("expertise-translation-sub"),
            id:"transl"
      },
      { 
            icon : <BsFileEarmarkText className="app_expertise-items-icons"/>,
            title: t("expertise-changeOfStatus-title"),
            content: t("expertise-changeOfStatus-sub"),
            id:"change"
      },
      { 
            icon : <VscPieChart className="app_expertise-items-icons"/>,
            title: t("expertise-consultant-title"),
            content: t("expertise-consultant-sub"),
            id:"consult"
      }
]
  return (
      <div className="app_expertise-main-container  section_padding">
            <div className='app_section-title'>
                  <p>Expertise<span>.</span></p>
            </div>
            <div className="app_expertise-container">
                  {expertisesPT.map((expertise, i)=>(
                        <a to={`/Service/${expertise.id}`} className="app_expertise-items" key={expertise.title} >
                              <p className='app_expertise-items-icons-container'>{expertise.icon}</p>   
                              <p className='app_expertise-items-title'>{expertise.title}</p> 
                              <p className='app_expertise-items-content'>{expertise.content}</p>        
                        </a>
                  ))}
            </div>
      </div>
  )
}

export default Expertise