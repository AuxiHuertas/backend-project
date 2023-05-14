const router = require('express').Router();
const authRouter = require ('./auth');
const citiesRouter = require ('./cities');
const tourismRouter = require ('./tourism')

// const usersRouter =require ('./users')

module.exports = (db) => {
    router.use ('/auth', authRouter(db));
    // router.use('/users', usersRouter())
    router.use ('/cities', citiesRouter(db));
    router.use ('/tourism', tourismRouter (db))


    

    return router
};