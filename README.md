# InterviewIQ — AI-Powered Interview Preparation Platform

**Practice smarter. Improve your answers. Build interview confidence.**

InterviewIQ is a web-based interview preparation platform designed to help candidates practice technical and HR interviews using AI-powered question generation and answer evaluation. It combines a modern web interface with backend APIs, authentication, database storage, and AI integration to provide a structured interview preparation experience.

## 🚀 Features

- **AI-Powered Question Generation:** Generate interview questions based on resume information and interview requirements.
- **Technical & HR Interview Preparation:** Practice questions for different interview categories.
- **AI Answer Evaluation:** Receive AI-generated feedback on answers to help identify areas for improvement.
- **Performance Feedback:** Get feedback related to answer correctness, communication, and confidence-related indicators, where supported by the evaluation logic.
- **User Authentication:** Firebase Authentication for user sign-in.
- **Interview History:** Access previously saved interview sessions and results, if available for the account.
- **Credit-Based Access:** Manage access to AI features through the application's credit system.
- **Payment Integration:** Razorpay integration for supported payment and credit-related workflows.
- **Responsive Interface:** A React-based user interface with animated interactions.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript, HTML5, CSS3 |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | Firebase Authentication |
| AI Integration | OpenRouter API |
| Payments | Razorpay |
| UI & Animations | Framer Motion |
| Development Tools | Git, GitHub, VS Code, npm |

## 🏗️ Project Architecture

InterviewIQ follows a client-server architecture.

```text
InterviewIQ/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utils/
│   ├── package.json
│   └── .gitignore
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── package.json
│   └── .gitignore
│
└── README.md
```

*Note: Folder contents may vary depending on the current project structure.*

## ⚙️ Getting Started

Follow these steps to run InterviewIQ locally.

### Prerequisites

Install the following before starting:

- Node.js and npm
- MongoDB or a MongoDB Atlas database
- Firebase project with the required authentication provider configured
- OpenRouter API key
- Razorpay test credentials, if testing payment functionality
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Saloni021-kashyap/InterviewIQ-Project.git
```

Move into the project directory:

```bash
cd InterviewIQ-Project
```

### 2. Set Up the Backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory and add the environment variables required by the backend.

Example template:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Add any other variables required by the actual backend configuration. Variable names must match those used in the source code.

Start the backend using the script configured in `server/package.json`. For example, if a `dev` script exists:

```bash
npm run dev
```

### 3. Set Up the Frontend

Open a new terminal:

```bash
cd client
npm install
```

Create a `.env` file inside the `client` directory and configure the Firebase settings and any other frontend environment variables required by the application.

For a Vite-based React project, Firebase variables may follow this pattern:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
```

Use the exact variable names expected by your Firebase configuration. Add other required variables only after checking the client source code.

Start the frontend using the script configured in `client/package.json`. For example:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## 🔐 Environment Variables & Security

- Never commit `.env` files or private API keys.
- Keep OpenRouter and Razorpay secret keys on the backend.
- Configure Firebase Authentication and authorized domains in the Firebase Console.
- Use Razorpay test credentials while developing and testing payments.
- Keep environment files excluded through `.gitignore`.
- Do not expose database credentials, payment secrets, or other private credentials in public source code.

## 💡 How It Works

1. The user signs in through the application's authentication system.
2. The user provides resume information or selects an interview preparation option.
3. The backend processes the request and communicates with the configured AI service.
4. The generated questions are presented in the frontend.
5. The user's answers are submitted for AI-assisted evaluation.
6. Feedback and supported interview history are displayed or saved through the application's backend.

*The exact workflow depends on the features enabled in the current implementation.*

## 🎯 Project Objective

The objective of InterviewIQ is to make interview preparation more structured and accessible by combining AI-assisted practice, answer feedback, and a convenient web interface in one application.

## 👩‍💻 Developer

**Saloni Kashyap**

MCA Student | Full-Stack Developer

GitHub: [@Saloni021-kashyap](https://github.com/Saloni021-kashyap)

## 📌 Future Enhancements

- More personalized interview preparation paths
- Improved interview analytics and progress tracking
- Additional question categories and difficulty levels
- Enhanced feedback reports and practice recommendations

---

*InterviewIQ is a learning and development project. AI-generated feedback is intended to support interview practice and may not always be fully accurate.*
