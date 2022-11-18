import HeaderBar from './HeaderBar';
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function NewBeer() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, tagline, description})
    })
    const parsed = await response.json()
    console.log(parsed._id)
    navigate(`/${parsed._id}`)
  }


  return (
    <div>
        <HeaderBar />
        <form onSubmit={handleSubmit}>
          <label>Name<input value={name} onChange={(event)=> setName(event.target.value)}/></label>
          <label>Tagline<input value={tagline} onChange={(event)=> setTagline(event.target.value)}/></label>
          <label>Description<input value={description} onChange={(event)=> setDescription(event.target.value)}/></label>
          <button type='submit'>Add Beer</button>
        </form>
    </div>
  )
}

export default NewBeer