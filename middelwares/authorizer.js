const { deserialize } = require('simple-stateless-auth-library')
const errors = require('../misc/errors')

module.exports = (req,res,next) => {
   const payload = deserialize(req)

    console.log(req.cookies)
   if(!payload) return next(errors[401])
k
   res.locals = payload

    next()
}