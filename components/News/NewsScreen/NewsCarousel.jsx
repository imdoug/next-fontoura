
import moment from "moment";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'
import { useTranslation } from 'next-i18next'

const NewsCarousel = ({posts}) => {
  const { i18n } = useTranslation();
      const slideLeft = () =>{
            var slider = document.getElementById("slider")
            slider.scrollLeft = slider.scrollLeft + 330;
      
        }
        const slideRight = () =>{
          var slider = document.getElementById("slider")
          slider.scrollLeft = slider.scrollLeft - 330;
        }
        return (
          <>
          <div className="app_news_carousel-container">
            <div id="slider"  className="app_news_carousel-container-slider">
              {posts.map((post)=>{
                return(
                  <div className="slide-card">
                    <img className="app_news_carousel-slide-card-img"src={post.node.featuredImage.url} alt="news cover" />
                    <a to={`/News/${post.cursor}`}>
                      <p className="app_news_carousel-slide-card-text">
                        {i18n.language === 'en' ? post.node.title : post.node.localizations[0].title}
                        <br></br>
                        <span className="app_news_carousel-slide-card-date" >{i18n.language === 'en' ? post.node.categories[0].name : post.node.categories[0].localizations[0].name} - {moment(post.node.createdAt).format("L")}</span>
                      </p>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="app_new_carousel-arrows" >
            <MdOutlineArrowBackIosNew size={22} className="app_new_carousel-arrows-back" onClick={slideLeft}/>
            <MdOutlineArrowForwardIos size={22} className="app_new_carousel-arrows-foward" onClick={slideRight} />
          </div>
          </>
        )
}

export default NewsCarousel