import express from "express"

import SurrenderApplication from "../../../models/SurrenderApplication.js"

const surrendersRouter = new express.Router()

surrendersRouter.post("/", async (req, res) => {
  try {
    const newSurrender = new SurrenderApplication(req.body)
    const petId = await newPet.save()
    await newSurrender.save(petId)
    res.status(201).json({ newSurrender, newPet })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error })
  }
})

export default surrendersRouter