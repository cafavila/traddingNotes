import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'

import UserController from '../../interfaces/controllers/UserController.js'
import UserUseCase from '../../application/use-cases/userUseCase.js'
import UserService from '../../domain/services/userServices.js'
import MongoUserRepository from '../database/MongoUserDB.js'

const router = express.Router()
const userRepository = new MongoUserRepository()
const userService = new UserService(userRepository)
const userUseCase = new UserUseCase(userService)
const userController = new UserController(userUseCase)

router.post('/register', (req, res) => {
    userController.register(req, res)
})
router.post('/login', (req, res) => {
    res.status(201).json({message: "Access Denied"})
})
router.get('/profile', authMiddleware, (req, res) => {
    res.status(202).json({message: "Perfilado"})
})

export default router