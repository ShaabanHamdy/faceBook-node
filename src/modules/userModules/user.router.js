import { Router } from "express";
import * as connections from "./user.connection.js"
import { asyncHandler } from "../../middleWare/errorHandling.js";

const router = Router()




router.post("/signup",asyncHandler(connections.signup))
router.post("/login",asyncHandler(connections.login))
















export default router