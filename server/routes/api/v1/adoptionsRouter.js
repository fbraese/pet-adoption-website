import express from "express"

const adoptionsRouter = new express.Router()

adoptionsRouter.post("/", async (req, res) => {
  try {
    
    // const pet = await Pet.findByTypeAndId(req.params.type, req.params.id)
    // res.status(200).json({ pet: pet })
  } catch (error) {
    // console.error("Error from petTypeRouter findByTypeAndId get request", error)
    // res.status(500).json({ errors: error })
  }
})

export default adoptionsRouter 