import React, { useEffect, useState } from "react"
import { Footer, CustomPost, NewsCarousel } from "../components"
import { getPosts, getReviews } from '../services/service'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/dist/commonjs/serverSideTranslations'

const NewsScreen = ({posts}) => {
  const {t, i18n} = useTranslation();
  const [query, setQuery] = useState("")
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <div className="app_newsScreen-container">
      <div className="app_newsScreen-page-title" style={{display: 'flex'}}>
        <p className="app_newsScreen-page-title-text" >{t("newsScreen-title")}<span>.</span></p>
        <div className="app_newsScreen-input-container">
          <input className="app_newsScreen-searchBar" type="search" style={query !==  "" ? {borderBottomLeftRadius: "0px",borderBottomRightRadius: "0px"} : {}} name="posts search" placeholder="Search..." onChange={e=>{setQuery(e.currentTarget.value)}}/>
          <div className="app_newsScreen-input-result">
                  {posts.map((value,key)=>{
                    if(query === "") return <></>
                    if(i18n.language === 'en' && value.node.title.toLowerCase().includes(query.toLowerCase())){
                      return <a to={`/News/${value.node.id}`} ><div className="app_postdetail-input-result-option" key={key}>{value.node.title}</div></a>
                    }else if (i18n.language !== 'en' && value.node.localizations[0].title.toLowerCase().includes(query.toLowerCase())){
                      return <a to={`/News/${value.node.id}`} ><div className="app_postdetail-input-result-option" key={key}>{i18n.language === 'en' ? value.node.title : value.node.localizations[0].title}</div></a>
                    }
               })}
          </div>
        </div>
      </div>
      <NewsCarousel posts={posts}/>
      <div className="app_newsScreen-news-container">
        {posts.map((post)=>(
          <CustomPost post={post.node} key={post.node.slug} />
        ))}
        {posts.map((post)=>(
          <CustomPost post={post.node}  key={post.node.slug}  />
        ))}
      </div>
  </div>
    <Footer/> 
    </>
  )
}

export async function getStaticProps({locale}){
      const posts = await (getPosts() || [])
      const reviews = await (getReviews() || [])
      return{
        props:{
          posts,
          reviews,
          ...(await serverSideTranslations(locale, ['common']))
        }
      }
    }

export default NewsScreen