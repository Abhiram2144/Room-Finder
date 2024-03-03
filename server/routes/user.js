
const express = require("express");
const { register, login, getMyProfile, logout, getInfoById, getAll } = require("../controller/user");
const { isAuthenticated } = require("../middleware/authentication");

const router = express.Router();

router.post("/new", register);
router.post("/login", login);

router.get("/logout", logout);

// router.get("/me", isAuthenticated, getMyProfile);

// router.get("/user/:id", getInfoById);

router.get("/users", getAll);

module.exports = router;