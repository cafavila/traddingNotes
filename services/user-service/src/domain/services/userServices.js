import User from "../entities/user.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

class userService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async register({email, password}) {
        const userExists = await this.userRepository.findByEmail(email)
        if (userExists) throw new Error('Usuario ya registrado')

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({email, hashedPassword})
        const newUser = await this.userRepository.save(user)
        return {email: newUser.email}
    }
}

export default userService