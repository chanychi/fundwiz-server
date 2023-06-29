const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const convertStringToNumber = require('../utils/helper.js')
const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
  {
    buyer: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      set: convertStringToNumber,
    },
    productIds: [
      {
        type: ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports =  Transaction;