const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const kpiRoutes = require('./routes/kpi.js');
const productRoutes = require('./routes/product.js');
const transactionRoutes = require('./routes/transaction.js');

const app = express();
const PORT = process.env.PORT || 3000
dotenv.config();

const limiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 1, // 1 request per windowMs
  message: 'Too many requests, please try again later.',
});

app.use(limiter);
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(cors());

app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

module.exports = app