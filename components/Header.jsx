import NavBar from './Nav/NavBar'
import TopHeader from './TopHeader/TopHeader'

const Header = () => {
  return (
    <div className='app_header-container'>
      <TopHeader />
      <NavBar/>
    </div>
  )
}

export default Header