const express = require("express");
const router = express.Router();
const path = require("path");
const authRegisterController = require("../controllers/authRegisterController")

router.get('/', authRegisterController.getRegisterform);
router.post('/', authRegisterController.postRegister);

module.exports = router;