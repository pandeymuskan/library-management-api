# 📚 Library Management API

A simple **Library Management System** built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose** — with **Joi validation** for clean and reliable data handling.

This project allows you to manage **Authors** and **Books**, including creating, viewing, updating, searching, and deleting records.  
It also includes input validation, pagination, and clear modular structure for maintainability.

---

## 🚀 Features

✅ Create and view authors  
✅ Create, update, delete, and view books  
✅ Search books by author name  
✅ Input validation using Joi  
✅ Pagination for book listing  
✅ Environment-based configuration with `.env`

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose (ODM)**
- **Joi** (for input validation)
- **dotenv** (for environment configuration)

---

## 🧩 Folder Structure

```
library-api/
│
├── src/
│   ├── config/              # Database connection
│   ├── controllers/         # Business logic for authors & books
│   ├── middlewares/         # Reusable validation middleware
│   ├── models/              # Mongoose schemas
│   ├── routes/              # Express route definitions
│   ├── validations/         # Joi validation schemas
│   ├── app.js               # Express app setup
│   └── server.js            # Entry point
│
├── .env                     # Environment variables
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone <your_repo_url>
cd library-api
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root folder and add the following:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/library_db
```

> 

### 4️⃣ Run the Server

Start the server in development mode:

```bash
npm run dev
```

or in production mode:

```bash
npm start
```

Once the server is running, you’ll see:

```
 MongoDB connected successfully
Server running on port 5000
```

Then open your browser or Postman at:  
👉 **http://localhost:5000**

---

## 🧠 API Endpoints

### **Author Routes**

| Method | Endpoint | Description |
|--------|-----------|-------------|
| **POST** | `/api/authors` | Create a new author |
| **GET** | `/api/authors` | Get all authors |

#### 🧪 Example Request – Create Author (Postman or cURL)

**POST** `/api/authors`

**Request Body:**
```json
{
  "name": "J.K. Rowling",
  "bio": "British author, best known for Harry Potter series",
  "birthDate": "1965-07-31"
}
```

**cURL Example:**
```bash
curl -X POST http://localhost:5000/api/authors -H "Content-Type: application/json" -d '{
  "name": "J.K. Rowling",
  "bio": "British author, best known for Harry Potter series",
  "birthDate": "1965-07-31"
}'
```

---

### **Book Routes**

| Method | Endpoint | Description |
|--------|-----------|-------------|
| **POST** | `/api/books` | Create a new book |
| **GET** | `/api/books` | Get all books (with pagination) |
| **GET** | `/api/books/search?name=AUTHORNAME` | Search books by author name |
| **PUT** | `/api/books/:id` | Update a book by ID |
| **DELETE** | `/api/books/:id` | Delete a book by ID |

#### 🧪 Example Request – Create Book

**POST** `/api/books`

**Request Body:**
```json
{
  "title": "Harry Potter and the Philosopher's Stone",
  "genre": "Fantasy",
  "author": "6737b7fbc7d95a33e4c5f1a2",
  "publishedYear": 1997
}
```

**cURL Example:**
```bash
curl -X POST http://localhost:5000/api/books -H "Content-Type: application/json" -d '{
  "title": "Harry Potter and the Philosopher\'s Stone",
  "genre": "Fantasy",
  "author": "6737b7fbc7d95a33e4c5f1a2",
  "publishedYear": 1997
}'
```

#### 🧪 Example Request – Get All Books (with Pagination)

**GET** `/api/books?page=1&limit=5`

**cURL Example:**
```bash
curl http://localhost:5000/api/books?page=1&limit=5
```

#### 🧪 Example Request – Search Books by Author Name

**GET** `/api/books/search?name=J.K. Rowling`

**cURL Example:**
```bash
curl http://localhost:5000/api/books/search?name=J.K.%20Rowling
```

---

## 🧾 Sample `.env` File

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/library_db
```

---

## 🧠 Notes

- Every API request is validated using **Joi** before reaching the database.  
- The app follows a clean **MVC structure** for scalability.  
- You can easily extend it to include authentication or more entities later.  
- Pagination helps keep book lists manageable for large datasets.  

---

## 👨‍💻 Author

**Muskan Pandey**  
Backend Developer — Node.js | Express | MongoDB  


