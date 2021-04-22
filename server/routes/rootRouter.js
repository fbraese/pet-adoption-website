import express from "express"

import clientRouter from "./clientRouter.js"
import petTypeRouter from "./api/v1/petTypeRouter.js"
import surrenderRouter from "./api/v1/surrenderRouter.js"
import adoptionsRouter from "./api/v1/adoptionsRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/api/v1/petType", petTypeRouter)
rootRouter.use("/api/v1/surrender", surrenderRouter)
rootRouter.use("/api/v1/adoptions", adoptionsRouter)
rootRouter.use("/", clientRouter)

export default rootRouter
