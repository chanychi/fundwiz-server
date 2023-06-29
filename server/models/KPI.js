const mongoose = require('mongoose');
const convertStringToNumber = require('../utils/helper.js')
const Schema = mongoose.Schema;

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: Number,
      required: true,
      set: convertStringToNumber,
    },
    expenses: {
      type: Number,
      required: true,
      set: convertStringToNumber,
    },
  },

);

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: Number,
      required: true,
      set: convertStringToNumber,
    },
    expenses: {
      type: Number,
      required: true,
      set: convertStringToNumber,
    },
    operationalExpenses: {
      type: Number,
      required: true,
      set: convertStringToNumber,
    },
    nonOperationalExpenses: {
      type: Number,
      required: true,
      set: convertStringToNumber,
    },
  },
);

const KPISchema = new Schema(
  {
    totalProfit: {
      type: Number,
      required: true,
      set: convertStringToNumber,
    },
    totalRevenue: {
      type: Number,
      required: true,
      set: convertStringToNumber,
    },
    totalExpenses: {
      type: Number,
      required: true,
      set: convertStringToNumber,
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: Number,
        required: true,
        get: (v) => v * 1, // Convert from cents to dollars when retrieving the value
        set: convertStringToNumber,
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);


const KPI = mongoose.model("KPI", KPISchema);

module.exports = KPI;
