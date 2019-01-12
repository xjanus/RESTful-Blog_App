# RESTful Routing Blog App

Perform CRUD (Create, Read, Update and Delete) operations on any blog post. Create a new blog post by adding title, image and descrition to each blog post.

# RESTful ROUTES

name | path/url | http verb | description | Mongoose Method
--------------------------------------------------------
* INDEX ROUTE |  /blogs        |   GET request  |   display a list of all blogs        |                  Blog.find()
* NEW ROUTE  |   /blogs/new    |   GET request  |   displays form to add a NEW blog    |                  N/A
* CREATE ROUTE | /blogs        |   POST request |   Add new dog(resource) to DB and redirect somewhere |  Blog.create()
* SHOW ROUTE  |  /blogs/:id    |   GET request  |   Shows detailed information about one blog(resource) |  Blog.findByID()
* EDIT ROUTE  |  /blogs/:id/edit | GET request  |   Show edit form for one blog(resource)            |    Blog.findByID()
* UPDATE ROUTE | /blogs/:id    |   PUT request  |   Update a particular blog, then redirect somewhere |   Blog.findByIdAndUpdate()
* DESTROY ROUTE | /blogs/:id   |    DELETE request |  Delete a particular blog, then redirect somewhere  |  Blog.findByIdAndRemove()

## Getting Started and Execution

* Include all the dependencies from package.json file.
* Now run `node app.js` from Cloud9 console.

## Built With -

* [Node.js] (https://nodejs.org) - JavaScript runtime
* [Express] (https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [MongoDB] (https://mongodb.com) - Cross-platform document-oriented database program
* [Mongoose.js] (https://mongoosejs.com/) - MongoDB object modeling for Node.js
* [npm] (https://npmjs.com/) - JavaScript Package manager
* [ejs package] (https://npmjs.com/package/ejs) - Embedded JavaScript templates
* [body-parser package] (https://npmjs.com/package/body-parser) - Node.js body parsing middleware
* [method-override package] (https://npmjs.com/package/method-override) - Overrides query methods for PUT and DELETE Routes
* [express-sanitizer package] (https://npmjs.com/package/express-sanitizer) - To prevent inducing javascript inside a blog post
* [JSON] (https://json.org) - Lightweight data-interchange format
* [Javascript] (https://www.javascript.com/) - High-level, interpreted programming language
* [AWS Cloud9 IDE] (https://aws.amazon.com/cloud9/) -  Cloud-based integrated development environment (IDE)

## Authors

* **xjanus** (https://github.com/xjanus)

## Acknowledgments

* Colt Steele's Bootcamp course


## Steps to build the RESTful routing Blog App

# Blog Index
* Setup the Blog App
* Create the Blog model
* Add INDEX route and template
 
# Basic Layout
* Header and Footer Partials
* Include Semantic UI
* Add Simple Nav Bar
* 
# Putting the C in CRUD
* Add NEW Route
* Add NEW template
* Add CREATE Route
* Add CREATE template

# Showtime
* Add a show route
* Add a show template
* Add links to a show page
* Style show template
* 

# Edit/Update
* Add Edit Route
* Add Edit Form
* Add Update Route
* Add Update Form
* Add Method-Override: It is an express package. The HTTP form doesnt support PUT and DELETE request. So, this is a way-around.

# DESTROY
* Add Destroy Route
* Add Edit and Destroy Links

# Final Updates
* Sanitize blog body
* Style Index
* Update REST table

# More Information - Basics of RESTful Routing

## Introduction

* Representational State Transfer (REST) is an Architectural style that maps between HTTP routes and CRUD operations.
* RESTful web services are web services that conform to the REST architectural style. 
* It provides interoperability between computer systems on the Internet.