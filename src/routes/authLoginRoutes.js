const express = require("express");
const router = express.Router();
const path = require("path");
const authLoginController = require("../controllers/authLoginController")

router.get("/", authLoginController.getLoginForm);
router.post("/login", authLoginController.login);
router.get("/dashboard", (req, res) => res.sendFile(path.join(__dirname, "../public/dashboard.html")));

module.exports = router;