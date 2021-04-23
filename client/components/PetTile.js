import React from "react"
import { Link } from "react-router-dom"

const PetTile = (props) => {
  const { id, name, age, vaccinationStatus, adoptionStory, availableForAdoption, petTypeId, type, imgUrl } = props.pet
  let isVaccinated = ""

  if (vaccinationStatus) {
    isVaccinated = "Yes"
  } else {
    isVaccinated = "No"
  }

  return (
    <div className="pet-tile cell small-6">
      <div className="pet-pic">
        <Link to={`/pets/${type}/${id}`}>
          <img src={imgUrl} alt={`Picture of pet named ${name}`} />
        </Link>
      </div>
      <div>
        <Link to={`/pets/${type}/${id}`}>
          {name}
        </Link>
        <h5>
          Age: {age}
        </h5>
        <h5>
          Vaccination Status: {isVaccinated}
        </h5>
      </div>
      <p>
        {adoptionStory}
      </p>
    </div>
  )
}

export default PetTile