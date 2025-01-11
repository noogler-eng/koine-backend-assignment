# Koine Backend Assignment

This repository contains the backend implementation for a cryptocurrency statistics and deviation API. It is built using **TypeScript**, **Express**, **Mongoose**, and **MongoDB**.

## Deployment

The application is deployed on [Render](https://render.com/), and it may take up to **50 seconds** to start the server due to free-tier limitations.

## Base URL

```
https://koine-backend-assignment.onrender.com
```

## API Endpoints

### 1. Get Coin Data

**Endpoint:**

```
GET /top-stats
```

**Query Parameters:**

- `coin` (required): Name of the cryptocurrency (e.g., `bitcoin`, `ethereum`, `polygon`).

**Example Request:**

```
GET https://koine-backend-assignment.onrender.com/top-stats?coin=bitcoin
```

**Description:**
Returns the top statistics for the specified cryptocurrency.

---

### 2. Get Coin Deviation

**Endpoint:**

```
GET /deviation
```

**Query Parameters:**

- `coin` (required): Name of the cryptocurrency (e.g., `bitcoin`, `ethereum`).

**Example Request:**

```
GET https://koine-backend-assignment.onrender.com/deviation?coin=bitcoin
```

**Description:**
Returns the deviation data for the specified cryptocurrency.

---

## Technologies Used

- **TypeScript**: For strong typing and maintainable code.
- **Express**: Backend framework for building APIs.
- **Mongoose**: For interacting with the MongoDB database.
- **MongoDB**: Database for storing cryptocurrency data.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or later)
- **npm** (v7 or later)
- **MongoDB** (local or cloud-based instance)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:

   ```env
   PORT=3000
   MONGO_URI=<your-mongodb-uri>
   ```

4. Build the TypeScript project:

   ```bash
   npx tsc
   ```

5. Start the server:
   ```bash
   npm start
   ```

### Accessing the API

Once the server is running, you can access the API at:

```
http://localhost:3000
```

## Notes

- Since the application is hosted on Render's free tier, there might be a delay of up to 50 seconds when starting the server.

---

Feel free to raise an issue or contribute to this repository!
