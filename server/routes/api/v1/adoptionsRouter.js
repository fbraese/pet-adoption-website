import express from "express"
import Adoption from "../../../models/Adoption.js"

const adoptionsRouter = new express.Router()

adoptionsRouter.post("/", async (req, res) => {
  try {
    const adoptionEntry = new Adoption(req.body)
    await adoptionEntry.save()
    res.status(201).json({adoption: adoptionEntry})
  } catch (error) {
    console.error("Error from adoptionsRouter (post route)", error)
    res.status(500).json({ errors: error })
  }
})

export default adoptionsRouter 