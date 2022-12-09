
import React from 'react'
import moment from 'moment';
import { RiArrowLeftSLine } from 'react-icons/ri'
import { useTranslation } from 'next-i18next'

const PostDetail = ({post}) => {
      const {t, i18n} = useTranslation();
      const getContentFragment = (index, text, obj, type) => {
            let modifiedText = text;
        
            if (obj) {
              if (obj.bold) {
                modifiedText = (<b  clas key={index}>{text}</b>);
              }
        
              if (obj.italic) {
                modifiedText = (<em  key={index}>{text}</em>);
              }
        
              if (obj.underline) {
                modifiedText = (<u  key={index}>{text}</u>);
              }
            }
        
            switch (type) {
              case 'heading-three':
                return <h3 key={index} className="app_postdetail-content-sub-title">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
              case 'paragraph':
                return <p key={index} className="app-postdetail-post-content-text">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
              case 'heading-four':
                return <h4 key={index} className="app_postdetail-content-sub-title-2">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
              case 'image':
                return (
                  <img
                    key={index}
                    alt={obj.title}
                    height={obj.height}
                    width={obj.width}
                    src={obj.src}
                    className="app_postdetail-content-image"
                  />
                );
              default:
                return modifiedText;
            }
          };
          return (<>
            <div className='app_postdetail-container'>
              <p className='app_postdetail-container-back'>
                <a href='/News' className='app_postdetail-container-back' ><RiArrowLeftSLine />{t("all-news")}</a>
              </p>
                <div className='app_postdetail-container-headline'>
                  <h1 className="app_postdetail-title">{post.title}</h1>
                  <p className="app_postdetail-date">{post.categories[0].name} - {moment(post.createdAt).format('L')}</p>
                  <img
                      className="app_postdetail-cover"
                      src={post.featuredImage.url}
                      alt={post.title}
                    />
                </div>
                <div className='app_postdetail-container-content'>
                      {post.content.raw.children.map((typeObj, index)=>{
                        const children = typeObj.children.map((item, itemIndex)=> getContentFragment(itemIndex, item.text))
                
                        return getContentFragment(index, children, typeObj, typeObj.type)
                      })}
                </div>
                {/* <div className='app_postdetail-container-content'>
                  {i18n.language === 'en' 
                  ? <>
                      {post.content.raw.children.map((typeObj, index)=>{
                        const children = typeObj.children.map((item, itemIndex)=> getContentFragment(itemIndex, item.text))
                
                        return getContentFragment(index, children, typeObj, typeObj.type)
                      })}
                    </>
                  : <>
                    {post.localizations[0].content.raw.children.map((typeObj, index)=>{
                        const children = typeObj.children.map((item, itemIndex)=> getContentFragment(itemIndex, item.text))
                
                        return getContentFragment(index, children, typeObj, typeObj.type)
                      })}
                    </>}
                </div> */}
                <p className='app-postdetail-post-content-text' style={{marginTop: 40, textAlign: 'start', cursor: 'pointer'}}>{t("source")} <a href={post.source} style={{textTransform: 'none', color: '#768899'}} target="_blank" rel="noopener noreferrer">{post.from}</a></p>
            </div>
          </>)
}

export default PostDetail