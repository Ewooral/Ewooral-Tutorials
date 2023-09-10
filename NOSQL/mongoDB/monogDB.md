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

