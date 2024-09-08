import express from 'express'
import userRoutes from '../routes/userRoutes.js'
import globalErrorHandler from '../middlewares/globalErrorHandler.js'

const app = express()
app.use(express.json())
app.use('/api/user-service/v1', userRoutes)
app.use(globalErrorHandler)

export default app