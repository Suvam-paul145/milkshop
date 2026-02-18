const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const { addProduct, getProducts } = require("../controllers/productController");

router.post("/", auth, role("seller"), addProduct);
router.get("/", auth, getProducts);

module.exports = router;

