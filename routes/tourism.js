const router = require('express').Router()
const controllers = require('../controller/')

module.exports = (db) => {

    router.post('/',controllers.(db));

    return router
}