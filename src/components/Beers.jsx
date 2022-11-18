import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import { useNavigate } from 'react-router-dom'


function Beers() {
    const [beers, setBeers] = useState([]);
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const getBeers = async(setter) => {
        try{
            const beersArray = await fetch('https://ih-beers-api2.herokuapp.com/beers')
            const beersArrayParsed = await beersArray.json()
            console.log(beersArrayParsed)
            setter(beersArrayParsed)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBeers(setBeers)
    }, []) 

    const handleChange = async (event) => {
        console.log(event)
        setQuery(event.target.value)
        const queriedBeer = await fetch(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
        const queriedBeerParsed = await queriedBeer.json()
        setBeers(queriedBeerParsed)
    }

    
  return ( 
    <div>
        <HeaderBar />
        <input value={query} type='text' onChange={handleChange}/>
        {beers ?
            <div>
                {beers.map((beer) => {
                    return (
                    <div className='beer-block' key={beer._id}>
                        <img className='beer-image' src={beer.image_url} />
                        <Link to={`/${beer._id}`}>
                            <h3>{beer.name}</h3>
                            <p>{beer.tagline}</p>
                            <p>Created by: {beer.contributed_by}</p>
                        </Link>
                    </div>
                    )
                    
                })}
            </div>
        : <p>Loading</p>} 
    </div>
  )
}

export default Beers