//aded import to petType page for testing! remove when done!!!
import React, {useState} from "react"

import ErrorList from "./ErrorsList"

const PetAdoptionForm = (props) => {
  const [errors, setErrors] = useState({})
  const [adoption, setAdoption] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    homeStatus: "",
    applicationStatus: "",
    adoptablePetId: "",
  })

  const handleInputChange = (event) => {
    setAdoption({
      ...adoption,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    if (isValid()) {
      addPetForAdoption()
    } else {
      console.log("form Not submitted!")
    }
  }

  const addPetForAdoption = async () => {
    try {
      //do we need a new api endpoint ?? how do we interact with DB with all pets
      const response = await fetch("/api/v1/petType", {
        method: "POST",
        headers: new Headers ({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(adoption)
      })
      if(!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      console.log("posted succesfully", responseBody)
      setErrors({}) // to force re-render on success
      clearForm()
    } catch (error) {
      console.error("error in form fetch POST", error)
    }
  }

  const isValid = () => {
    let submitErrors = {}
    const requiredFields = ['name', 'phoneNumber', 'email', 'homeStatus']
    requiredFields.forEach(field => {
      if (adoption[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      } 
    })
    setErrors(submitErrors)
    return Object.entries(submitErrors).length === 0 && submitErrors.constructor === Object
  }

  const clearForm = () => {
    setAdoption({
      name: "",
      phoneNumber: "",
      email: "",
      homeStatus: "",
      applicationStatus: "",
      adoptablePetId: "",
    })
  }

  return (
    <div>
      <ErrorList errors={errors}/>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name:
            <input 
              type="text" 
              id="name" 
              name="name" 
              onChange={handleInputChange}
              value={adoption.name}
            />
          </label>

          <label htmlFor="phoneNumber">Phone Number:
            <input 
              type="text" 
              id="phoneNumber" 
              name="phoneNumber" 
              onChange={handleInputChange}
              value={adoption.phoneNumber}
            />
          </label>

          <label htmlFor="email">Email:
            <input 
              type="text" 
              id="email" 
              name="email" 
              onChange={handleInputChange}
              value={adoption.email}
            />
          </label>

          <label htmlFor="homeStatus">Home status:
            <select name="homeStatus" id="homeStatus" onChange={handleInputChange} value={adoption.homeStatus}>
            <option value=""></option>
              <option value="own">Own</option>
              <option value="rent">Rent </option>
            </select>
          </label>

          <input type="submit" value="Submit Form"/>
        </div>
      </form>
    </div>
  )
}

export default PetAdoptionForm