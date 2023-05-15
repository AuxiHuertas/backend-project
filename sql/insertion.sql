
INSERT INTO cities (id_country,cities_name)
VALUES ((SELECT id FROM country WHERE name_country = 'Spain'), 'Comunidad de Madrid');


INSERT INTO tourism (  Id_cities, Art_Or_Culture ,Heritage, Nature,Name_activity_done)
VALUES ((SELECT id FROM cities WHERE cities_name = 'Comunidad de Madrid'), true , false, false, 'Museo Reina Sofía'),
((SELECT id FROM cities WHERE cities_name = 'Comunidad de Madrid'), true , false, false, 'Museo Nacional del Padro'),
((SELECT id FROM cities WHERE cities_name = 'Comunidad de Madrid'), true , false, false, 'Museo  Thyssen Bornemisza'),
((SELECT id FROM cities WHERE cities_name = 'Comunidad de Madrid'), false , true, false, 'Palacio Real de Madrid'),
((SELECT id FROM cities WHERE cities_name = 'Comunidad de Madrid'), false , true, false, 'Parque del Retiro'),
((SELECT id FROM cities WHERE cities_name = 'Comunidad de Madrid'), false , false, true, ' Ruta de las Cascadas del Purgatorio'),
((SELECT id FROM cities WHERE cities_name = 'Comunidad de Madrid'), false , false, true, ' Ruta del Embalse de Santillana');




