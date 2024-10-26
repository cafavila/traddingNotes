import UserRepository from "../../domain/repositories/userRepository.js"
import UserModel from "./userModel.js"

class MongoUserRepository extends UserRepository {
    constructor() {
        super()
        this.User = UserModel
    }

    createUser(userData) {
        const user = new this.User(userData);
        return user.save();
      }
    
    findByEmail(email) {
        return this.User.findOne({ email });
      }
    
    updateUserByEmail(email, updateData) {
        return this.User.findOneAndUpdate({ email }, updateData, { new: true });
      }
    
    deleteUserByEmail(email) {
        return this.User.findOneAndDelete({ email });
      }
    }

export default MongoUserRepository