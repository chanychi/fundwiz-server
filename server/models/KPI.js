const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: Number,
      required: true,
      get: (v) => v / 100, // Convert from cents to dollars when retrieving the value
    },
    expenses: {
      type: Number,
      required: true,
      get: (v) => v / 100, // Convert from cents to dollars when retrieving the value
    },
  },
  { toJSON: { getters: true } }
);

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: Number,
      required: true,
      get: (v) => v / 100, // Convert from cents to dollars when retrieving the value
    },
    expenses: {
      type: Number,
      required: true,
      get: (v) => v / 100, // Convert from cents to dollars when retrieving the value
    },
    operationalExpenses: {
      type: Number,
      required: true,
      get: (v) => v / 100, // Convert from cents to dollars when retrieving the value
    },
    nonOperationalExpenses: {
      type: Number,
      required: true,
      get: (v) => v / 100, // Convert from cents to dollars when retrieving the value
    },
  },
  { toJSON: { getters: true } }
);

const KPISchema = new Schema(
  {
    totalProfit: {
      type: Number,
      required: true,
      get: (v) => v / 100, // Convert from cents to dollars when retrieving the value
    },
    totalRevenue: {
      type: Number,
      required: true,
      get: (v) => v / 100, // Convert from cents to dollars when retrieving the value
    },
    totalExpenses: {
      type: Number,
      required: true,
      get: (v) => v / 100, // Convert from cents to dollars when retrieving the value
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: Number,
        required: true,
        get: (v) => v / 100, // Convert from cents to dollars when retrieving the value
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model("KPI", KPISchema);

module.exports = KPI;
