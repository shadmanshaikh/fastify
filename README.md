# 🚀 Fastify REST API Boilerplate

A lightweight and blazing-fast REST API boilerplate using [Fastify](https://fastify.io/), designed for rapid backend prototyping and learning purposes. This project uses a local `db.json` file as a simple mock database for managing users.

---

## 🧩 Features

- ⚡ Fastify-based web server
- 📁 Clean project structure
- 🔄 Full CRUD for users
- 💾 File-based mock database (`db.json`)
- 🧠 Easy to read and extend
- 🧪 Great for practicing backend API development

---

## 📁 Project Structure

\`\`\`
fastify/
├── index.js              # Fastify server entry point
├── db.json               # Mock user database
├── routes/
│   └── userRoutes.js     # User routes (GET, POST, PUT, DELETE)
├── controllers/
│   └── userController.js # Business logic for user operations
└── utils/
    └── readJson.js       # Helper to read the mock database
\`\`\`

---

## 🛠️ Installation & Setup

### Prerequisites

- Node.js v16+ installed
- npm (Node package manager)

### Steps

1. **Clone the repo**

\`\`\`bash
git clone https://github.com/shadmanshaikh/fastify.git
cd fastify
\`\`\`

2. **Install dependencies**

\`\`\`bash
npm install
\`\`\`

3. **Start the server**

\`\`\`bash
node index.js
\`\`\`

4. **Server will run at:**

\`\`\`
http://localhost:3000
\`\`\`

---

## 📬 API Endpoints

### User Routes

| Method | Endpoint        | Description           |
|--------|------------------|-----------------------|
| GET    | \`/users\`         | Get all users         |
| GET    | \`/users/:id\`     | Get user by ID        |
| POST   | \`/users\`         | Add a new user        |
| PUT    | \`/users/:id\`     | Update user by ID     |
| DELETE | \`/users/:id\`     | Delete user by ID     |

---

## 🧪 Example User Object

\`\`\`json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
\`\`\`

---

## 📦 JSON Mock Database

All user data is stored in \`db.json\`:

\`\`\`json
{
  "users": [
    {
      "id": 1,
      "name": "Alice",
      "email": "alice@example.com"
    },
    {
      "id": 2,
      "name": "Bob",
      "email": "bob@example.com"
    }
  ]
}
\`\`\`

You can edit this file manually or use the API routes to manage data.

---

## 🤔 Why Use This?

- 🏁 Great starting point for Fastify projects
- 🧰 Minimal setup, no DB installation required
- 🧠 Easy to understand CRUD logic
- 🧪 Perfect for API testing practice

---

## 🙋‍♂️ Author

**Shadman Shaikh**  
🌐 GitHub: [@shadmanshaikh](https://github.com/shadmanshaikh)

---

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to use, fork, and improve it!
