## Setup postgres on linux:
 * command: 

           sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

           wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
           sudo apt-get update
           sudo apt-get -y install postgresql


 * status of posgres:

           service postgresql status

 * use postgres:

           sudo su postgres

 * Start Postgres command line:

           psql

 * show users:

           \du

 * Change default user password:

           ALTER USER postgres WITH PASSWORD 'password name';

 * Create a User:
   
           CREATE USER 'username' WITH PASSWORD 'password';


 * Make a user a Superuser:

            ALTER USER 'username' WITH SUPERUSER;

 * Remove or Delete a User:
            
            DROP USER 'username' 

 * Read PSQL Documentation:
            
            man psql

* Create a Database:

            CREATE DATABASE 'database name' WITH OWNER 'username';
            or 
            createdb database_name

* Delete a Database:

            dropdb mydb

* Show databases:

            \l

 * Connect to the Database:
            
            quit psql shell
            psql 'database' 'user'


## Show tables:
    command: \dt

## quit server
    command: \q


# SQL .......................................................................................

## Create a new table
    
    CREATE TABLE table_name;

You can create a new table by specifying the table name, along 
with all column names and their types:

    CREATE TABLE weather (
        city            varchar(80),
        temp_lo         int,           -- low temperature
        temp_hi         int,           -- high temperature
        prcp            real,          -- precipitation
        date            date
    );


### Data Manipulation Language(DML)
The `SQL DML commands` provide the ability to `query`, delete and update data in the database.

## Insert into table
    
    INSERT INTO table_name (column_one, column_two, column_three, ...)
        VALUES(value1, value2, value3, ...);

    INSERT INTO weather VALUES('San Francisco', 46, 50, 0.25, '1994-11-27');

    INSERT INTO weather(city, temp_lo, temp_hi, prcp, date) 
        VALUES('Accra', 20, 28, 0.2, '2022-12-18');

You can list the columns in a different order if you wish or even omit some columns.

    INSERT INTO weather (date, city, temp_hi, temp_lo)
        VALUES('2020-09-31', 'Tema', 32, 09);



## Update a field in a table

    UPDATE table_name
    SET column_name = ""
    WHERE ID = 02;

## Alter a record

    ALTER TABLE table_name ADD (city VARCHAR(80), temp_lo INT, temp_hi INT, prcp REAL, date DATE);

    ALTER TABLE table_name DROP city;

    ALTER TABLE weather ADD presidents VARCHAR(50); adds new column to the table



## Query data within a table

    SELECT * FROM weather;

        city      | temp_lo | temp_hi | prcp |    date    | presidents 
    ---------------+---------+---------+------+------------+------------
    San Francisco |      46 |      50 | 0.25 | 1994-11-27 | 
    Accra         |      20 |      28 |  0.2 | 2022-12-18 | 
    Tema          |       9 |      32 | 0.01 | 2020-09-01 | 
    (3 rows)

    SELECT city, date FROM weather;

        city      |    date    
    ---------------+------------
    San Francisco | 1994-11-27
    Accra         | 2022-12-18
    Tema          | 2020-09-01
    (3 rows)
    
    SELECT column1, column2, ... FROM table_name WHERE id = '02';
    

## Insert data from a Source Table to a Target Table
* INSERT INTO SELECT: inserts a field from one table to another table
* INSERT INTO destination_table(column_name)
  SELECT column_name
  FROM source_table;

        INSERT INTO grades(name) SELECT name FROM info;


## Delete a record from a Table

    DELETE FROM table_name
    WHERE record_name = "";

## Delete all records from a Table

    DELETE FROM table_name;

## Delete table

    DROP TABLE table_name;

## Truncate table 
removes all records from table which will 
empty the table but not delete the table itself

    TRUNCATE TABLE table_name;

## Comment 

```sql
-- SELECT * FROM school;
```

### Data Control Language(DCL)
DCL is used to deal with the rights and permissions of users of a database system.
You can execute SQL commands to perform different types of operations such as create
and drop tables. To do this, you need to have user rights set up. 
This is called `USER PRIVILEGES`. This category deals with advanced functions or operations
in the db. Note that this category can have generic description of the two main commands.

    GRANT:
Provide user of the database with the privileges required to allow users to access and manipulate
the database

    REVOKE:
This command remove permissions from any user.



### Transaction Control Language(TCL)
The TCL commands are used to manage transactions in the database. These are used to manage the 
changes made to the data in a table by utilizing the DML commands. 
This category deals with advanced functions or operations
in the db. Note that this category can have generic description of the two main commands.

    COMMIT:
This command saves all the work you have already done in the database.

    ROLLBACK:
This command restores a database to the last committed state


### Database Table

A `table` is comprised of `columns (fields)` and `rows (records)` filled or populated with data.
A combination of fields form a row. Every column has a data type that defines what type of data
a column can hold.` String, Numeric, Data and Time, Binary`

A `domain` is the set of legal values that can be assigned to an attribute.
This means making sure that the values a field can hold are well defined.

Each `row` or `record` is uniquely identified by a `Primary key`.
Tables are linked with one another through a key column(`PK`)0
`Primary key` in table `A`, becomes a `Foreign key` in table `B`. This creates a relationship
between Table A and B.



## Database Structure
![Alt text](database%20structure.png)

## Table

A table contains all the fields, attributes and records for a type of entity. A database will most probably contain more than one table.

## Fields

Column headings are known as fields. Each field contains a different attribute. For every table, a unit of data is entered into each field. It’s also known as a column value. Each column has a data type. For example, the “agent_name” column has a data type of text, and the “commission” column has a numeric data type.
Column value or unit of data

Each individual piece of data entered into a column is a unit of data. These units are also called data elements or column values.


## Records

A record consists of a collection of data for each entity. It’s also known as a row in the table.

## Data types

To keep the data consistent from one record to the next, an appropriate data type is assigned to each column. The data type of a column determines what type of data can be stored in each column.

Data types are also a way of classifying data values or column values. Different kinds of data values or column values require different amounts of memory to store them. Different operations can be performed on those column values based on their datatypes.

Some common data types used in databases are:

    Numeric data types such as INT, TINYINT, BIGINT, FLOAT and REAL. 

    Date and time data types such as DATE, TIME and DATETIME. 

    Character and string data types such as CHAR and VARCHAR.

    Binary data types such as BINARY and VARBINARY. 

    And miscellaneous data types such as: 

        Character Large Object (CLOB), for storing a large block of text in some form of text encoding.  

        and Binary Large Object (BLOB), for storing a collection of binary data such as images. 

## Logical database structure

The logical structure of a database is represented using a diagram known as the `Entity Relationship Diagram (ERD)`. It is a visual representation of how the database will be implemented into tables during physical database design, using a Database Management System (DBMS) like MySQL or Oracle, for example. 

A part of the logical database structure is how relationships are established between entities. These relationships are established between the instances of the entities. Accordingly, there can be three ways in which entity instances can be related to each other:

### A link to diagrams

    https://www.coursera.org/learn/intro-to-databases-back-end-development/supplement/7MqYr/database-structure-overview

    One-to-one relationships 

    One-to-many relationships 

    Many-to-many relationships 

Here’s an example of an ERD that has all these elements.
![Alt text](diagram%20of%20database%20table%20relationships.png)

### Physical database structure
In the physical database structure, where entities are implemented as tables, the relationships are established using a field known as a foreign key. A foreign key is a field in one table that refers to a common field in another table (usually the primary key). 

Let’s take the example of a database that contains two tables: student and department. The student table has a primary key of “Stud_id”, which is also present in the Department table as a foreign key. Therefore, the two tables are related to each other via the “Stud_id” field.
![Alt text](physical%20database%20structure.png)
#### Read more databse design
    https://support.microsoft.com/en-us/office/database-design-basics-eb2159cf-1e30-401a-8084-bd4f9c9ca1f5


    https://www.ibm.com/docs/en/control-desk/7.6.0?topic=design-relational-database-structure 