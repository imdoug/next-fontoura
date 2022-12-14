import React, {useState} from 'react'
import BtnSlider from './BtnSlider'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"
import { useTranslation } from 'next-i18next'


export default function Slider({reviews}) {
    const {i18n} = useTranslation("home");
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
                            ?   <p>{reviews[index].review}</p> 
                            :   <p>{reviews[index].localizations[0].review}</p>}                              
                            <h2>{reviews[index].name}</h2>
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
