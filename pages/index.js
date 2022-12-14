import { useEffect } from 'react'
import { About,EB3, Expertise, Guide, Instagram, News, Footer } from '../components'
import BlueTop from '../components/CustomTops/BlueTop'
import { getPosts, getReviews } from '../services/service'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { motion } from 'framer-motion'

export default function Home({posts, reviews}) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <motion.div exit={{opacity:0}} animate={{opacity:1}} initial={{opacity:0}} style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}} >
      <About /> 
      <EB3 />
      <Expertise />
      <Guide posts={posts}/>
      <News posts={posts} reviews={reviews}/>
      <Instagram />
      <BlueTop />
      <Footer/> 
    </motion.div>
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
