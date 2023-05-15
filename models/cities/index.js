const {createCities, Allcities} = require ('./queries')

const postCreateCities = (db, body) => async () => {
    try {
        const response = await db.query(createCities(body))

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
};

const getAllCities = (db) => async () => {
    try {
  
        const response = await db.query(Allcities(db))

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
    getAllCities,
}