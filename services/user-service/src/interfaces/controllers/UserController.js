class UserController {
    constructor(userUseCase) {
        this.userUseCase = userUseCase
        console.log("[INFO] Nuevo usuario")
    }
    async register(req, res) {
        const {name, email, password} = req.body
        const user = await this.userUseCase.register({name, email, password})
        res.status(201).json(user)
    }

    async login(req, res) {
        const {email, password} = req.body
        const userId = await this.userUseCase.login(email, password)
        res.status(200).json(userId)
    }

    async profile(req, res) {
        const {userId} = req.body
        const user = await this.userUseCase.profile(userId)
        res.status(200).json(user)
    }
}

export default UserController