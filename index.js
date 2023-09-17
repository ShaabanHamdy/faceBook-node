import  express  from 'express'
import { initApp } from './src/utils/initApp.js'
import { config } from 'dotenv'
config({path:"./Config/.env"})

const app = express()
app.get('/', (req, res) => res.send('Hello World!'))




initApp(app,express)