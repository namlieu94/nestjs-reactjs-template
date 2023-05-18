# entrylevel-assessment
## Description

This assessment includes 2 repositories:
 - Entrylevel-backend is a repository for the backend side written in Typescript, using the NestJs framework.
Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. The reason to use NestJS is to easily extend it later. 

The project uses a DTO to define a data interface that interacts with the client side and also validates the input data. In addition, the project uses Entities to define a data interface that interacts with a database or data source. This helps promote the power of Typescript, minimizing errors in the programming process. In addition, defining the ErrorHandler class provides centralized error management, making it easy to log and debug later.

API processing has 3 main parts: SessionsController is used to receive and respond to the client, SessionsService is used to handle business logic, SessionsRepository is used to interact with the database or data source, such division is to specialize in each stage of data processing, making it easier to control and maintain the system.

- Entrylevel-fronted is a repository for the frontend side written in Javascript, using ReactJs. Using Redux Toolkit makes it easier to write good Redux applications and speeds up development, by baking in our recommended best practices, providing good default behaviors, catching mistakes, and allowing to write simpler code. 
 
SessionsPage is the main component used to get and process session data from the server, besides, Program component is responsible for displaying Program data; The SelectValue component takes care of handling and triggering actions when the user selects Status or Short Title Selectors.

## Requirements
  - NodeJs
  - Yarn


## Installation and Setup Steps

Open separate shell tab for each repository and run the following commands in order

- Entrylevel-backend:

In the project directory, you can run:

```bash
# run this command to install node modules
$ yarn install

# unit tests
$ yarn run test

# run this command to run the application
# development
$ yarn run start

After starting, application is running on: http://localhost:8080/
```



- Entrylevel-frontend:

In the project directory, you can run:

```bash
# run this command to install node modules
$ yarn install

# run this command to run the application
# development
$ yarn run start

After starting, application is running on: http://localhost:3000/
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
