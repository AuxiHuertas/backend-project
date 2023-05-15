const router = require('express').Router();
const authRoutes = require ('./auth');
const usersRoutes = require ('./users')
const citiesRouter = require ('./cities');
const tourismRouter = require ('./tourism')
const countryRouter = require ('./country')

// const usersRouter =require ('./users')

module.exports = (db) => {
    router.use ('/auth', authRoutes(db));
    router.use('/users', usersRoutes())
    router.use ('/cities', citiesRouter(db));
    router.use ('/tourism', tourismRouter (db));
    router.use ('/country', countryRouter (db))

    return router
};