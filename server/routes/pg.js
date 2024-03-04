const express = require("express");
const { getPgs, getPgById, createPg, deletePg, updatePg } = require("../controller/pg");
const { checkAuth } = require("../middleware/authentication");

const router = express.Router();

router.get("/pgs",getPgs);
router.get("/pg/:pgid",getPgById);
router.post("/new",checkAuth,createPg);
router.delete("/delete/:pgid", checkAuth, deletePg);
router.patch("/edit/:pgid", checkAuth, updatePg);

module.exports = router;