const router = require('express').Router();
const authController = require ('../controller/auth');
const {authorizers} = require('../middelwares');

module.exports = (db) => {
    router.post ('/signup', authController.signup(db))
    router.post ('/signin', authController.signin(db))
    router.post ('/singout',authorizers, authController.signout())
    
    return router
};