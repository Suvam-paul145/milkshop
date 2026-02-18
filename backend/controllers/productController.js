const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  const product = await Product.create({
    ...req.body,
    seller: req.user.id
  });
  res.json(product);
};

exports.getProducts = async (req, res) => {
  const products = await Product.find().populate("seller", "name");
  res.json(products);
};
