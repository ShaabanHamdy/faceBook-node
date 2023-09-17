
import  mongoose  from 'mongoose'

// Connect MongoDB at default port 27017.
const ConnectionDB = async ()=> {
   return await mongoose.connect(process.env.LOCAL_SERVER)
   .then((res)=>console.log("ConnectionDB Running.........."))
   .catch((err)=>console.log({message:"ConnectionDB fail",err}))
}


export default ConnectionDB
