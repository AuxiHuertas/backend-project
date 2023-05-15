require('dotenv').config()
const express = require('express')
const db = require('./config/db')
const morgan = require('morgan')
const errors = require ('./misc/errors')
const cookieParser = require('cookie-parser')
const uuid = require('uuid')

const app = express()
app.use(cookieParser())
const routes = require('./routes')
app.use(morgan('dev'))
app.use(express.json())
app.use(routes(db))



app.use((req, res, next) => {
    next(errors['404'])
})

app.use(({ statusCode, error }, req, res, next) => {
    console.log(error)
   
    res.status(statusCode).json({
        success: false,
        message: error.message,
    })
})

app.listen(
    process.env.PORT, 
    () => console.info(`> listening at ${process.env.PORT}`))