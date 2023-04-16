### URL_SHORTENER

This is a Node.js application that uses Express.js as the web framework and Sequelize as the ORM for database operations. The application also uses Postgres for data storage.

Getting Started

## Prerequisites

Node.js installed on your machine

## Built With

Express.js - Web Framework

Sequelize - ORM

Postgres - Storage

## Installation

1. Clone the repository and navigate to the project directory
2. Run the following command to clone:

```bash
  git clone https://github.com/seunAwonugba/url_shortner.git
```

3. Create a `.env` file in the root directory and set the environment variables, see `.env.example` file for an example

## Running the app

To start the application run:

```bash
npm install
```

It installs all the packages this application depends on to run

4. run

```bash
npm run dev
```

navigate to http://localhost:8000 to see the application running.

5. If step 4 returns

```bash
{
  "success": true,
  "data": "OK"
}
```

It means app is set up successfully and you are ready to go.

6. Run

```bash
npm run db:refresh
```

To actually create db table in the database and run the migration script

## Database Configuration

This application uses PostgreSQL as its database. To configure the database, add the following environment variables to a .env file in the root directory of the project:

```bash
DB_CONNECTION=pg
PG_HOST=localhost
PG_PORT=5432
PG_USER=postgres_user
PG_PASSWORD=postgres_password
PG_DB_DEV=postgres_dev_db
PG_DB_TEST=postgres_test_db
PG_DB_PROD=postgres_prod_db
PG_DIALECT=postgres
```

Replace postgres_user, postgres_password, postgres_dev_db, postgres_test_db, postgres_prod_db with your system set up values.

**Here's an explanation of why i used each of the tools and libraries listed under "Built With":**

## Express.js

Express.js is a popular and widely-used web framework for Node.js that makes it easy to build scalable and efficient web applications. It provides a lot of features out of the box, such as routing, middleware, and support for various HTTP methods. We used Express.js as the primary web framework for this project because it allows us to quickly build REST APIs with a minimal amount of boilerplate code.

## Sequelize

Sequelize is an Object-Relational Mapping (ORM) library for Node.js that provides an abstraction layer for interacting with relational databases. It allows us to write database queries using JavaScript instead of SQL, which makes it easier to manage database interactions and reduces the risk of SQL injection attacks. We used Sequelize in this project to interact with our PostgreSQL database.
