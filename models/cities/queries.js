const { sql } = require('slonik');

const createCities = (body) => (sql.unsafe `
INSERT INTO cities (id_country,cities_name)
VALUES (${body.id},${body.cities_name})

`)

const Allcities = () => (sql.unsafe `
SELECT * 
FROM cities;
`)

module.exports = {
    createCities,
    Allcities
}