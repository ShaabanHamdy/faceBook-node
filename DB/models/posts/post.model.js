import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    description: String,
    mainImage: { type: Object },

  
});


const postModel = mongoose.models.Post || mongoose.model('Post', postSchema);
export default postModel
