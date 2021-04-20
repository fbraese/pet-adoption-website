import express from "express"
import PetType from "../../../models/PetType.js"

const petTypeRouter = new express.Router()

petTypeRouter.get("/", async (req, res) => {
  try {
    const petTypes = await PetType.findAll()
    res.status(200).json({petTypes : petTypes})
  } catch (error) {
    console.error("Error from petTypeRouter get request", error)
    res.status(500).json({errors: error})
  }
})

export default petTypeRouter