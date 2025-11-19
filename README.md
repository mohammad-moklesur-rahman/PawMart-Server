# 🐾 PawMart Server — REST API (Express + MongoDB)

PawMart Server is the backend API for the PawMart Pet Adoption & Supply Portal.  
It provides secure endpoints for managing listings, orders, and user-specific data using a clean MVC architecture.

---

## 🚀 Tech Stack (Backend)

- **Node.js**
- **Express.js**
- **MongoDB**
- **MVC Architecture**
- **CORS**
- **Dotenv**
- **Nodemon** 
- **Firebase Admin SDK Authentication**

---

## 🌐 Live Links

- **Live Server:** <a target="_blank" href="https://pawmart-server-kappa.vercel.app/">Server Link</a>  
- **GitHub Repository:** <a target="_blank" href="https://github.com/mohammad-moklesur-rahman/PawMart-Server">Server Repo Link</a>

---

## 📁 Project Structure (MVC)

```

/src
│── /config        → Database configuration (MongoDB connection)
│── /controllers   → Request handlers & business logic
│── /middleware    → Authentication and custom middlewares
│── /models        → database models
│── /routes        → API route definitions
│── app.js         → Express app setup (middleware, routes, CORS, parsers)
│── server.js      → Server entry point (listens on PORT)
│
.env               → Environment variables
package.json

```

---

## ⚙️ Installation & Setup (Server)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/mohammad-moklesur-rahman/PawMart-Server.git
cd PawMart-Server
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create `.env`
```
MONGO_URI=your_mongodb_uri
```

#### How to Convert Firebase Admin SDK to Base64

##### Step 1️⃣: Download Your Service Account JSON

From Firebase Console:

Firebase Console → Project Settings → Service Accounts → Generate new private key

This downloads a file like:
```
client-site-firebase-adminsdk.json
```

##### Step 2️⃣: Create a File for Encoding

There is already a file named encode.js in your backend folder:

```
// encode.js
import fs from "fs"
const key = fs.readFileSync("./client-site-firebase-adminsdk.json", "utf8");
const base64 = Buffer.from(key).toString("base64");
console.log(base64);
```
Make sure the JSON file is in the same folder as encode.js.

##### Step 3️⃣: Run the Script

Open your terminal:
```
node encode.js
```
You will see a long Base64 string printed in the console.

Example (shortened):
```
ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInBy...
```

##### Step 4️⃣: Save the Output in .env

In your .env:

```
FIREBASE_SERVICE_KEY=PASTE_YOUR_BASE64_STRING_HERE
```

### 4️⃣ Start the server
```bash
npm start
```

Your API will run at:
```
http://localhost:5000/
```
---

