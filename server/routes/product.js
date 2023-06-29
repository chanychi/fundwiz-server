const express = require('express')
const productRequest = require('../controllers/productController');
const router = express.Router();
const product = new productRequest()

router.get("/products", async (req, res) => {
  try {
    const data = await product.getData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router