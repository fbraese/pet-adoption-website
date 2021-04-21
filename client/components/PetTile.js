import React from "react"

const PetTile = (props) => {
  const { id, name, age, vaccinationStatus, adoptionStory, availableForAdoption, petTypeId, type, imgUrl } = props.pet
  let isVaccinated = ""

  if (vaccinationStatus) {
    isVaccinated = "Yes"
  } else {
    isVaccinated = "No"
  }

  return (
    <div class="pet-tile">
      <div class="pet-pic">
        <a href={`/pets/${type}/${id}`}>
          <img src={imgUrl} alt={`Picture of pet named ${name}`} />
        </a>
      </div>
      <div>
        <a href={`/pets/${type}/${id}`}>
          {name}
        </a>
        <h5>
          Age: {age}
        </h5>
        <h5>
          {`Vaccination Status: ${isVaccinated}`}
        </h5>
      </div>
      <p>
        {adoptionStory}
      </p>
    </div>
  )
}

export default PetTile