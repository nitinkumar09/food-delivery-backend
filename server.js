import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";      // yadi tum import ka use kar rhe ho to kisi bhi file ko import karke isme .js jaroori nhi to error show hoga require() wala kroge to isme koi jaroori nhi h or ye import ka use hum package.json file me upper me main ke nivhe type:"module" likhne se use kar skte h
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js"
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000


// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB()

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)


app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
