const app = require('express')();
const data = require('../server/data/data.js') ;

app.get('/kpis', (req, res) => {
  const {kpis} = data;
  console.log(kpis)
  res.json(kpis)
})

app.listen(3000, () => {
  console.log(`Running on port 3000}`)
})

module.exports = app