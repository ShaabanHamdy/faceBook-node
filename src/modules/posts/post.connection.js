import moment from "moment"
import postModel from '../../../DB/models/posts/post.model.js'
import cloudinary from '../../utils/cloudinary.js'



export const createPost = async (req, res, next) => {



    const { secure_url, public_id } =
        await cloudinary.uploader.upload(req.file?.path,
            { folder: `posts/mainImage` })
    req.body.mainImage = { secure_url, public_id }
    const post = await postModel.create(req.body)
    if (!post) return next(new Error("fail to create this post ", { cause: 409 }))
    res.status(201).json({ message: "success", post })

}

// ===============================================================================

export const updatePost = async (req, res, next) => {

    if (! await postModel.findById(req.params._id)) return next(new Error("fail to find _id ", { cause: 409 }))

    if (!req.files) return next(new Error("fail in upload img ", { cause: 409 }))
    const { secure_url, public_id } =
        await cloudinary.uploader.upload(req.files.mainImage[0].path,
            { folder: `posts/mainImage` })
    req.body.mainImage = { secure_url, public_id }

    const post = await postModel.create(req.body)
    if (!post) return next(new Error("fail to create this post ", { cause: 409 }))
    res.status(201).json({ message: "success", post })

}

// =======================================================================
export const deletePost = async (req, res, next) => {
    if (! await postModel.findById(req.params._id)) {
        return next(new Error("fail to find  id"))
    }
    const post = await postModel.findOneAndDelete({ _id: req.params._id })
    if (!post) {
        return next(new Error("fail to delete  post "))

    }
    res.json({ message: "success" })
}

// ===================================================================
export const deleteAllPost = async (req, res, next) => {
    const post = await postModel.deleteMany()
    if (!post) {
        return next(new Error("fail to delete  post "))

    }
    res.json({ message: "success" })
}

export const getPosts = async (req, res, next) => {

    const posts = await postModel.find()

    //    const posts = postss.sort((a,b) => new Date(b.createdAt) + new Date(a.createdAt)   ) 
                    const post = posts.map((elm)=>elm)
                    console.log(post);
    if (!posts) {
        return next(new Error("there are not posts  "))
    }
    res.json({ message: "success", posts })
}
