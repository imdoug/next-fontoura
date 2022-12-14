import React,{useEffect} from 'react'
import { useRouter } from 'next/router';
import { Footer, RecentPosts, PostDetail } from '../../components'
import { getPosts, getPostDetails } from '../../services/service'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { motion } from 'framer-motion';

export default function PostNewsScreen ({posts, post}){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const router = useRouter()
  if(router.isFallback){
    return <></>
  }
    return(
      <motion.div exit={{opacity:0}} animate={{opacity:1}} initial={{opacity:0}} style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}} >
        <div style={{marginBottom: 40}}></div>
          <div className='app_postdetail-container-master'>
              <PostDetail  post={post}  />
              <div className='white-line'></div>
              <RecentPosts posts={posts} slug={post.slug}/>
            </div>  
            <div style={{marginBottom: 60}}></div>
              <Footer /> 
      </motion.div>
  )
};
export async function  getStaticProps({params, locale}){
  const data = await getPostDetails(params.slug)
  const posts  = await getPosts()
  return {
    props: { post: data, posts,
      ...(await serverSideTranslations(locale, ['home'])),
    },
  }
}

export async function  getStaticPaths({locales}){
  const posts  = await getPosts()
  return {
    paths: locales
      .map((locale) => {
        return posts.map(({node: {slug}}) => (
          {params: {slug}, locale}
        ));
      })
      .flat(),
    fallback: true,
  }
}