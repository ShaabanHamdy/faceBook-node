import  express  from 'express'
import { initApp } from './src/utils/initApp.js'
import { config } from 'dotenv'
import cors from "cors"
import ConnectionDB from './DB/Connection.js'
config({path:"./Config/.env"})
const app = express()
app.use(express.json({}))
app.use(cors())
ConnectionDB()

app.get('/hello', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send('Hello World');
})




initApp(app)