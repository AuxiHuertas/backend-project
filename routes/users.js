const router = require('express').Router();
const {authorizers} = require('../middelwares')
const usersControllers = require ('../controller/users')

module.exports = () => {
    router.get ('/',authorizers, usersControllers.getUser())

    return router
};