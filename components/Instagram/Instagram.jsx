import React from 'react'
import WhiteTop from '../CustomTops/WhiteTop'
import post1 from '../../assets/post1.jpg'
import post2 from '../../assets/post2.jpg'
import post3 from '../../assets/post3.jpg'
import './Instagram.css'
const Instagram = () => {
  return (
      <>
      <WhiteTop/>
      <div className='app_instagram-container-master'>
      <div className='app_instagram-container  section_padding'>
            <h2 className='app_instagram-title'>Instagram<span>.</span></h2>
            <p><a className='app_instagram-ig' href="https://www.instagram.com/fontoura.us/" target="_blank" rel="noopener noreferrer" >@fontoura.us</a></p>
            <div className='app_instagram-posts-container'>
                  <div className='app_instagram-post'>
                        <a className='app_instagram-post-link' href="https://www.instagram.com/p/Cj5jsn3rC9J/" target="_blank" rel="noopener noreferrer" >
                              <img className='app_instagram-post-img' src={post1} alt="post 1" />
                        </a>
                  </div>
                  <div className='app_instagram-post'>
                        <a className='app_instagram-post-link' href="https://www.instagram.com/p/CjnRGaKrE6j/" target="_blank" rel="noopener noreferrer" >
                              <img className='app_instagram-post-img' src={post2} alt="post 1" />
                        </a>
                  </div>
                  <div className='app_instagram-post'>
                        <a className='app_instagram-post-link' href="https://www.instagram.com/p/ChPfSqkLrst/" target="_blank" rel="noopener noreferrer" >
                              <img className='app_instagram-post-img' src={post3} alt="post 1" />
                        </a>
                  </div>
            </div>
      </div>
    </div>
</>
  )
}

export default Instagram