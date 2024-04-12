
# Tweeter - Simplified Twitter-Like Backend System Documentation

Welcome to the documentation for Tweeter - Simplified Twitter-Like Backend System. This system is designed to provide basic functionality similar to Twitter, including user registration, tweeting, and fetching user timelines.

## API Endpoints

### User Registration

Registers a new user with the system.

- **URL**
  - `POST /api/users/register`

- **Request Body**
  - `username`: String (required) - The username of the new user.
  - `password`: String (required) - The password of the new user.

- **Response**
  - `status`: String - Indicates the status of the registration request.
  - `message`: String - Provides additional information about the registration status.

### User Login

Authenticates an existing user and generates a JWT token for further authentication.

- **URL**
  - `POST /api/users/login`

- **Request Body**
  - `username`: String (required) - The username of the user.
  - `password`: String (required) - The password of the user.

- **Response**
  - `status`: String - Indicates the status of the login request.
  - `message`: String - Provides additional information about the login status.
  - `token`: String - JWT token for authentication.

### Post a Tweet

Allows an authenticated user to post a new tweet.

- **URL**
  - `POST /api/tweets`

- **Request Headers**
  - `Authorization`: String (required) - JWT token obtained during login.

- **Request Body**
  - `text`: String (required) - The content of the tweet.

- **Response**
  - `status`: String - Indicates the status of the tweet posting request.
  - `message`: String - Provides additional information about the tweet posting status.

### Fetch User Timeline

Retrieves the timeline of tweets for a specific user.

- **URL**
  - `GET /api/users/:userId/timeline`

- **URL Parameters**
  - `userId`: String (required) - The unique identifier of the user whose timeline is being fetched.

- **Response**
  - `status`: String - Indicates the status of the timeline fetching request.
  - `tweets`: Array - Contains the tweets in the user's timeline.

## Project Structure

The project is structured as follows:

- **controllers**: Contains modules responsible for handling business logic.
- **models**: Contains modules defining MongoDB schemas and database interactions.
- **routes**: Contains modules defining API endpoints using Express.js.
- **middleware**: Contains modules defining middleware functions, such as authentication.
- **config**: Contains configuration files for the application.
- **utils**: Contains utility functions used throughout the application.
- **app.mjs**: Entry point of the application where Express.js is configured.
- **server.mjs**: Starts the server and listens for incoming requests.

## Authentication

Basic user authentication is implemented using JWT tokens. Upon successful login, a JWT token is generated and must be included in the headers of protected endpoints for authentication.
