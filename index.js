import  express  from 'express'
// import { initApp } from './src/utils/initApp.js'
import { config } from 'dotenv'
import cors from "cors"
import ConnectionDB from './DB/Connection.js'
import { globalErrorHandling } from "./src/middleWare/errorHandling.js"
import * as allRoutes from "./src/modules/app.routes.js"
config({path:"./Config/.env"})

const app = express()
app.use(express.json({}))
app.use(cors())
ConnectionDB()

app.get('/hello', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send('Hello World');
})
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



// initApp(app)