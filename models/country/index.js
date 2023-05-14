const { allCountry, countryDynamic, activityCountries } = require ('./queries')

const getAllCities = (db) => async () => {
    try {
  
        const response = await db.query(allCountry(db))

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

const getCountryDynamic = (db,params) => async () => {
    try {
  
        const response = await db.query(countryDynamic(params))

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

const getActivity = (db,params) => async () => {
    try {
  
        const response = await db.query(activityCountries(params))

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
    getAllCities,
    getCountryDynamic,
    getActivity
}