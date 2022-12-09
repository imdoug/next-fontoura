import { useEffect } from 'react'
import { About,EB3, Expertise, Guide, Instagram, News, Footer } from '../components'
import BlueTop from '../components/CustomTops/BlueTop'
import { getPosts, getReviews } from '../services/service'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/dist/commonjs/serverSideTranslations'

export default function Home({posts, reviews}) {
  const { t } = useTranslation('common')
  console.log('Posts:',posts)
  console.log('Revies:',reviews)
  const data = [1]
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <About /> 
      <EB3 />
      <Expertise />
      <Guide />
      <News posts={posts} reviews={reviews}/>
      <Instagram />

      <BlueTop />
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
