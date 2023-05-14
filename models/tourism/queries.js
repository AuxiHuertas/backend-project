const { sql } = require('slonik');

const createTourism = (body) => (sql.unsafe `
INSERT INTO tourism (id_cities,art_or_culture,heritage,nature,name_activity_done)
VALUES (${body.id_cities},${body.art_or_culture},${body.heritage},${body.nature},${body.name_activity_done})

`)

module.exports = {
    createTourism,
}
