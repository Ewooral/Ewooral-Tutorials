## Setup postgres on linux:
 * command: 

           sudo apt-get update
           sudo apt-get install postgresql

 * status of posgres:

           service postgresql status

 * use postgres:

           sudo su postgres

 * Start Postgres command line:

           psql

 * Show databases:

           \l
 * show users:

           \du

 * Change default user password:

           ALTER USER postgres WITH PASSWORD 'password name';

 * Create a User and a Database:
   
           CREATE USER 'username' WITH PASSWORD 'password';
            CREATE DATABASE 'database name' WITH OWNER 'username';

 * Make a user a Superuser:

            ALTER USER 'username' WITH SUPERUSER;

 * Remove or Delete a User:
            
            DROP USER 'username'
 * Read PSQL Documentation:
            
            man psql

 * Connect to the Database:

            psql 'database' 'user'


## Show tables:
    command: \dt

## quit server
    command: \q