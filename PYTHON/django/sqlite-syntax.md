# WRITING SQL SYNTAX FOR A DJANGO SQLITE DATABASE

* sqlite> sudo apt install sqlite3
* sqlite> .tables
* sqlite> CREATE TABLE Users(
   ...> id INTEGER NOT NULL
   ...> PRIMARY KEY AUTOINCREMENT,
   ...> name VARCHAR(128),
   ...> email VARCHAR(128)
   ...> );
* sqlite> .tables
Users

* sqlite> .schema Users
CREATE TABLE Users(
id INTEGER NOT NULL
PRIMARY KEY AUTOINCREMENT,
name VARCHAR(128),
email VARCHAR(128)
);

* sqlite> INSERT INTO Users(name, email) VALUES("Elijah", "elijah@gmail.com);
* sqlite> .tables
Users
* sqlite> .schema Users
CREATE TABLE Users(
id INTEGER NOT NULL
PRIMARY KEY AUTOINCREMENT,
name VARCHAR(128),
email VARCHAR(128)
);
* sqlite> DELETE FROM Users WHERE email="elijah@gmail.com";

* sqlite> UPDATE Users SET name='David' WHERE email='ewooral.inc@elia.com';

* sqlite> SELECT * FROM Users WHERE email='ewooral.inc@elia.com';

* sqlite> select * from Users;

* sqlite> INSERT INTO Users(name, email) VALUES("Elijah", "elijah@gmail.com");

* sqlite> select * from Users;
2|Elijah|elijah@gmail.com

* sqlite> INSERT INTO Users(name, email) VALUES("Moses K.", "ewooral.inc@elia.com");
2|Elijah|elijah@gmail.com
3|Moses K.|ewooral.inc@elia.com

* sqlite> select * from Users ORDERED BY email;
Error: in prepare, near "BY": syntax error (1)

* sqlite> select * from Users ORDER BY email;
2|Elijah|elijah@gmail.com
3|Moses K.|ewooral.inc@elia.com

* sqlite> select * from Users ORDER BY name DESC;
3|Moses K.|ewooral.inc@elia.com
2|Elijah|elijah@gmail.com
sqlite>







