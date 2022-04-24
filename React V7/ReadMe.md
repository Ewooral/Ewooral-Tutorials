# Setting up React from the Ground up without webpack

    npm run lint -- --debug
    npm run lint -- --fix


# Git
    git init
    ls -lsah 

# .gitignore

# install parcel
    npm i -D parcel

# add parcel to your package.json script object:
    "dev": "parcel src/index.html"

# run your project using
    npm run dev

# install react
    npm i react@17.0.2 react-dom@17.0.2

# What is a bundler

# don't forget to add 
    type="module" to your index.js script tag
    E.g. <script type="module" src="App.js"></script>