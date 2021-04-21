import React, { useState } from "react"
import ErrorList from "./ErrorsList"

const SurrenderForm = (props) => {
  const [errors, setErrors] = useState({})
  const [surrender, setSurrender] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    adoptablePetId: "",
    status: "",
    age: "",
    petType: "",
    imgUrl: "",
    vaccinationStatus: "",

  })

  const handleInputChange = (event) => {
    setSurrender({
      ...surrender,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    if (isValid()) {
      addPetForSurrender()
    } else {
      console.log("form Not submitted!")
    }
  }

  const addPetForSurrender = async () => {
    try {
      //do we need a new api endpoint ?? how do we interact with DB with all pets
      const response = await fetch("/api/v1/petType", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(surrender)
      })
      if (!response.ok) {
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
    const requiredFields = ['name', 'phoneNumber', 'email']
    requiredFields.forEach(field => {
      if (surrender[field].trim() === "") {
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
    setsurrender({
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
      <ErrorList errors={errors} />
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name:
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
              value={surrender.name}
            />
          </label>

          <label htmlFor="phoneNumber">Phone Number:
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              onChange={handleInputChange}
              value={surrender.phoneNumber}
            />
          </label>

          <label htmlFor="email">Email:
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleInputChange}
              value={surrender.email}
            />
          </label>

          <label htmlFor="petType">Pet Type:
            <select name="petType" id="petType" onChange={handleInputChange} value={surrender.petType}>
              <option value=""></option>
              <option value="cat">Cat</option>
              <option value="dog">Dog </option>
              <option value="mythical-creature">Mythical Creature </option>
            </select>
          </label>

          <input type="submit" value="Submit Form" />
        </div>
      </form>
    </div>
  )
}

export default SurrenderForm