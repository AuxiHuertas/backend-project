const router = require('express').Router()
const controllers = require('../controller/country')

module.exports = (db) => {

    router.get('/',controllers.getallcountry(db));
    router.get ('/:country',controllers.getcountryDynamic(db));
    router.get('/:country/activity', controllers.getActivitybyCountry (db))

    return router
}
