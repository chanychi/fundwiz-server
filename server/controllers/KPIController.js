const KPI = require("../models/KPI.js");
const { kpis } = require('../data/data.js');
const Request = require("./Request.js");

class KPIRequest extends Request {
  constructor() {
    super(KPI, kpis);
  }
}

module.exports = KPIRequest;
