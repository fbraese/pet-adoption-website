import express from "express"

import SurrenderApplication from "../../../models/SurrenderApplication.js"

const surrenderRouter = new express.Router()

surrenderRouter.post("/", async (req, res) => {
  const newSurrender = new SurrenderApplication(req.body)
  newSurrender.save()
})

export default surrenderRouter