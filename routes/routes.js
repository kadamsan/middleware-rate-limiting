const express = require("express");
const router = express.Router();
const {bruteforce} = require("../middleware/rate-limiter")

router.get("/", (req, res) => {
res.send({ message: "Hello, this is a GET request" });
});

router.get("/get-demo", bruteforce('users', 50, 1), (req, res) => {
res.status(200).send({ message: "Resource retrieved successfully" });
});

router.put("/update-demo", (req, res) => {
res.status(201).send({ message: "Resource updated sucessfully" });
});

module.exports = router;