# Product Management API

A RESTful API built with Node.js and Express.js for managing product records. This project demonstrates core backend development concepts, including routing, controller-based architecture, request handling, and HTTP status codes.

## Features

- Create a product
- Retrieve all products
- Retrieve a single product by ID
- Handle requests for products that do not exist
- Store product records in an in-memory array

## Tech Stack

- Node.js
- Express.js
- JavaScript

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/products` | Create a product |
| GET | `/products` | Retrieve all products |
| GET | `/products/:id` | Retrieve a product by ID |

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone this repository:

   `git clone YOUR_REPOSITORY_URL`

2. Navigate into the project directory:

   `cd YOUR_PROJECT_FOLDER`

3. Install the dependencies:

   `npm install`

4. Start the server using your configured entry point:

   `node index.js`

The server runs at `http://localhost:8080`.

## Example Request

To create a product, send a `POST` request to `/products` with a JSON body:

```json
{
  "name": "Wireless Keyboard",
  "price": 15000,
  "category": "Electronics",
  "quantity": 12
}
```

## Data Storage

This project uses an in-memory array instead of a database. Product records created during runtime are lost when the server restarts.

## Learning Objectives

- Building REST API endpoints with Express.js
- Separating routes and controller logic
- Handling request bodies and URL parameters
- Returning appropriate HTTP status codes
- Managing application data in memory

## Future Improvements

- Add persistent database storage
- Introduce more comprehensive input validation
- Add automated API tests
