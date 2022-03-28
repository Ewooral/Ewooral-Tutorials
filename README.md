# HOW TO USE ONE NODE_MODULE FOR MANY PROJECTS
 

   

Main directory should look like this

    node_modules
    Project 1
    Project 2
    Project 3
    Project 4

just open the file Project 1/.angular-cli.json

change the schema

    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",

to

    "$schema": "./../node_modules/@angular/cli/lib/config/schema.json"

    and don't forget to create node_modules empty folder inside your project directory
