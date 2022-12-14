const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors());
app.use(express.json())
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})

app.get("/", (req, res) => {
    res.send("server is running")
})