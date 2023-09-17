import ConnectionDB from "../../DB/Connection.js"
import { globalErrorHandling } from "../middleWare/errorHandling.js"
import * as allRoutes from "../modules/app.routes.js"

import cors from "cors"


export const initApp =(express)=>{
    const app = express()
    const port = process.env.PORT || 5001
   app.use(cors({}))
    
    app.use(express.json({}))
    ConnectionDB()
    // =============================================================================================
    app.get('/', (req, res) => res.send('Hello World!'))
    app.use('/user',allRoutes.userRouter )
    app.use('/post',allRoutes.postRouter )
    
// =========================================
//====== error global =======================================
app.use(globalErrorHandling)


    // ==========================================================================================
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    
}
