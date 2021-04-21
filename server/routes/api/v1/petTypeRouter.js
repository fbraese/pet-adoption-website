import express from "express"
import PetType from "../../../models/PetType.js"
import Pet from "../../../models/Pet.js"

const petTypeRouter = new express.Router()

petTypeRouter.get("/", async (req, res) => {
  try {
    const petTypes = await PetType.findAll()
    res.status(200).json({ petTypes: petTypes })
  } catch (error) {
    // console.error("Error from petTypeRouter findAll get request", error)
    res.status(500).json({ errors: error })
  }
})

petTypeRouter.get("/:type", async (req, res) => {
  console.log("inside get with findtype method")
  try {
    // console.log(req.params.type)
    const pets = await Pet.findByType(req.params.type)
    res.status(200).json({ pets: pets })
    // console.log(`Pets variable: ${pets}`)

  } catch (error) {
    // console.error("Error from petTypeRouter findByType get request", error)
    res.status(500).json({ errors: error })
  }
})
//for story 3
// petTypeRouter.get("/:type/:id", async (req, res) => {
//   console.log("inside get with findByTypeAndId method")
//   try {
//     console.log(req.params.type)
//     const pet = await Pet.findByTypeAndId(req.params.type, req.params.id)
//     res.status(200).json({ pet: pet })
//     console.log(pet)

//   } catch (error) {
//     console.error("Error from petTypeRouter findByTypeAndId get request", error)
//     res.status(500).json({ errors: error })
//   }
// })

export default petTypeRouter