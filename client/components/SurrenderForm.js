import React, { useState, useEffect } from "react"
import ErrorList from "./ErrorsList"

const SurrenderForm = (props) => {
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState({})
  const [petTypes, setPetTypes] = useState([])
  const [surrender, setSurrender] = useState({
    personName: "",
    phoneNumber: "",
    email: "",
    petName: "",
    age: "",
    petTypeId: "",
    imgUrl: "",
    vaccinationStatus: "",
    adoptionStory: "",
  })

  const petTypeOptions = petTypes.map((type) => {
    return <option
      key={type.id}
      value={type.id}>
      {type.type}
    </option>
  })

  const handleInputChange = (event) => {
    setSurrender({
      ...surrender,
      [event.currentTarget.id]: event.currentTarget.value,
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    if (isValid()) {
      addPetForSurrender()
    }
  }

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

  const addPetForSurrender = async () => {
    try {
      const response = await fetch("/api/v1/surrenders", {
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
      setMessage("Your surrender request is in process.")
      clearForm()
    } catch (error) {
      console.error("error in form fetch POST", error)
    }
  }

  const isValid = () => {
    let submitErrors = {}
    const requiredFields = ['personName', 'phoneNumber', 'email', 'petName', 'age', 'petTypeId', 'imgUrl', 'vaccinationStatus', 'adoptionStory']
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
    setSurrender({
      personName: "",
      phoneNumber: "",
      email: "",
      petName: "",
      age: "",
      petTypeId: "",
      imgUrl: "",
      vaccinationStatus: "",
      adoptionStory: "",
    })
    setErrors({})
  }

  useEffect(() => {
    fetchPetTypes()
  }, [])

  return (
    <div className="home">
      <ErrorList errors={errors} />
      <h4>{message}</h4>
      <h3>Surrender Pet for Adoption</h3>
      <form onSubmit={submitHandler} className="adoption-form">
        <div>
          <label htmlFor="personName">Name:
            <input
              type="text"
              id="personName"
              name="personName"
              onChange={handleInputChange}
              value={surrender.personName}
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

          <label htmlFor="petName">Pet Name:
            <input
              type="text"
              id="petName"
              name="petName"
              onChange={handleInputChange}
              value={surrender.petName}
            />
          </label>

          <label htmlFor="age">Age:
            <input
              type="text"
              id="age"
              name="age"
              onChange={handleInputChange}
              value={surrender.age}
            />
          </label>

          <label htmlFor="petTypeId">Pet Type:
            <select name="petTypeId" id="petTypeId" onChange={handleInputChange}>
              <option value=""></option>
              {petTypeOptions}
            </select>
          </label>

          <label htmlFor="imgUrl">Pet Photo:
            <input
              type="text"
              id="imgUrl"
              name="imgUrl"
              onChange={handleInputChange}
              value={surrender.imgUrl}
            />
          </label>
          <label htmlFor="vaccinationStatus">Pet is Vaccinated:
            <select name="vaccinationStatus" id="vaccinationStatus" onChange={handleInputChange} value={surrender.vaccinationStatus}>
              <option value=""></option>
              <option value="true">true</option>
              <option value="false">false </option>
            </select>
          </label>

          <label htmlFor="adoptionStory">Adopt Me Story:
            <input
              type="text"
              id="adoptionStory"
              name="adoptionStory"
              onChange={handleInputChange}
              value={surrender.adoptionStory}
            />
          </label>

          <input type="submit" value="Submit Form" />
        </div>
      </form>
    </div>
  )
}
export default SurrenderForm