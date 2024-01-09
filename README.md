# ConvoCraft_Tejas
Discover our feature-rich MERN-based chat app offering seamless communication. Enjoy chat history, message scheduling, personalized profiles with display pictures and emoticons, and the immersive experience of real-time voice messaging.

# Backend API Documentation - Version 1

## Authentication Endpoints

### Register User

- **URL:** `/api/v1/register`
- **Method:** `POST`
- **Description:** Allows users to register by providing necessary credentials.
- **Authenticated:** No
- **Request Body:**
    - `username`: User's username
    - `password`: User's password

### Login

- **URL:** `/api/v1/login`
- **Method:** `POST`
- **Description:** Logs in registered users by verifying their credentials.
- **Authenticated:** No
- **Request Body:**
    - `username`: User's username
    - `password`: User's password

### Logout

- **URL:** `/api/v1/logout`
- **Method:** `POST`
- **Description:** Logs out the authenticated user.
- **Authenticated:** Yes

### Refresh Token

- **URL:** `/api/v1/refresh`
- **Method:** `POST`
- **Description:** Refreshes the user's access token.
- **Authenticated:** Yes

## User Management

### Get All Users

- **URL:** `/api/v1/`
- **Method:** `GET`
- **Description:** Retrieves all users' information.
- **Authenticated:** Yes

### Update User Profile

- **URL:** `/api/v1/user/`
- **Method:** `PUT`
- **Description:** Updates the user's profile information.
- **Authenticated:** Yes

### Get User Profile

- **URL:** `/api/v1/user/`
- **Method:** `GET`
- **Description:** Retrieves the user's profile information.
- **Authenticated:** Yes

## Chat Operations

### Fetch All Chats

- **URL:** `/api/v1/`
- **Method:** `GET`
- **Description:** Retrieves all chats available to the user.
- **Authenticated:** Yes

### Access Chat

- **URL:** `/api/v1/`
- **Method:** `POST`
- **Description:** Accesses and posts chats.
- **Authenticated:** Yes

### Fetch Messages for a Specific Chat

- **URL:** `/api/v1/:chatId`
- **Method:** `GET`
- **Description:** Retrieves all messages for a specific chat.
- **Authenticated:** Yes

### Send Message to a Chat

- **URL:** `/api/v1/`
- **Method:** `POST`
- **Description:** Sends a message to a chat.
- **Authenticated:** Yes

### Create Group Chat

- **URL:** `/api/v1/group`
- **Method:** `POST`
- **Description:** Creates a new group chat.
- **Authenticated:** Yes

### Rename Group Chat

- **URL:** `/api/v1/renameGroup`
- **Method:** `PUT`
- **Description:** Renames an existing group chat.
- **Authenticated:** Yes

### Remove User from Group Chat

- **URL:** `/api/v1/removeFromGroup`
- **Method:** `PUT`
- **Description:** Removes a user from a group chat.
- **Authenticated:** Yes

### Add User to Group Chat

- **URL:** `/api/v1/addToGroup`
- **Method:** `PUT`
- **Description:** Adds a user to an existing group chat.
- **Authenticated:** Yes

This repository contains a Node.js API project that provides functionalities for managing users, chats, and groups.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/nodejs-api-project.git
    ```

2. Navigate to the project directory:

    ```bash
    cd nodejs-api-project
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Set up environment variables by creating a `.env` file based on `.env.example`. Include necessary configurations (e.g., database connection, tokens).

2. Start the server:

    ```bash
    npm start
    ```

3. Use API endpoints by sending requests to the provided routes. Refer to the API documentation for available endpoints and functionalities.

## API Documentation

The API documentation is available in the `API.md` file in this repository. It contains detailed information about the available endpoints, their descriptions, methods, and authentication requirements.

## Technologies Used

- Node.js
- Express.js
- MongoDB (or your database of choice)
- Other dependencies listed in `package.json`

## Contributing

Contributions are welcome! If you find any issues or want to add new features, please open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.