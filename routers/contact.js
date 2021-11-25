const router = require("express").Router();

router.post("/api/contact", (req, res) => {

    console.log(req);

    res.send();
});

module.exports = {
    router
}; 