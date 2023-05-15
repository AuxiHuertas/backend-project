require('dotenv').config()
const express = require('express')
const db = require('./config/db')
const app = express()
const morgan = require('morgan')
const errors = require ('./misc/errors')
const cookiesParser = require('cookie-parser')
const uuid = require('uuid')

const routes = require('./routes')
app.use(morgan('dev'))
app.use(express.json())
app.use(routes(db))
app.use(cookiesParser())


app.use((req, res, next) => {
    next(errors['404'])
})

app.use(({ statusCode, error }, req, res, next) => {
   
    res.status(statusCode).json({
        success: false,
        messasge: error.message,
    })
})

app.listen(
    process.env.PORT, 
    () => console.info(`> listening at ${process.env.PORT}`))