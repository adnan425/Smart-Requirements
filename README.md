# Smart Requirements

**A unified web platform for the complete requirements engineering process, from elicitation to an auto-generated SRS document.**

Final Year Project, BS Software Engineering
Shaheed Zulfikar Ali Bhutto Institute of Science and Technology (SZABIST), Islamabad
Supervisor: Mr. Babar Jehangir · 2022–2023

---

## Overview

Software teams usually rely on several separate, often paid tools (e.g. IBM Rational DOORS, Doc Sheets, ReqTest) to manage requirements. This scatters project data across applications and makes collaboration harder.

**Smart Requirements** brings the whole requirements engineering workflow into one free, browser-based environment. A team can create a project, invite stakeholders, work through each requirements engineering phase step by step, and generate a complete Software Requirements Specification (SRS) document from the finalized requirements.

## Features

- **Authentication**: secure sign-up and login, so only verified users can create or open projects.
- **Role-based access** for three roles:
  - **Admin**: views and oversees all projects in the system.
  - **Project Manager**: creates projects, adds team members and stakeholders, and generates the SRS.
  - **Users / Stakeholders**: contribute to and review requirements in the projects they are added to.
- **Project management**: create new projects or load existing ones from the *My Projects* dashboard.
- **Guided requirements engineering phases**:
  1. **Elicitation**: gather requirements through interviews, surveys and brainstorming.
  2. **Analysis**: review entered requirements, flag conflicting or unclear ones for review.
  3. **Traceability**: track each requirement throughout the process.
  4. **Validation & Verification**: stakeholders review and confirm the finalized requirements.
- **Reviewer module**: stakeholders can review and comment on requirements before they are finalized.
- **Automatic SRS generation**: produces a structured SRS document (PDF, LaTeX-based template) from the validated requirements.
- **Collaboration**: multiple stakeholders work on the same project in one shared space.

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React.js, Redux, React Router, Bootstrap, HTML5, CSS3, JavaScript |
| Backend | Node.js, Express.js (REST API) |
| Database | MongoDB, Mongoose, MongoDB Compass |
| Document generation | LaTeX template → PDF |
| Testing | Cypress |
| Process & tools | Scrum (Agile), Git & GitHub |

## Project Structure

```
Smart-Requirements/
├── backend/        # Node.js + Express REST API, Mongoose models, auth, SRS generation
├── public/         # Static assets for the React app
├── src/            # React frontend (components, pages, Redux store, routing)
├── package.json    # Frontend dependencies and scripts
└── .env.example    # Required environment variables (no real values)
```

## Getting Started

### Prerequisites
- Node.js (v16 or later) and npm
- A MongoDB instance (local or MongoDB Atlas)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Adnan-Dani/Smart-Requirements.git
cd Smart-Requirements

# 2. Install frontend dependencies
npm install

# 3. Install backend dependencies
cd backend
npm install
```

### Configuration

Copy `.env.example` to `.env` and fill in your own values:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### Run

```bash
# Start the backend (from /backend)
npm start

# Start the frontend (from the project root, in a second terminal)
npm start
```

The app will open at `http://localhost:3000`.


## Team

| Member | GitHub | Contributions |
|---|---|---|
| **Muhammad Adnan** | [@Adnan-Dani](https://github.com/Adnan-Dani) | **Sole developer.** Designed and built the full application: React/Redux frontend, Node.js/Express REST API, MongoDB/Mongoose data models, authentication and role-based access, requirements engineering phase workflow, reviewer module, and automatic SRS (PDF) generation. Co-authored the project documentation |
| **Raja Tahir Ali** | | Co-authored the project documentation |

> All application code in this repository was written by Muhammad Adnan.

## Documentation

The full project report, covering requirements specification, design (use case, class, sequence, activity and deployment diagrams), project management and testing, is available on request.

## License

Developed as an academic Final Year Project at SZABIST Islamabad.
