import express from "express"

import PetType from "../../../models/PetType.js"
import Pet from "../../../models/Pet.js"

const petTypeRouter = new express.Router()

petTypeRouter.get("/", async (req, res) => {
  try {
    const petTypes = await PetType.findAll()
    res.status(200).json({ petTypes: petTypes })
  } catch (error) {
    res.status(500).json({ errors: error })
  }
})

petTypeRouter.get("/:type", async (req, res) => {
  try {
    const pets = await Pet.findByType(req.params.type)
    res.status(200).json({ pets: pets })
  } catch (error) {
    res.status(500).json({ errors: error })
  }
})

petTypeRouter.get("/:type/:id", async (req, res) => {
  try {
    const pet = await Pet.findByTypeAndId(req.params.type, req.params.id)
    res.status(200).json({ pet: pet })
  } catch (error) {
    console.error("Error from petTypeRouter findByTypeAndId get request", error)
    res.status(500).json({ errors: error })
  }
})

export default petTypeRouter