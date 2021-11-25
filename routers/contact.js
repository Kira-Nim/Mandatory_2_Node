const router = require("express").Router();

router.post("/api/contact", (req, res) => {

    res.redirect("/contact");
});

module.exports = {
    router
}; 