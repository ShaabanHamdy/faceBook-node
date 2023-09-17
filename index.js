import  express  from 'express'
import { initApp } from './src/utils/initApp.js'
import { config } from 'dotenv'
config({path:"./Config/.env"})

initApp(express)