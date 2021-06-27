const router = require("express").Router();

const exerciseRoutes = require("./exercise")

router.use("/exercise", exerciseRoutes)

module.exports = router;