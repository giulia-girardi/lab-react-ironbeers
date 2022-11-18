import { Link } from 'react-router-dom';
import homeIcon from '../assets/home-icon.png'

function HeaderBar() {
  return (
    <div className='head-bar'>
      <Link to="/">
        <img className="icon" src={homeIcon} alt="home icon" />
      </Link>
    </div>
  )
}

export default HeaderBar