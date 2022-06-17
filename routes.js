const router = require("express").Router()

router.use("/user", require("./Routes/user"))
module.exports = router
