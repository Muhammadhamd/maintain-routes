import express from "express"
import path from "path"
const __dirname = path.resolve()
const app = express.Router()

import apiv1Router from './apiv1/index.mjs'
import apiv2Router from './apiv2/index.mjs'

app.use("/api/v1", apiv1Router)
app.use("/api/v2", apiv2Router)


app.use(express.static(path.join(__dirname , "public")))

const PORT = process.env.PORT || 200;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})