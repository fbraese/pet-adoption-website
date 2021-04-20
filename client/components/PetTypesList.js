import React, {useState, useEffect} from "react"

const PetTypesList = (props) => {
  const [petTypes, setPetTypes] = useState({
    id: "",
    imgUrl: "",
    description: "",
    type: ""
  })

  //add use state for errors state for non-core story
  const fetchPetTypes = async () => {
    try {
      const response = await fetch("/api/v1/petType")
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        const error = new Error(errorMessage)
        throw(error)
      }
      const responseBody = await response.json()
      console.log(responseBody.petTypes)
      setPetTypes(responseBody.petTypes)
    } catch (error) {
      console.error(`error in fetch: ${errorMessage}`)
    }
  }
  
  //map out tiles
  

  useEffect(()=>{
    fetchPetTypes()
  },[])

  return(
    <h1>"hello"</h1>
  )
}

export default PetTypesList