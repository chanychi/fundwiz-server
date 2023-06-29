const Transaction = require('../models/Transaction.js');
const { transactions } = require('../data/data.js');
const Request = require('./Request.js');

class TransactionRequest extends Request {
  constructor() {
    super(Transaction, transactions);
  }

  async getSortedData() {
    await this.getData();
    return this.model.find().limit(50).sort({ created: -1 });
  }
}

module.exports = TransactionRequest;