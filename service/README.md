# **Book Rental Service app (Back-end using Spring boot)**

## **Full app**

This is a book rental service app ( see below for all features of the app ).

The app is made of

a) The front-end is at https://github.com/yasir-satti/book-rental-app-react

b) This back-end repo

c) mySQL db

## **Run the full app**

a) clone both repos

b) create mySQL db

c) run back-end ( listening on port 8080 )

d) run front-end ( listening on port 3000 )

e) Enter and submit customer registration details

## **Front end app**

1. Registration screen

a) Implementation

b) Unit tests (Jest)

c) E2E testing with testCafe, selenium and Cypress
2. Login screen
3. Page for browse available books for rental
4. Rent book(es) page
5. Delivery address page
6. Payment page
7. Rentals return page
8. Customer service page

## **Back end app**

1. REST API endpoints for CRUD operations
2. MyBatis framework for database operations

## **CI pipeline with husky and github actions**

### **1) front-end app**

Husky pre-commit runs with each branch push. Checks linting and run units tests.

### **2) back-end-end app**

## **Testing tools**

### **1) Front-end app**

#### **Jest for unit tests**

#### **e2e : Cypress**

Steps:

a) for installation run command
$ npm i -D cypress @testing-library/cypress eslint-plugin-cypress

b) add this to commands.js under cypress/support folder
import '@testing-library/cypress/add-commands'

c) Create file .eslintre.json under cypress folder and add this
{
"extends": ["plugin:cypress/recommended"]
}

d) create cypress.json under src and add
{
"baseUrl": "http://localhost:3000"
}

e) under cypress/fixtures & cypress/inegration remove all sample files

f) in .gitignore under #testing add
/cypress/videos
/cypress/screenshots

g) run cypress sever
$ npm run cypress

h) on cypress server click on test name to run

** cypress commands
https://docs.cypress.io/api/commands/get

#### **e2e : TestCafe**

Steps:

a) For installation run command
$ npm i testcafe -g --save-dev

b) to run test
$ testcafe {browser_name} {test filename}
example
$ testcafe chrome todo.spec.js

#### **e2e : Selenium**

Steps:

a) to isntall run ( https://medium.com/dailyjs/how-to-setup-selenium-on-node-environment-ee33023da72d )
$ npm install selenium-webdriver

b) download the latest broweser drivers you want to test (chrome, firefox, ..etc) for your operating system

c) add the drivers' location to your system PATH variable

d) run a test
$ node {test filename}
example
$ node todo_selenium_test.js

### **2) Back-end app**

#### **JUnit**


