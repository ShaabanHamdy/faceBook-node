import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "firstName is required"],
        index: true,
    },
    lastName: {
        type: String,
        required: [true, "lastName is required"],
        index: true,
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
    },
    mobile: {
        type: String,
        required: [true, "mobile is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
});

userSchema.pre("save", function (next, doc) {
    this.password = bcrypt.hashSync(this.password, +process.env.SALT_ROUNDS)
    next()
})
const userModel = mongoose.models.User || mongoose.model('User', userSchema);
export default userModel
