import moment from 'moment';
import { useState } from 'react';
import { useTranslation } from 'next-i18next'

const RecentPosts = ({posts, slug}) => {
      const {t, i18n} = useTranslation();
      const [query, setQuery] = useState("")
      return (
            <>
            <div className='app_postdetail-side-nav'>
              <div className='app_postdetail-input-container'>
                <input type="search" placeholder='Search...' style={query !==  "" ? {borderBottomLeftRadius: "0px",borderBottomRightRadius: "0px"} : {}} className='app_postdetail-searchBar' onChange={(e)=>{setQuery(e.currentTarget.value)}}/>
                <div className="app_postdetail-input-result">
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
              <p className='app_postdetail-side-nav-recentPosts-title'>{t("recent-news")}</p>
              {posts.map((post)=>(
                <>
                { post.node.slug === slug 
                ? <></> 
                : 
                <a to={`/News/${post.node.id}`} >
                  <div className='app_postdetail-side-nav-recentPosts'>
                        <div className='app_postdetail-side-nav-recentPosts-post'>
                            <img src={post.node.featuredImage.url} alt=""  className='app_postdetail-side-nav-recentPosts-post-img'/>
                            <div className='app_postdetail-side-nav-recentPosts-post-description'>
                            <p className='app_postdetail-side-nav-recentPosts-post-description-title'>{i18n.language === 'en' ? post.node.title : post.node.localizations[0].title}</p>
                            {console.log(post.node)}
                            <p className='app_postdetail-side-nav-recentPosts-post-description-text'>{i18n.language === 'en' ? post.node.categories[0].name : post.node.categories[0].localizations[0].name} - {moment(post.node.createdAt).format("L")}
                            </p>
                            </div>         
                        </div>
                  </div>
                  </a>
                }
                </>
              ))}
            </div>
            </>
          )
}

export default RecentPosts