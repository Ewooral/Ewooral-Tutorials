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

# you can ignore import React from....

# configure Eslint with JSX
    npm install -D eslint-plugin-import@2.25.4 eslint-plugin-jsx-a11y@6.5.1 eslint-plugin-react@7.28.0
  

# Hooks
    Do not put hooks inside if statement or loops