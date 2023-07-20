import express from "express"
import path from "path"
const __dirname = path.resolve()
const app = express()

import apiv1Router from './apiv1/index.mjs'
import apiv2Router from './apiv2/index.mjs'

app.use(express.json())
app.use("/api/v1", apiv1Router)
app.use("/api/v2", apiv2Router)

app.use("/login",express.static(path.join(__dirname , "public/loginf")))
app.use(express.static(path.join(__dirname , "public")))

const PORT = process.env.PORT || 200;

app.listen(PORT ,()=>{
    console.log(PORT)
})