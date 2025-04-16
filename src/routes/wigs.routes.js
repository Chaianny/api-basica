const express = require("express");
const router = express.Router();
const wigsController = require("../controllers/wigs.controller");

router.get("/", wigsController.getAllWigs);
router.get("/:id", wigsController.getWigbyId);
router.post("/", wigsController.createWig);
router.put("/:id", wigsController.updateWig);
router.delete("/:id", wigsController.deleteWig);

module.exports = router;
