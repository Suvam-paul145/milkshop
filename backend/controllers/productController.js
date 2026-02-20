const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  try {
    const product = await Product.create({
      ...req.body,
      seller: req.user.id
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message || "Failed to add product" });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("seller", "name");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message || "Failed to fetch products" });
  }
};
