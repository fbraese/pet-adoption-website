import React, { useState, useEffect } from "react"
import PetTypeTile from "./PetTypeTile"

const PetTypesList = (props) => {
  const [petTypes, setPetTypes] = useState([])

  const fetchPetTypes = async () => {
    try {
      const response = await fetch("/api/v1/petType")
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        const error = new Error(errorMessage)
        throw (error)
      }
      const responseBody = await response.json()
      setPetTypes(responseBody.petTypes)
    } catch (error) {
      console.error(`error in fetch: ${error}`)
    }
  }

  const petTypeTiles = petTypes.map((petType) => {
    return (
      <PetTypeTile
        key={petType.id}
        petType={petType}
      />
    )
  })

  useEffect(() => {
    fetchPetTypes()
  }, [])

  return (
    <div>
      {petTypeTiles}
    </div>
  )
}

export default PetTypesList