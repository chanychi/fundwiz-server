const express = require('express')
const transactionRequest = require('../controllers/transactionController.js');
const router = express.Router();
const transaction = new transactionRequest()

router.get("/transactions", async (req, res) => {
  try {
    const data = await transaction.getSortedData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router