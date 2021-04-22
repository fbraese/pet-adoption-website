import express from "express"
import Pet from "../../../models/Pet.js"
import SurrenderApplication from "../../../models/SurrenderApplication.js"

const surrendersRouter = new express.Router()

surrendersRouter.post("/", async (req, res) => {
  try {
    const newSurrender = new SurrenderApplication({ ...req.body, name: req.body.personName })
    const newPet = new Pet({ ...req.body, name: req.body.petName })
    const petId = await newPet.save()
    await newSurrender.save(petId)
    res.status(201).json({ newSurrender, newPet })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error })
  }
})

export default surrendersRouter