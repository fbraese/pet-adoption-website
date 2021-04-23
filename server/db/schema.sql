DROP TABLE IF EXISTS pet_types CASCADE;
DROP TABLE IF EXISTS adoptable_pets CASCADE;
DROP TABLE IF EXISTS adoption_applications;
DROP TABLE IF EXISTS surrender_applications;

CREATE TABLE pet_types(
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    img_url VARCHAR(255) NOT NULL,
    description VARCHAR(255)
);

CREATE TABLE adoptable_pets(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    img_url VARCHAR(255) NOT NULL,
    age INTEGER,
    vaccination_status BOOLEAN DEFAULT 'f',
    adoption_story TEXT NOT NULL,
    available_for_adoption BOOLEAN DEFAULT 't',
    pet_type_id INTEGER REFERENCES pet_types(id)
);

CREATE TABLE adoption_applications(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    home_status VARCHAR(255) NOT NULL,
    application_status VARCHAR(255) DEFAULT 'pending',
    adoptable_pet_id INTEGER REFERENCES adoptable_pets(id)
);

CREATE TABLE surrender_applications(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    adoptable_pet_id INTEGER REFERENCES adoptable_pets(id),
    status VARCHAR(255) DEFAULT 'pending'
);