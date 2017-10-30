Lab 17: Pizza Planet - Part 1
Info
You will be building a front-end and back-end for a space-themed pizza restaurant and arcade called Pizza Planet
Your boss, The Claw, has chosen you
You will be building a simple web page that shows a list of pizza planet locations
The page will also have input boxes and a submit button for creating a new location
Getting Started

This is a NodeJS project, so we need a package.json file. Use npm init to create one
Make sure you have a .gitignore file set to ignore the node_modules folder
You will need to install the express, body-parser, and mongodb node modules. Make sure you use --save.
Objectives - Database

Data will be stored in a local MongoDB database named pizzaPlanet
Locations will be stored in a collection called locations
A pizza planet location needs to have the following information:
name (i.e. "5 Points South")
delivers (true/false)
phone
address (an address consists of line1, line2, city, state, zip)
Objectives - API

Build an express server
Should statically serve the client folder
Should respond to requests on the collection URL for getting all locations, and creating a new location
The collection URL should be /api/locations
Objectives - Frontend

Have an index.html in your client folder
It should request all the locations from the API when it first loads
You can style the locations on screen however you'd like
You may use Bootstrap if you wish
Each location should show the name, whether or not it delivers, the phone number, and the complete address
There should be a set of input fields at the top of the page for creating a new location
Text box for location name
Checkbox for delivers
Tel box for phone
Series of text and number boxes for all address fields, with maxlength="2" for state and 5 for zip