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
            psql 'database' 'user' OR
            psql 'database'


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





# SQL operators(+, -, *, %)

    SELECT salary + allowance FROM employee;

    SELECT age + id AS sum FROM info;

    SELECT * FROM employee WHERE salary + allowance = 25000;






## ACID TRANSACTION
* A SQL DB must use `ACID` transaction

    `ACID` transactions ensure data integrity, reliability, and consistency in database systems. 
    They are widely used in various applications where accurate and reliable data processing is crucial, 
    such as banking systems, e-commerce platforms, and inventory management systems.

    This is a transaction (operation) in the DB that has four properties
    - A => atomicity
    If a transaction consist of multiple sub-operation, a cononical example 
    (A canonical example refers to a typical or standard example that represents a concept or situation) is making a 
    db transaction to transfer funds from one bank account to another account. That transaction will involve two operations. 
        * Deductions funds from one bank account
        * Increasing funds to another bank account
    
    The `atomicity of a transaction` dictates that if multiple operations are being performed as described in the canonical 
    concept above, the sub-operations will be considered a unit and they will either all succeed or fail.
    If there is an issue in the DB or a network problem that causes one or more of these suboperations to fail, the 
    entire transaction fails, and opposite for if they all succeed

         Imagine you have a toy building set. Atomicity means that when you start building something, 
         you either finish building it completely or don't start at all. There are no half-built structures allowed! 


    - C = consistency
    Means that any transaction in the DB is going to conform to and abide by all rules in the DB.
    Again any future transaction in the DB is going to take into account any past transaction in the DB.

        Think of a puzzle. Consistency means that all the puzzle pieces fit together perfectly and make a 
        complete picture. In a database, consistency means that everything is organized and follows the rules, 
        just like a completed puzzle. 


    - I => Isolation
     `Isolation` ensures that concurrent transactions do not interfere with each other. Each transaction operates
     independently, as if it were the only transaction executing on the database. Isolation prevents issues like dirty 
     reads, non-repeatable reads, and phantom reads. 

         Imagine you and your friend are playing with your own sets of toys. Isolation means that 
         you both can play with your toys separately, without interfering with each other. In a database, 
         isolation ensures that different actions happening at the same time won't mess up each other's work. 

         
    - D = Durability
     `Durability` guarantees that once a transaction is committed, its changes are permanent and will survive
     any subsequent failures, such as power outages or system crashes. The committed data is stored in a durable 
     manner and can be retrieved even in the event of a failure.

        Picture a notebook where you write down important things. Durability means that 
        even if you accidentally spill water on the notebook, the writing won't disappear. 
        In a database, durability guarantees that once something is saved, it stays saved 
        even if there's a power outage or a computer crash.  

    
## Database Index

        DB Index is a data structure that improves the speed of data retrieval 
        operations on a database table. It works like an index in a book, allowing you to quickly locate information 
        without having to read the entire book. 
 
An index is created on one or more columns of a table, and it stores a copy of the data in the indexed 
columns in a separate data structure with a pointer to the original row in the table. This allows the 
database to quickly search for and retrieve data based on the values in the indexed columns. 
 
Indexes can significantly improve the performance of database queries, especially for large tables with 
millions of rows. However, they also come with some overhead, as they require additional storage space and 
can slow down data insertion and update operations. 
 
Indexes can be created and managed using SQL commands in most database management systems. It's important to 
carefully choose which columns to index and how to configure the index to optimize query performance while 
minimizing the impact on data modification operations.












### ..............................................................................


## ORM

Object-Relational Mapping (ORM) is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. When talking about ORM, most people are referring to a library that implements the Object-Relational Mapping technique, hence the phrase "an ORM".

An ORM library is a completely ordinary library written in your language of choice that encapsulates the code needed to manipulate the data, so you don't use SQL anymore; you interact directly with an object in the same language you're using.

For example, here is a completely imaginary case with a pseudo language:

You have a book class, you want to retrieve all the books of which the author is "Linus". Manually, you would do something like that:

``` SQL
book_list = new List();
sql = "SELECT book FROM library WHERE author = 'Linus'";
data = query(sql); // I over simplify ...
while (row = data.next())
{
     book = new Book();
     book.setAuthor(row.get('author');
     book_list.add(book);
}
```

With an ORM library, it would look like this:

book_list = BookTable.query(author="Linus");

The mechanical part is taken care of automatically via the ORM library.
Pros and Cons

Using ORM saves a lot of time because:

    DRY: You write your data model in only one place, and it's easier to update, maintain, and reuse the code.
    A lot of stuff is done automatically, from database handling to I18N.
    It forces you to write MVC code, which, in the end, makes your code a little cleaner.
    You don't have to write poorly-formed SQL (most Web programmers really suck at it, because SQL is treated like a "sub" language, when in reality it's a very powerful and complex one).
    Sanitizing; using prepared statements or transactions are as easy as calling a method.

Using an ORM library is more flexible because:

    It fits in your natural way of coding (it's your language!).
    It abstracts the DB system, so you can change it whenever you want.
    The model is weakly bound to the rest of the application, so you can change it or use it anywhere else.
    It lets you use OOP goodness like data inheritance without a headache.

But ORM can be a pain:

    You have to learn it, and ORM libraries are not lightweight tools;
    You have to set it up. Same problem.
    Performance is OK for usual queries, but a SQL master will always do better with his own SQL for big projects.
    It abstracts the DB. While it's OK if you know what's happening behind the scene, it's a trap for new programmers that can write very greedy statements, like a heavy hit in a for loop.

How to learn about ORM?

Well, use one. Whichever ORM library you choose, they all use the same principles. There are a lot of ORM libraries around here:

    Java: Hibernate.
    PHP: Propel or Doctrine (I prefer the last one).
    Python: the Django ORM or SQLAlchemy (My favorite ORM library ever).
    C#: NHibernate or Entity Framework

If you want to try an ORM library in Web programming, you'd be better off using an entire framework stack like:

    Symfony (PHP, using Propel or Doctrine).
    Django (Python, using a internal ORM).

Do not try to write your own ORM, unless you are trying to learn something. This is a gigantic piece of work, and the old ones took a lot of time and work before they became reliable.
