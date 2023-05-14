const router = require('express').Router()
const controllers = require('../controller/cities')

module.exports = (db) => {

    router.post('/',controllers.postAllCities(db));

    return router
}

