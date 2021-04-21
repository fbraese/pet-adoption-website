import React, {useState} from "react"

const PetAdoptionForm = (props) => {
  const [adoption, setAdoption] = useState({
    name = "",
    phoneNumber = "",
    email = "",
    homeStatus = "",
    applicationStatus = "",
    adoptablePetId = "",
  })

  const handleChange = (event) => {
    setAdoption({
      ...adoption,
      [event.currentTaget.id]:event.currentTaget.value
    })
  }
  //left of at needing to put the handleChange (plus all the rest of the steps)
  return (
  <form onFormChange={ handleChange }>
    <div>
      <label htmlFor="name">
        <input type="text" id="name" name="name" />
      </label>

      <label htmlFor="phoneNumber">
        <input type="text" id="phoneNumber" name="phoneNumber" />
      </label>

      <label htmlFor="email">
        <input type="text" id="email" name="email" />
      </label>

      <label htmlFor="homeStatus">
        <input type="text" id="homeStatus" name="homeStatus" />
      </label>

      <label htmlFor="applicationStatus">
        <input type="text" id="applicationStatus" name="applicationStatus" />
      </label>
      
      <label htmlFor="adoptablePetId">
        <input type="text" id="adoptablePetId" name="adoptablePetId" />
      </label>
    </div>
  </form>
  )
}

export default PetAdoptionForm