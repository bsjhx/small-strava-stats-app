var express = require('express');
var router = express.Router();

router.get('/hello-world', (req, res) => {
    res.send("ok");
});

module.exports = router;