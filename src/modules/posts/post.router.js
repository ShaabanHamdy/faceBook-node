import { Router } from "express";
import * as controllers from "./post.connection.js"
import { myMulter } from "../../utils/multer.js";
import { asyncHandler } from "../../middleWare/errorHandling.js";
const router = Router()




// router.post("/createPost", myMulter({}).fields([{ name: "mainImage", maxCount: 1 }])
//     , asyncHandler(connections.createPost))

router.post("/createPost"
    , myMulter({}).single("mainImage"),
    asyncHandler(controllers.createPost))

// ===================================================================

router.delete("/deletePost/:_id"
    , asyncHandler(controllers.deletePost))
// ======================================================
router.delete("/deleteAllPost"
    , asyncHandler(controllers.deleteAllPost))
// =========================================================================
router.get("/getPosts"
    , asyncHandler(controllers.getPosts))







export default router