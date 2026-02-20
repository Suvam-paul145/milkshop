const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
  try {
    const order = await Order.create({
      customer: req.user.id,
      products: req.body.products,
      totalAmount: req.body.totalAmount
    });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message || "Failed to place order" });
  }
};
