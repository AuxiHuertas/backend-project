const { sql } = require('slonik');

const createCities = (id,cities_name) => (sql.unsafe `
INSERT INTO cities (id_country,cities_name)
VALUES (${id},${cities_name})

`)

module.exports = {
    createCities,
}