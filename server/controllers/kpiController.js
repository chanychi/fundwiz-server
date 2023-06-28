const KPI = require("../models/KPI.js");
const { kpis } = require('../data/data.js');
// const { kpis, products, transactions } = require('../data/data.js');

class KPIrequest {
  async getKPIs(req, res) {
    try {
      const kpisData = await this.fetchKPIs();

      if (!kpisData.length) await this.seedData(kpis);

      const data = await this.fetchKPIs();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async fetchKPIs() {
    return KPI.find();
  }

  async seedData(data) {
    await KPI.insertMany(data);
  }
}

module.exports = KPIrequest;