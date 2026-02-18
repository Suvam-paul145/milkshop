const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
  const order = await Order.create({
    customer: req.user.id,
    products: req.body.products,
    totalAmount: req.body.totalAmount
  });
  res.json(order);
};
