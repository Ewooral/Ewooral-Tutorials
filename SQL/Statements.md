--SELECT 'Hello World, How are you' AS Result;
--SELECT * from Country;
--SELECT * FROM Country ORDER BY Name;
--SELECT Name, Continent, Region FROM Country WHERE Continent = 'Africa' LIMIT 8 OFFSET 7;
--SELECT COUNT(*) FROM Country WHERE Population > 0 AND Continent = 'Africa';


SELECT * FROM Customer;
INSERT INTO TO ADD DATA TO A TABLE
INSERT INTO Customer (name, address, city, state, zip)
 VALUES ('Elijah Boahen Dawson Ewooral', 'Arthur Street', 'Tema Accra', 'Greater Accra', '00233');
 INSERT INTO Customer (name, address, city, state, zip)
 VALUES ('', 'Arthur Street', 'Tema Accra', 'Greater Accra', '');*/

<!-- UPDATE Customer -->
UPDATE Customer
 SET name = 'Mary Boahen' WHERE id = 8;
 
 <!-- DELETE ITEM FOM Customer TABLE -->
 DELETE  FROM Customer WHERE id = 7;
 SELECT * FROM Customer;

 <!-- TO CREATE A TABLE USE -->
 CREATE TABLE ewooral(name TEXT, email TEXT, password TEXT, phonenumber INTEGER)
 
   INSERT INTO ewooral ('Elijah', 'ewooral@shy.you', 'thisismypassword', 0548883333)
