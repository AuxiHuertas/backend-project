const router = require('express').Router();
const authController = require ('../controller/auth');

module.exports = (db) => {
    router.post ('/signup', authController.signup(db))
    router.post ('/signin', authController.signin(db))
    router.post ('/singout', authController.signout())
    
    return router
};