import React from 'react'
import moment from "moment";
import liberty from '../../public/assets/statue-of-liberty.png'
import Slider from '../Carousel/Slider';
import { useTranslation } from 'next-i18next'
import Link from 'next/link';
import { useRouter } from 'next/router';



const News = ({posts, reviews}) => {
      const { locale } = useRouter()
      const { t, i18n } = useTranslation("home");
  return ( 
      <>
      <div className='app_news-container'>
            <div className='app_news-content' >
                  <div className='app_news-title'>
                        <div className='app_news-title-text'>{t("newsScreen-title")}<span>.</span></div>
                        <div className='app_news-title-button-container'>
                              <Link href={'/news'} locale={locale} className='app_news-title-button'>{t("read-more")}</Link>
                        </div>
                  </div>
                  <div className='app_news-posts-container'>
                        <div className='app_news-posts' >
                              <img src={posts[0].node.featuredImage.url} alt="post-cover" srcset="" className="app_news-posts-img"/>
                              
                              <div className='app_news-posts-content'>
                                    <p className='app_news-posts-content-subTitle'>{i18n.language === 'en' ? posts[0].node.title : posts[0].node.localizations[0].title}</p>
                                    <p className='app_news-posts-content-title'>{posts[0].node.categories[0].name} - {moment(posts[0].createdAt).format("L")}</p>
                                    <p className='app_news-posts-content-text'>{i18n.language === 'en' ? posts[0].node.shortDescription : posts[0].node.localizations[0].shortDescription}</p>
                                    <Link href={`/news/${posts[0].node.slug}`} className='app_news-posts-content-link'>{t("read-more")} </Link>
                              </div>
                        </div>
                        <div className='app_news-posts second'>
                              <img src={posts[1].node.featuredImage.url}alt="post-cover" srcset="" className='app_news-posts-img'/>
                              <div  className='app_news-posts-content'>
                                    <p className='app_news-posts-content-subTitle'>{i18n.language === 'en' ? posts[1].node.title : posts[1].node.localizations[0].title}</p>
                                    <p className='app_news-posts-content-title'>{posts[1].node.categories[0].name} - {moment(posts[1].createdAt).format("L")}</p>
                                    <p className='app_news-posts-content-text'>{i18n.language === 'en' ? posts[1].node.shortDescription : posts[1].node.localizations[0].shortDescription}</p>     
                                    <Link href={`/news/${posts[1].node.slug}`} locale={locale} className='app_news-posts-content-link'>{t("read-more")}</Link>
                              </div>
                        </div>
                  </div> 
            </div> 
            <Slider reviews={reviews} />
            <img className='app_news-statue' src={liberty.src} alt="statue of liberty"  />
      </div>
    </>
  )
}

export default News