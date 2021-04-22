import React, { useState, useEffect } from "react"

const PetDetailShow = (props) => {

  const [showErrors, setShowErrors] = useState(false)

  const [pet, setPet] = useState({
    id: "",
    name: "",
    age: "",
    vaccinationStatus: "",
    adoptionStory: "",
    availableForAdoption: "",
    petTypeId: "",
    type: "",
    imgUrl: ""
  })

  const petType = props.match.params.type
  const petId = props.match.params.id

  const fetchPetByTypeAndId = async () => {
    try {
      const response = await fetch(`/api/v1/petType/${petType}/${petId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        const error = new Error(errorMessage)
        throw (error)
      }
      const responseBody = await response.json()
      setPet(responseBody.pet)
    } catch (error) {
      console.error(`error in fetch by type and id: ${error}`)
      setShowErrors(true)
    }
  }

  useEffect(() => {
    fetchPetByTypeAndId()
  }, [])

  let isVaccinated = ""

  if (pet.vaccinationStatus) {
    isVaccinated = "Yes"
  } else {
    isVaccinated = "No"
  }

  let errorString = ""

  if (showErrors) {
    return (
      <h1>{`Sorry! A ${petType} with an id of ${petId} does not exist.`}</h1>
    )
  }
  else {
    return (
      <div className="pet-container">
        <div className="pet-detail">
          <div className="pet-pic">
            <img src={pet.imgUrl} alt={`Picture of pet named ${pet.name}`} />
          </div>
          <div>
            <h1>
              {pet.name}
            </h1>
            <h5>
              Age: {pet.age}
            </h5>
            <h5>
              {`Vaccination Status: ${isVaccinated}`}
            </h5>
          </div>
          <p>
            {pet.adoptionStory}
          </p>
        </div>
      </div>
    )
  }
}

export default PetDetailShow