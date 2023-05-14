const errors = require ('../../misc/errors')
const {hash,serialize}= require ('simple-stateless-auth-library')
const {selectusers} = require ('../../models/auth')

module.exports = (db) => async (req,res,next) => {
    const { username, password } = req.body
    console.log ('>', username,password)

    if (!username || !password) return next (errors[400])

    const response = await selectusers(await db)(username, hash.compare(password))
    console.log(response)

    if(!response.ok) {

        return next(errors[response.error_code||500] )
    }   

   
    serialize(res, response.content)

        res.status(200).json({
        succes : true,
    })
}