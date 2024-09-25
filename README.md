🚀 Project Overview

CourseMaster is a web application designed to simplify course management for teachers and students. It provides functionalities like course creation, student enrollment, and dashboards for both teachers and students. The frontend is built with React and communicates with a Node.js/Express backend through RESTful APIs.
🛠️ Technologies Used

    React (JavaScript library for building user interfaces)
    Axios (for making HTTP requests to the backend API)
    React Router (for managing application routing)
    CSS (for custom styles)

✨ Features

    Authentication: Login and signup functionality for teachers, students, and admins.
    Dashboard:
        Teachers: Create and manage courses, view enrolled students.
        Students: View available courses, enroll in courses, track course progress.
    Search Functionality: Users can search for courses.
    Responsive Design: Built with mobile-first responsiveness in mind.

💻 Installation and Setup

To run this project locally, follow these steps:

    Clone the repository:

    bash

git clone https://github.com/Aymenkenway/coursemaster_frontend.git

Navigate to the project directory:

bash

cd coursemaster_frontend

Install dependencies:

bash

npm install

Set up environment variables:

    Create a .env file in the root directory.
    Add your environment variables, including the backend API URL:

    bash

    REACT_APP_API_URL=<your_backend_api_url>

Run the application:

bash

    npm start

    Access the app: Open your browser and go to http://localhost:3000.

📂 Directory Structure

Here is an overview of the directory structure:

bash

/coursemaster_frontend
├── /public
│ ├── index.html
│ └── favicon.ico
├── /src
│ ├── /assets # Images, CSS, and other assets
│ ├── /components # Reusable components
│ ├── /pages # Main application pages (Home, Login, etc.)
│ ├── /context # Context API for managing global state (e.g., AuthContext)
│ ├── /hooks # Custom React hooks
│ ├── /services # Services for interacting with the API
│ ├── /utils # Helper functions
│ ├── App.js # Main application file
│ ├── index.js # Entry point for React
│ └── setupTests.js # For setting up tests
├── .env # Environment variables
├── package.json # Project metadata and dependencies
└── README.md # Project documentation

📜 Available Scripts

In the project directory, you can run:

    npm start: Runs the app in development mode. Open http://localhost:3000 to view it in the browser.
    npm test: Launches the test runner in the interactive watch mode.
    npm run build: Builds the app for production to the build folder.
    npm run eject: If you need to customize the configuration.

🌐 API Integration

The frontend communicates with the backend through RESTful API calls. You can set the backend URL by specifying the REACT_APP_API_URL in the .env file.

    Example API endpoints:
        /api/login: For user login
        /api/courses: Fetch available courses
        /api/students: Manage student data

Axios is used to make HTTP requests to these endpoints.
🤝 Contributing

Feel free to submit issues, fork the repository, and send pull requests. Contributions to the project are highly appreciated!
Steps to Contribute:

    Fork the repository.
    Create your feature branch (git checkout -b feature/new-feature).
    Commit your changes (git commit -m 'Add new feature').
    Push to the branch (git push origin feature/new-feature).
    Open a Pull Request.
