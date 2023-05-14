const { createTourism } = require ('./queries')

const postCreateTourism = (db, body) => async () => {
    try {
  
        const response = await db.query(createTourism(body))
        console.log(response)

        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        console.log(error)
        return {
            ok: false,
            message: error.message,
        }
    }
}

module.exports = {
    postCreateTourism,
}