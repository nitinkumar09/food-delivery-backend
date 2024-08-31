import express from "express"
import { addFood, listFood, removeFood } from "../controllers/foodController.js"
import multer from "multer" // this package use for image store system

const foodRouter = express.Router()

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => { // cb means callback
        return cb(null, `${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage })


foodRouter.post("/add", upload.single("image"), addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/remove", removeFood)

export default foodRouter;