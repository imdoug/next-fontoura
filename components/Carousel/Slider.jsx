import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"
import { useTranslation } from 'react-i18next'

export default function Slider({reviews}) {
    const {i18n} = useTranslation();
    const [slideIndex, setSlideIndex] = useState(1)
    const nextSlide = () => {
        if(slideIndex !== reviews.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === reviews.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(reviews.length)
        }
    }
    return (
        <div className="container-slider">
            {reviews.map((obj, index) => {
                return (
                  <div
                  key={obj.id}
                  className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                  >
                  <div className='app_carousel-container_mini'>
                        <div className='app_carousel-container_img-container'>
                              <img className='app_carousel-container_img' src={reviews[index].picture.url} alt="reviewee picture" />
                        </div>
                        <div className='app_carousel-container_content'>
                            {i18n.language === 'en' 
                            ?   <p><ImQuotesLeft className='quotes-l' size={28}/> {reviews[index].review} <ImQuotesRight className='quotes-r' size={28}/></p> 
                            :   <p><ImQuotesLeft className='quotes-l' size={28}/> {reviews[index].localizations[0].review} <ImQuotesRight className='quotes-r' size={28}/></p>}                              <h2>{reviews[index].name}</h2>
                        </div>
                  </div>
                  </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        </div>
    )
}