const express = require('express');
const KPIrequest = require('../controllers/KPIController.js');
const router = express.Router();
const kpi = new KPIrequest();

router.get("/kpis", async (req, res) => {
  try {
    const data = await kpi.getData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router