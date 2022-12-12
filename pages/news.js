import React, { useEffect, useState } from "react"
import { Footer, CustomPost, NewsCarousel } from "../components"
import { getPosts, getReviews } from '../services/service'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from "next/link"
import { useRouter } from "next/router"

const NewsScreen = ({posts}) => {
  const { locale } = useRouter()
  const {t, i18n} = useTranslation("home");
  const [query, setQuery] = useState("")
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <div style={{marginBottom: 40}}></div>
    <div className="app_newsScreen-container">
      <div className="app_newsScreen-page-title" style={{display: 'flex'}}>
        <p className="app_newsScreen-page-title-text" >{t("newsScreen-title")}<span>.</span></p>
        <div className="app_newsScreen-input-container">
          <input className="app_newsScreen-searchBar" type="search" style={query !==  "" ? {borderBottomLeftRadius: "0px",borderBottomRightRadius: "0px"} : {}} name="posts search" placeholder="Search..." onChange={e=>{setQuery(e.currentTarget.value)}}/>
          <div className="app_newsScreen-input-result">
                  {posts.map((post,key)=>{
                    if(query === "") return <></>
                    if(i18n.language === 'en' && post.node.title.toLowerCase().includes(query.toLowerCase())){
                      return <Link href={`/news/${post.node.slug}`} locale={locale} key={key} ><div className="app_postdetail-input-result-option" key={key}>{post.node.title}</div></Link>
                    }else if (i18n.language !== 'en' && post.node.localizations[0].title.toLowerCase().includes(query.toLowerCase())){
                      return <Link hred={`/news/${post.node.slug}`} locale={locale} key={key}  ><div className="app_postdetail-input-result-option" key={key}>{i18n.language === 'en' ? post.node.title : post.node.localizations[0].title}</div></Link>
                    }
               })}
          </div>
        </div>
      </div>
      <NewsCarousel posts={posts}/>
      <div style={{marginBottom: 20}}></div>
      <div className='hr' style={{height: 2, backgroundColor:'#FFF', margin: '0 auto', width: '95%',}}/>
      <div style={{marginBottom: 20}}></div>
      <div className="app_newsScreen-news-container">
        {posts.map((post)=>(
          <CustomPost post={post.node} key={post.node.slug} />
        ))}
        {posts.map((post)=>(
          <CustomPost post={post.node}  key={post.node.slug}  />
        ))}
      </div>
      <div style={{marginBottom: 60}}></div>
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
          ...(await serverSideTranslations(locale, ['home']))
        }
      }
    }

export default NewsScreen