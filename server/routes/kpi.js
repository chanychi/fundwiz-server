const express = require('express')
const KPIrequest = require('../controllers/kpiController');
const router = express.Router();
const kpi = new KPIrequest()

router.get("/kpis", kpi.getKPIs.bind(kpi));

module.exports = router
