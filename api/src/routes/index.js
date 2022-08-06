const express = require('express');
const router = express.Router();

const userRoute = require("../user/user.route");

router.use("/user", userRoute);

router.get('/hello-world', (req, res) => {
    res.send("ok");
});

module.exports = router;