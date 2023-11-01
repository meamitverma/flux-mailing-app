require('dotenv').config()

const express = require('express')
const  Connection  = require('./database/db')
const cors = require('cors')
const routes = require('./routes/route.js')


const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: true}))
app.use('/', routes);

Connection()

const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})

