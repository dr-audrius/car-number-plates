Application with CRUD operations for managing Plate IDs.
Runs on Node.js, angularjs, mySQL.

## Installation
Clone or download zip to local machine and run :

npm install


## Setup mySQL and prepare some initial data

1. Install mySQL on your local mashine
2. Create database:  CREATE DATABASE plates;
3. USE plates;
3. Create table and setup some data by importing customerDB.sql into plates DATABASE with command: "mysql -u root -p plates < customerDB.sql"


## Database connection data located in server.js

host: 'localhost',
user: 'root',
password : 'root',
port : 3306, //port mysql
database:'plates'




