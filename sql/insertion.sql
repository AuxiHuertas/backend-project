
INSERT INTO cities (id_country,cities_name)
VALUES ((SELECT id FROM country WHERE name_country = 'Spain'), 'Comunidad de Madrid');


INSERT INTO tourism (  Id_cities, Art_Or_Culture ,Heritage, Nature,Name_activity_done)
VALUES ((SELECT id FROM cities WHERE cities_name = 'Comunidad de Madrid'), true , false, false, 'Museo Reina Sofía');