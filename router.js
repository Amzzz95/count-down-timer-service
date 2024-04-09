const express = require("express");
const router = express.Router();

const middleware = require("./middleware");

const counterController = require("./controller/counter");

const { trimmer } = middleware;
router.use(trimmer);

// counter routes
router.post("/counter", counterController.create);
router.get("/counter", counterController.read);
router.put("/counter", counterController.update);

module.exports = router;

/* trim: true,
lowercase:true, */
