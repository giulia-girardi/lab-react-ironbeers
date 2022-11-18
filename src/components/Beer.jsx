import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import HeaderBar from './HeaderBar';

function Beer() {
    const [beer, setBeer] = useState('');
    const {id} = useParams();


    const getBeer = async (setter) => {
        const oneBeer = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        const oneBeerParsed = await oneBeer.json();
        setter(oneBeerParsed)
    }

    useEffect(() => {
        getBeer(setBeer)
    }, [])

  return (
    <div>
        <HeaderBar />
        <img src={beer.image_url}/>
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
    </div>
  )
}

export default Beer