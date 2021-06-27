const router = require("express").Router();

const exerciseRoutes = require("./exercise")

router.use("/workouts", exerciseRoutes)

module.exports = router;