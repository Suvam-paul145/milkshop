const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  milkName: String,
  description: String,
  price: Number,
  source: String,
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Product", productSchema);

