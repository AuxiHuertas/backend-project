const router = require('express').Router();
const authController = require ('../controller/auth');

module.exports = (db) => {
    router.post ('/singup', authController.singup(db))
    router.post ('/signin', authController.signin(db))
    router.post ('/singout', authController.singout())
    
    return router
};