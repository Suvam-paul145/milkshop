const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const { placeOrder } = require("../controllers/orderController");

router.post("/", auth, role("customer"), placeOrder);

module.exports = router;

