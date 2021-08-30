const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h2>Hey There!!! boogiie woogie<h2>')
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening of port ${port}`))