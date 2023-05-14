const router = require('express').Router();
const authRouter = require ('./auth');
const citiesRouter = require ('./cities');
const tourismRouter = require ('./tourism')
const countryRouter = require ('./country')

// const usersRouter =require ('./users')

module.exports = (db) => {
    router.use ('/auth', authRouter(db));
    // router.use('/users', usersRouter())
    router.use ('/cities', citiesRouter(db));
    router.use ('/tourism', tourismRouter (db));
    router.use ('/country', countryRouter (db))

    return router
};