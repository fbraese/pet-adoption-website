import React, { useState, useEffect } from "react"
import PetTile from "./PetTile.js"

const PetsByType = (props) => {
  const [pets, setPets] = useState([])
  const fetchPetsByType = async () => {
    try {
      const petType = props.match.params.type
      // console.log(petType)
      const response = await fetch(`/api/v1/petType/${petType}`)
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        const error = new Error(errorMessage)
        // console.log(`Response from fetch by type: ${response}`)
        throw (error)
      }
      const responseBody = await response.json()
      setPets(responseBody.pets)
      console.log(pets)
      // console.log(`Response Body: ${responseBody[0]}`);
    } catch (error) {
      console.error(`error in fetch by type: ${error}`)
    }
  }

  const petsTiles = pets.map((pet) => {
    return (
      <PetTile
        key={pet.id}
        pet={pet}
      />
    )
  })


  useEffect(() => {
    fetchPetsByType()
  }, [])

  return (
    <div class="pet-container">
      {petsTiles}
    </div>
  )
}

export default PetsByType