const app = require('express')();

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(3000, () => {
  console.log(`Running on port 3000}`)
})

module.exports = app