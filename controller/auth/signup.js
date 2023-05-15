
const { hash }= require ('simple-stateless-auth-library')
const { createUsers } = require('../../models/auth')
const errors = require('../../misc/errors')

module.exports = (db) => async (req, res, next) => {
    //obtenemos datos de body
    const { username, password } = req.body
    // comprobamos que tengamos esos datos en nuestra base de datos
 if (!username || !password) return next (errors[400])
    // Encriptamos la contraseña con la función encrypt del "hash"
    const encrypted = await hash.encrypt(password)
    // Creamos el usuario en la base de datos con la contraseña encriptada
    const response = await createUsers(await db)(username, encrypted)
    // devolvemos error si algo ha fallado
    if(!response.ok) return next(errors[500])
    // devolvemos succes true si todo ha ido bien, 
    res.status(200).json({
        success: true,
    })
}