const { sql } = require('slonik');

const allCountry = (body) => (sql.unsafe `
SELECT *
FROM country 
`)

const countryDynamic = (params) => (sql.unsafe `
SELECT *
FROM country
WHERE REPLACE(REPLACE(LOWER(country.name_country), ' ', ''), '.', '') = ${params}

`)

const activityCountries = (params) => (sql.unsafe `
SELECT country.name_country , country.flag,country.languages, cities.cities_name , tourism.art_or_culture, tourism.heritage , tourism.nature , tourism.name_activity_done
FROM country
INNER JOIN cities
ON country.id = cities.id_country
INNER JOIN tourism
ON cities.id = tourism.id_cities
WHERE REPLACE(REPLACE(LOWER(country.name_country), ' ', ''), '.', '')  = ${params}

`)

module.exports = {
    allCountry,
    countryDynamic,
    activityCountries
}