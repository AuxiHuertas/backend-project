DROP TABLE IF EXISTS Tourism;
DROP TABLE IF EXISTS Cities;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS Country;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
    );

CREATE TABLE IF NOT EXISTS Country (
    Id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    Name_Country TEXT NOT NULL UNIQUE, 
    Currencies TEXT NOT NULL, 
    Languages TEXT NOT NULL, 
    Flag TEXT NOT NULL,
    Continents TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Cities (
    Id_Country uuid REFERENCES Country NOT NULL,
    Id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    Cities_Name TEXT NOT NULL UNIQUE
    );

CREATE TABLE IF NOT EXISTS Tourism (   
    Id_cities uuid REFERENCES  Cities NOT NULL,
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    Art_Or_Culture BOOLEAN,
    Heritage BOOLEAN, 
    Nature BOOLEAN, 
    Name_activity_done VARCHAR(1000)
);



