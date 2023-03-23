const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static('public'));

/*
Pabandžius susikurti savo route '/api/courses' kuris grąžintų jūsų sukurtą json objektą.

Ka cia reiskia ir ko cia praso is manes?
*/