const router = require("express").Router();

const { generate } = require("../controllers/image.controller");
const protect = require("../middleware/auth.middleware");

router.post("/generate", protect, generate);

module.exports = router;