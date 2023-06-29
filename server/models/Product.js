const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const convertStringToNumber = require('../utils/helper.js')
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    price: {
      type: Number,
      set: convertStringToNumber,
    },
    expense: {
      type: Number,
      set: convertStringToNumber,
    },
    transactions: [
      {
        type: ObjectId,
        ref: "Transaction",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;