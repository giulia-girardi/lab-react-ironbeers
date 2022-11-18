import { Link } from 'react-router-dom';
import beersImage from '../assets/beers.png'
import randomBeerImage from '../assets/random-beer.png'
import newBeerImage from '../assets/new-beer.png'


function Home() {
  return (
    <div className="home">
        <Link to='/beers' className='linkstyle'>
          <img src={beersImage} alt="bar" />
          <h2>All Beers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis urna sed libero porta commodo.</p>
        </Link>
        <Link to='/random-beer' className='linkstyle'>
          <img src={randomBeerImage} alt="beer draft" />
          <h2>Random Beer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis urna sed libero porta commodo.</p>
        </Link>
        <Link to='/new-beer' className='linkstyle'>
          <img src={newBeerImage} alt="beer glass and bottle" />
          <h2>New Beer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis urna sed libero porta commodo.</p>
        </Link>
    </div>
  )
}

export default Home