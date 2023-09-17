import express from 'express'
import { initApp } from './src/utils/initApp.js'
import { config } from 'dotenv'
import ConnectionDB from './DB/Connection.js'
import cors from "cors"
const app = express()
config({ path: "./Config/.env" })
app.use(express.json({}))
app.use(cors({}))

ConnectionDB()
app.get('/', (req, res) => res.send('Hello World!'))




initApp(app)