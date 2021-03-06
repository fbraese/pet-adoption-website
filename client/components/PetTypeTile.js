import React from "react"

const PetTypeTile = (props) => {
  const { id, type, description, imgUrl } = props.petType
  return (
    <div className="pet-type-tile solid-border-bottom cell small-6">
      <div>
        <img src={imgUrl} alt={`Picture of a ${type}`} />
      </div>
      <h3>
        {type}
      </h3>
      <p>
        {description}
      </p>
    </div>
  )
}

export default PetTypeTile