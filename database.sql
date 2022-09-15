-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- Create LIST table
CREATE TABLE "list" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    "quantity" INT NOT NULL,
    "units" VARCHAR(20),
    "purchased" BOOLEAN DEFAULT false
);

INSERT INTO list 
    ("name", "quantity", "units") 
    VALUES 
    ('Cupcakes', 2, 'containers'),
    ('Grapes', 4, 'bunches'),
    ('Bananas', 8, 'bunches');