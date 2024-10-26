import mongoose from "mongoose"

class UserModel {
  constructor() {
    const UserSchema = new mongoose.Schema({
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    });

    return mongoose.model('User', UserSchema);
  }
}
export default UserModel
