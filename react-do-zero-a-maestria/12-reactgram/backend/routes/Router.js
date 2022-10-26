const express = require('express')
const router = express()

// test route
router.get("/", (req, res) => {
    res.send("Hello world!")
})

module.exports = router