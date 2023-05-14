INSERT INTO Country (name_country,Currencies,Languages,Flag,Continents)
VALUES ('Madrid','asdf','aksjhf','asf','asddf');

INSERT INTO cities (id_country,cities_name)
VALUES ((SELECT id FROM country WHERE name_country = 'Madrid'), 'Alcobendas');


INSERT INTO tourism (  Id_cities, Art_Or_Culture ,Heritage, Nature,Name_activity_done)
VALUES ((SELECT id FROM cities WHERE cities_name = 'Alcobendas'), 'ADDFA', true, false, 'asdas');