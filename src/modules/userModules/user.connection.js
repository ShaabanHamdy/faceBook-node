import userModel from "../../../DB/models/user/user.model.js"
import { tokenGenerate } from "../../utils/token.js"
import bcrypt from "bcrypt"


export const signup = async (req, res, next) => {

    if (await userModel.findOne({ email: req.body.email })) return next(new Error("email already exist", { cause: 400 }))


    const user = new userModel(req.body)
    await user.save()
    if (!user) return next(new Error("fail to create user", { cause: 400 }))


    const token = tokenGenerate({ payload: { user } })
    if (!token) return next(new Error("fail to generate userToken", { cause: 400 }))

    res.json({ message: "success", user })

}

export const login = async (req, res, next) => {
    const checkEmail = await userModel.findOne({ email: req.body.email })
    if (!checkEmail) return next(new Error("invalid email information", { cause: 400 }))
    const matchPass = bcrypt.compareSync(req.body.password,checkEmail.password)

    if (!matchPass) return next(new Error("invalid password information", { cause: 400 }))

    const token = tokenGenerate({ payload: { id: checkEmail._id } })
    if (!token) return next(new Error("fail in token login", { cause: 400 }))

    res.json({ message: "success", token })

}
