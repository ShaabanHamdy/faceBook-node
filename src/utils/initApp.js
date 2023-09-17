import ConnectionDB from "../../DB/Connection.js"
import { globalErrorHandling } from "../middleWare/errorHandling.js"
import * as allRoutes from "../modules/app.routes.js"



export const initApp =(app)=>{
    
    const port = process.env.PORT || 5001
   
    
    
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
