import jwt from "jsonwebtoken"

//======== generateToken



export const tokenGenerate = ({
    payload = {},
    signature = process.env.TOKEN_SIGNATURE,
    expiresIn = 60 * 60 * 24

}) => {


    const token = jwt.sign(payload, signature, { expiresIn })
    return token
}

//============================================ decode token
export const tokenDecode = ({
    payload = '',
    signature = process.env.TOKEN_SIGNATURE,

}) => {


    const decode = jwt.verify(payload, signature)
    return decode
}
