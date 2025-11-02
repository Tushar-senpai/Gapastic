💬 Gapastic — Real-Time Chat Web App

Gapastic is a real-time chat web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO.
It provides a fast, secure, and modern platform for users to chat instantly, create rooms, and share messages seamlessly.

🚀 Features

✅ Real-Time Messaging — Send and receive messages instantly using Socket.IO
✅ Authentication System — Secure signup/login using JWT authentication
✅ User Profiles — Each user can update their display name, bio, or profile picture
✅ Online Status — Shows who’s online or offline in real time
✅ Chat Rooms / Private Chats — Supports both group and 1-on-1 conversations
✅ Message Persistence — Chats are stored in MongoDB so nothing is lost
✅ Responsive UI — Optimized for both desktop and mobile devices
✅ Dark Mode (optional) — Smooth toggle between light and dark themes

🛠️ Tech Stack
Layer	Technology
Frontend	React.js, Redux / Context API, TailwindCSS / Material UI
Backend	Node.js, Express.js
Real-Time Engine	Socket.IO
Database	MongoDB (Mongoose ORM)
Authentication	JWT + bcrypt
Deployment (optional)	Render / Vercel / Railway / MongoDB Atlas
📁 Folder Structure
Gapastic/
│
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Login, Chat, Profile pages
│   │   ├── context/     # State management
│   │   ├── socket.js    # Socket.IO client setup
│   │   └── App.jsx
│   └── package.json
│
├── server/              # Node + Express backend
│   ├── config/          # MongoDB connection, env setup
│   ├── models/          # Mongoose schemas (User, Message, Chat)
│   ├── routes/          # API routes
│   ├── controllers/     # Route logic
│   ├── socket/          # Socket.IO server events
│   ├── index.js         # Main server entry
│   └── package.json
│
├── .env.example
├── README.md
└── package.json

⚙️ Installation
1. Clone the repository
git clone https://github.com/<your-username>/gapastic.git
cd gapastic

2. Setup environment variables

Create a .env file inside /server directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

3. Install dependencies
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

4. Run the app in development mode
# Start backend (from /server)
npm run dev

# Start frontend (from /client)
npm start


🧠 By default, frontend runs on http://localhost:3000 and backend on http://localhost:5000

⚡ Socket.IO Events
Event	Direction	Description
connection	Server ↔ Client	Establishes real-time connection
sendMessage	Client → Server	User sends a message
receiveMessage	Server → Client	Broadcasts received message
joinRoom	Client → Server	Joins a chat room
leaveRoom	Client → Server	Leaves a chat room
typing	Client ↔ Server	Shows typing indicator
🧩 Future Enhancements

🖼️ Media sharing (images, videos, files)

🔔 Push notifications

🧑‍🤝‍🧑 Friend requests and blocking system

🌐 Multi-language support

📱 Native mobile app using React Native

🧑‍💻 Author

👤 [Your Name]
💼 Developer of Gapastic
📧 your.email@example.com

🌍 [Portfolio or LinkedIn link]

🪪 License

This project is licensed under the MIT License — you’re free to use, modify, and distribute with attribution.
