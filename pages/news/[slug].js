import React,{useEffect} from 'react'
import { useRouter } from 'next/router';
import { Footer, RecentPosts, PostDetail } from '../../components'
import { getPosts, getPostDetails } from '../../services/service'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const PostNewsScreen = ({posts, post}) => {
  const router = useRouter()
  console.log(post)
  if(router.isFallback){
    return <></>
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return(
    <>
      <div className='app_postdetail-container-master'>
          <PostDetail  post={post}  />
          <div className='white-line'></div>
          <RecentPosts posts={posts} slug={post.slug}/>
        </div>  
          <Footer /> 
    </>
  )
};
export async function  getStaticProps({ params, locale }){
  const data = await getPostDetails(params.slug)
  const posts  = await getPosts()
  console.log(posts)
  return {
    props: { post: data, posts,
      ...(await serverSideTranslations(locale, ['home']))
    },
  }
}

export async function  getStaticPaths(){
  const posts  = await getPosts()
  return {
    paths: posts.map(({node: {slug}}) => ({params: {slug}})),
    fallback: true,
  }
}
export default PostNewsScreen