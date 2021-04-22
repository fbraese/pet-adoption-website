import express from "express"

import clientRouter from "./clientRouter.js"
import petTypeRouter from "./api/v1/petTypeRouter.js"
import surrendersRouter from "./api/v1/surrendersRouter.js"
import adoptionsRouter from "./api/v1/adoptionsRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/api/v1/petType", petTypeRouter)
rootRouter.use("/api/v1/surrenders", surrendersRouter)
rootRouter.use("/api/v1/adoptions", adoptionsRouter)
rootRouter.use("/", clientRouter)

export default rootRouter
