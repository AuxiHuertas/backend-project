const {createCities} = require ('./queries')

const postCreateCities = (db, body) => async () => {
    try {
  
        const response = await db.query(createCities( body.Id_Country, body.cities_name))

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
    postCreateCities,
}