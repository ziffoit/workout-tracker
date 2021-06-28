const router = require("express").Router();
const Fitness = require("../../models");

router.get("/", (req, res) => {
    Fitness.find({})
        .then((exercises) => {
            res.json(exercises);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.put("/:id", (req, res) => {
    Fitness.findById(req.params.id, function (err, workout) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        workout.exercises = workout.exercises.concat(req.body);
        workout.save();
        res.json({})
    });
});

router.post("/", (req, res) => {
    // const fitness = new Fitness({ exercises: [req.body] });
    Fitness.collection.insertOne({ exercises: [] })
    .then((result) => {
        res.json({"_id": result.insertedId});
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

router.get("/range", (req, res) => {
    Fitness.find()
        .sort({ date: -1 })
        .limit(7)
        .then((exercises) => {
            res.json(exercises);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router;
