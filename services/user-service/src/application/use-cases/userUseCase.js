class UserUseCase {
    constructor(userService) {
        this.userService = userService
    }

    async register(user) {
        const userId = await this.userService.register(user)
        return userId
    }

    async login(user) {
        const userId = await this.userService.login(user)
        return userId
    }

    async profile(userId) {
        const user = await this.userService.login(userId)
        return user
    }
}

export default UserUseCase