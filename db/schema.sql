DROP DATABASE IF EXISTS guest_db;
CREATE DATABASE guest_db;

CREATE TABLE Guest (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    attending BOOLEAN,
    dietary_preference TEXT,
    plus_one BOOLEAN,
    guest_dietary_preference TEXT
);