import HeaderBar from './HeaderBar';
import { useState, useEffect } from "react"

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState('');

  const getRandomBeer = async (setter) => {
    const beersArrayForRandom = await fetch('https://ih-beers-api2.herokuapp.com/beers')
    const beersArrayForRandomParsed = await beersArrayForRandom.json();
    const RandomIndex = Math.floor(Math.random() * beersArrayForRandomParsed.length)
    setter(beersArrayForRandomParsed[RandomIndex])
    console.log(beersArrayForRandomParsed[RandomIndex])

}

useEffect(() => {
  getRandomBeer(setRandomBeer)
}, [])


  return (
    <div>
        <HeaderBar />
        <img src={randomBeer.image_url}/>
        <h3>{randomBeer.name}</h3>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
    </div>
  )
}

export default RandomBeer