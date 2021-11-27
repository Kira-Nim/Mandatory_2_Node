import express from "express";
const router = express.Router();

router.post("/api/contact", async (req, res) => {

    console.log(req);

    res.send();
});

export default router; 