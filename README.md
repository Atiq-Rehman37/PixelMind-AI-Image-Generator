# 🎨 PixelMind

PixelMind is a full-stack AI Image Generator built with the **MERN Stack**. Users can securely register, log in, and generate AI-powered images from text prompts using the ClipDrop API.

## ✨ Features

- 🔐 JWT Authentication
- 👤 User Registration & Login
- 🛡️ Protected Routes
- 🎨 AI Image Generation
- 📥 Download Generated Images
- ⚡ Responsive UI
- 🚀 Lazy Loading

## 🛠️ Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- React Router
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

**AI**
- ClipDrop API

## 🚀 Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## 🔑 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIPDROP_API_KEY=your_clipdrop_api_key
```

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you like this project, consider giving it a star!
