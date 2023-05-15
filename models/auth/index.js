const {isertUsers, selectByusername} = require ('./queries');
const {hash} = require ('simple-stateless-auth-library')
const error = require('../../misc/errors')

const createUsers = (db) => async (username, password) => {
    try {
        await db.query(isertUsers(username, password))
        return {
            ok : true,
        }

    } catch (error) {
        console.info('create user error', error.message)
        return {
            ok:false,
            message : error.message,
        }

    }
}
// const createUser = (db) => async (username, password) => {
//     try {
//         await db.query(insertUser(username, password))
//         return {
//             ok: true
//         }
//     } catch(error) {
//         console.info('> create user error: ', error.message)
//         return {
//             ok: false,
//             message: error.message,
//         }
//     }
// }

    const selectusers = (db) => async (username, comareFn) => {
        try {

            // con maybeOne te devolvera el elemento que buscas o null, con query lo que buscas siempre es string
            const user = await db.maybeOne(selectByusername(username))

            if(!user) return {
                ok:false,
                error_code : 'wrong_data',
            }

            const areEqual = await comareFn(user.password)

            if(!areEqual) return {
                ok:false,
                error_code : 'wrong_data',
            }

            return {
                ok : true,
                content : {
                    username: user.username,
                }
            }
    
        } catch (error) {
            console.info('create user error', error.message)
            return {
                ok:false,
                message : error.message,
            }
    
        }
    }
module.exports = { 
    createUsers,
    selectusers
}