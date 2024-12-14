# Random Commit Message API

## Description
The **Random Commit Message API** generates funny and relatable commit messages for developers.
It allows users to fetch random messages or filter them by category (e.g., `bugs`, `success`, `fix`).
This is a fun way to enhance your Git commit history while staying relatable in the tech world. 🎉

## Features
- Fetch a random commit message.
- Filter commit messages by category.
- Returns humorous, insightful, and relatable messages.

---

## Endpoints

### 1. **Get a Random Commit Message**
**URL:** `/random-message`

**Method:** `GET`

**Query Parameters:**
- `category` (optional): Filter messages by category (e.g., `bugs`, `fix`, `success`).

**Responses:**
- **200 OK**: Returns a random commit message.
- **404 Not Found**: No messages found for the specified category.

**Example Requests:**
- Fetch a random message:
  ```
  GET http://localhost:3000/random-message
  ```

  **Response:**
  ```json
  {
      "message": "Ça compile enfin... je crois. 🤞",
      "category": "success"
  }
  ```

- Fetch a message for the `bugs` category:
  ```
  GET http://localhost:3000/random-message?category=bugs
  ```

  **Response:**
  ```json
  {
      "message": "Adieu petit bug, tu vas me manquer (ou pas). 👋🐞",
      "category": "bugs"
  }
  ```

- Fetch a message for a non-existent category:
  ```
  GET http://localhost:3000/random-message?category=unknown
  ```

  **Response:**
  ```json
  {
      "error": "Aucun message trouvé pour cette catégorie."
  }
  ```

---

## Setup and Installation

### Prerequisites
- **Node.js** (v12 or higher)
- **npm** (or **yarn**)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd random-commit-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Access the API at:
   ```
   http://localhost:3000/random-message
   ```

---

## Categories
The available categories for filtering messages are:
- `success`: Messages about successful builds or operations.
- `fix`: Messages about bug fixes.
- `bugs`: Messages about bugs and debugging.
- `features`: Messages about new features.
- `performance`: Messages about performance improvements.
- `deploy`: Messages about deployment.
- `refactor`: Messages about code refactoring.
- `comments`: Messages related to comments and documentation.
- `teamwork`: Messages about teamwork.
- `debug`: Messages about debugging efforts.
- `code`: General messages about coding.
- `excuses`: Funny excuses developers use.

---

## Contributing
Contributions are welcome! Feel free to submit a pull request with additional features, categories, or messages.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## Author
Developed by Mohamed, with a sprinkle of humor and a love for clean commit histories.

