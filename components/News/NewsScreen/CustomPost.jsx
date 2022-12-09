import { RiArrowRightSLine } from "react-icons/ri"
import moment from "moment";
import { useTranslation } from 'next-i18next'

const CustomPost = ({post}) => {
  const { t, i18n } = useTranslation();
      return (
            <>
              <div  className="app_newsScreen-post-container">
                  <div className="app_newsScreen-post-image-container">
                    <img src={post.featuredImage.url} alt="post cover" />
                  </div>
                    <p className="app_newsScreen-post-title">{i18n.language === 'en' ? post.title : post.localizations[0].title}</p> 
                    <p className="app_newsScreen-post-subtitle">{i18n.language === 'en' ? post.categories[0].name : post.categories[0].localizations[0].name} - {moment(post.createdAt).format("L")}</p>
                    <p className="app_newsScreen-post-text">{i18n.language === 'en' ? post.shortDescription : post.localizations[0].shortDescription}</p> 
                    <a to={`/News/${post.id}`} className="app_newsScreen-post-link" >{t("read-more")} <RiArrowRightSLine /></a>
                </div>
            </>
          )
}

export default CustomPost