const express = require("express")

const app = express()

app.get("/", (req, res) => res.send("hello"))

app.use("/v1/api", require("./routes.js"))

app.listen(5000, () => console.log(`server started on http://localhost:5000`))
