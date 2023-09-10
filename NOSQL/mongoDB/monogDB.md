# SET UP MONGO DB ON LINUX UBUNTU

Install MongoDB Community Edition
Follow these steps to install MongoDB Community Edition using the apt package manager.


#### 1. Import the public key used by the package management system
From a terminal, install gnupg and curl if they are not already available:

    sudo apt-get install gnupg curl

To import the MongoDB public GPG key from 
https://pgp.mongodb.com/server-7.0.asc
, run the following command:

    curl -fsSL https://pgp.mongodb.com/server-7.0.asc | \
    sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
    --dearmor


#### 2. Create a list file for MongoDB
Create the list file /etc/apt/sources.list.d/mongodb-org-7.0.list for your version of Ubuntu.

    echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list


#### 3. Reload local package database
Issue the following command to reload the local package database:

    sudo apt-get update


#### 4. Install the MongoDB packages
You can install either the latest stable version of MongoDB or a specific version of MongoDB.
To install the latest stable version, issue the following

    sudo apt-get install -y mongodb-org


#### 5. Start MongoDB.
You can start the mongod process by issuing the following command:

    sudo systemctl start mongod

If you receive an error similar to the following when starting mongod:
Failed to start mongod.service: Unit mongod.service not found.
Run the following command first:

    sudo systemctl daemon-reload

Then run the start command above again.


#### 6. Verify that MongoDB has started successfully.
    sudo systemctl status mongod

You can optionally ensure that MongoDB will start following a system reboot by issuing the following command:

    sudo systemctl enable mongod


#### 7. Stop MongoDB.
As needed, you can stop the mongod process by issuing the following command:

    sudo systemctl stop mongod


#### 8. Restart MongoDB.
You can restart the mongod process by issuing the following command:

    sudo systemctl restart mongod

You can follow the state of the process for errors or important messages by watching the output in the /var/log/mongodb/mongod.log file.


#### 9. Begin using MongoDB.
Start a mongosh session on the same host machine as the mongod. You can run mongosh
without any command-line options to connect to a mongod that is running on your localhost with default port 27017.

    mongosh


#### 10. Stop MongoDB.
Stop the mongod process by issuing the following command:

    sudo service mongod stop


#### 11. Remove Packages.
Remove any MongoDB packages that you had previously installed.

    sudo apt-get purge mongodb-org*


#### 12. Remove Data Directories.
Remove MongoDB databases and log files.

    sudo rm -r /var/log/mongodb
    sudo rm -r /var/lib/mongodb



# .....................................................................................................











# MONGODB TUTORIALS

#### Connect to your MongoDB deployment on Visual Studio Code
Paste your connection string into the Command Palette.
    
    mongodb+srv://ewooral:<password>@cluster0.tua5o.mongodb.net/
    pass: OWusu123%40%23 OR OWusu123

`MongoDB` is a NoSQL document database. This means data in MongoDB is stored in a document
These documents are stored in COLLECTIONS


`Document` is a way to organize and store data as a set of field-value pairs.
E.g. {
    <field> : <value>,
    <field> : <value>,
    "name" : "Elijah",
    "age" : 30
}

`Field` is a unique  identifier(key) for a datapoint
`value` is data related to a given identifier

    NB. A collection contains many documents and a database contains multiple collections

#### MongoDB Atlas

Replica Set - a few connected machines that store the same data to ensure that if something happens to one of the machines the data will remain intact. Comes from the word replicate - to copy something.

Instance - a single machine locally or in the cloud, running a certain software, in our case it is the MongoDB database.

Cluster - group of servers that store your data.


####  Create and Deploy an Atlas Cluster
    https://university.mongodb.com/mercury/M001/2021_August_10/chapter/Chapter_1_What_is_MongoDB_/lesson/5f32deb504e9ffc01ac9586c/problem

Instead of `tables`, a MongoDB database stores its data in `collections`. 
A `collection` holds one or more BSON documents. Documents are analogous to 
records or rows in a relational database table. Each document has one or more fields; 
`fields` are similar to the columns in a relational database table.

    table = collection
    documents = row or records

#### JSON
JSON, or JavaScript Object Notation, is a human-readable data interchange format, 
specified in the early 2000s. Even though JSON is based on a subset of the JavaScript 
programming language standard, it’s completely language-independent.

``` json
{
  "_id": 1,
  "name": { "first" : "John", "last" : "Backus" },
  "contribs": [ "Fortran", "ALGOL", "Backus-Naur Form", "FP" ],
  "awards": [
    {
      "award": "W.W. McDowell Award",
      "year": 1967,
      "by": "IEEE Computer Society"
    }, {
      "award": "Draper Prize",
      "year": 1993,
      "by": "National Academy of Engineering"
    }
  ]
}

```

* There are several issues that make `JSON` less than ideal for usage inside of a database.

        JSON only supports a limited number of basic data types. Most notably, JSON lacks support 
        for dates and binary data.

        JSON objects and properties don’t have fixed length which makes traversal slower.

In order to make `MongoDB` JSON-first, but still high performance and general purpose, BSON was invented to bridge the gap

#### BSON
BSON stands for “Binary JSON,” and that’s exactly what it was invented to be. 
BSON’s binary structure encodes type and length information, which allows it 
to be traversed much more quickly compared to JSON.

BSON adds some non-JSON-native data types, like dates and binary data, 
without which `MongoDB` would have been missing some valuable support.

``` json
{"hello": "world"} →
\x16\x00\x00\x00           // total document size
\x02                       // 0x02 = type String
hello\x00                  // field name
\x06\x00\x00\x00world\x00  // field value
\x00                       // 0x00 = type EOO ('end of object')
 
{"BSON": ["awesome", 5.05, 1986]} →
\x31\x00\x00\x00
 \x04BSON\x00
 \x26\x00\x00\x00
 \x02\x30\x00\x08\x00\x00\x00awesome\x00
 \x01\x31\x00\x33\x33\x33\x33\x33\x33\x14\x40
 \x10\x32\x00\xc2\x07\x00\x00
 \x00
 \x00

```

`MongoDB` stores data in `BSON` format both internally, and over the network, 
but that doesn’t mean you can’t think of MongoDB as a JSON database. 
Anything you can represent in JSON can be natively stored in MongoDB, and 
retrieved just as easily in JSON.

