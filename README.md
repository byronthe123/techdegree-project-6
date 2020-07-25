# Project 6 - Static Node.js and Express Site

This project is a static NodeJS and Express web app that uses Pug (Jade) as the template engine. The project is a portfolio that displays projects which are generated based on a JSON array of project items. **Aiming for exceeds expectations: all bonus requirements completed.** 


## Programming Approach

This project is split into the following folders: routes, views, and public. Routes contain the logic for routes including index, about, project. Views hold the Pug templates. Public holds the assets such as JavaScript, CSS and images. A data.json file contains the JSON array of projects which are displayed. The app file contains the main logic for the app and can be started by running *npm start* after installing the required packages (**Bonus 1**). There is also an additional *error* view in views that displays an error message including the message, status, and stack if the user goes to a non-existing route (**Bonus 2**).

## Personalized Styles:

All personalized styles are contained in a *custom.css* file which is referenced as the last CSS file (**Bonues 3**).

1. A custom box shadow was added to the *thumbnail* class for a more 3D look.
2. A *hover* effect was added to the *thumbnail* class to transform the thumbnail on hover.
3. The font for the following elements was changed using a Google fonts: *h1,h2,h3,h4,h5,p*.

## Syntax and Conventions

The app is written in ES6 JavaScript. 
