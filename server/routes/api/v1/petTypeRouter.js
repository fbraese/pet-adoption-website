import express from "express"
import PetType from "../../../models/PetType.js"
import Pet from "../../../models/Pet.js"

const petTypeRouter = new express.Router()

petTypeRouter.get("/", async (req, res) => {
  try {
    const petTypes = await PetType.findAll()
    res.status(200).json({ petTypes: petTypes })
  } catch (error) {
    console.error("Error from petTypeRouter findAll get request", error)
    res.status(500).json({ errors: error })
  }
})

petTypeRouter.get("/:type", async (req, res) => {
  console.log("inside get with findtype method")
  try {
    debugger
    console.log(req.params.type)
    const pets = await Pet.findByType(req.params.type)
    res.status(200).json({ pets: pets })
    console.log(pets)

  } catch (error) {
    console.error("Error from petTypeRouter findByType get request", error)
    res.status(500).json({ errors: error })
  }
})

export default petTypeRouter