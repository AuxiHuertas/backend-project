const router = require('express').Router()
const controllers = require('../controller/tourism')

module.exports = (db) => {

    router.post('/',controllers.postAllTourism(db));

    return router
}