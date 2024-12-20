# Countries Info App

This project provides detailed information about countries, including population and flag data. It is built using **Next.js** for the frontend and **Nest.js** for the backend, with **TypeScript** throughout the application.

## Features

- View a list of countries with their details (e.g., name and country code).
- Fetch population and flag data for each country.
- Built with modern frameworks and best practices, ensuring scalability and maintainability.

## Table of Contents

1. [Backend Setup](#backend-setup)
2. [Frontend Setup](#frontend-setup)
3. [Running the Application](#running-the-application)
4. [Testing](#testing)
5. [Environment Variables](#environment-variables)

## Backend Setup

The backend is built using **Nest.js** and serves as an API for the frontend to retrieve country data, including population and flag information.

### Prerequisites

Ensure that you have the following installed:
- Node.js (version >= 16)
- Yarn (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/davidabril01/Country-Info-App.git
   cd /backend

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Create a `.env` file in the root of the backend project with the following content:

   ```bash
   PORT=4000
   BASE_URL=https://example.com/api
   ```

1. Run the backend:

   ```bash
   yarn start:dev
   ```

The backend will be running at `http://localhost:4000`.



## Frontend Setup

The frontend is built using **Next.js** and fetches data from the backend API to display country information.

### Prerequisites

Ensure that you have the following installed:

- Node.js (version >= 16)
- Yarn (recommended) or npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/countries-info-app.git
   cd /frontend
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Run the frontend:

   ```bash
   yarn dev
   ```

   The frontend will be running at `http://localhost:3000`.

## Running the Application

To run the entire application locally, follow these steps:

1. Ensure both the backend and frontend are running:
   - Backend: `http://localhost:4000`
   - Frontend: `http://localhost:3000`
2. The frontend will automatically fetch data from the backend API and display it in the browser.

## Testing

To test the application, you can use the following commands for both backend and frontend:

### Backend Tests

1. Run tests in the backend:
   ```bash
   yarn test

2. Run ESLint for linting the backend code:

   ```
   yarn lint
   ```

### Frontend Tests

1. Run frontend tests:

   ```
   yarn test
   ```

2. Run ESLint for linting the frontend code:

   ```
   yarn lint
   ```

## Environment Variables

### Backend `.env` Configuration

The backend requires the following environment variables to function properly:

- `PORT`: The port on which the backend will run (default: 4000).
- `BASE_URL`: The base URL of the API (set as needed for deployment).

### Frontend `.env`

- `NEXT_PUBLIC_PORT`: The port on which the backend are runing (default: 4000).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

```bash
Este `README.md` cubre la instalación y configuración tanto del backend como del frontend, especificando los pasos necesarios para ejecutarlo y probarlo, además de las variables de entorno utilizadas. Puedes ajustarlo según lo necesites.
```
