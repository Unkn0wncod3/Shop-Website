const express = require('express')
const path = require('path');

const app = express()

const port = 8000;

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/Projektarbeit.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})