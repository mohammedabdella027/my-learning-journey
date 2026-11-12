# 🌱 my-learning-journey

**A personal archive of everything I'm learning, building, and figuring out — one project at a time.**

![Status](https://img.shields.io/badge/status-actively%20building%20%26%20learning-brightgreen)
![Focus](https://img.shields.io/badge/focus-Practical%20Projects%20(EduManage%20%26%20COC%20Practice)%20%26%20AI%20Integration-blueviolet)
![Type](https://img.shields.io/badge/type-personal%20learning%20repo-informational)

---

## 👋 About This Repository

This isn't a portfolio and it isn't a single-course repo — it's my **long-term learning journal**. It holds my notes, practice work, experiments, and projects as I grow as a developer.

It starts with the **full-stack foundations**: all the practice work from my three training phases (HTML, CSS and Bootstrap; JavaScript; Node, Express, MySQL and React), organized week by week. After that came the **AI Full-Stack Web Developer Course**, and more recently **practical project work** — building something real from the ground up. The first of those projects, **EduManage**, is complete. The second, my **COC exam practice**, is still in progress, and it is how I am preparing for my COC exam, which is still ahead. The course isn't going anywhere; it's paused, not dropped.

---

## 📍 Current Status

**`0-practical-projects/06-coc-practice` is in progress.** It holds my preparation for the COC exam, which is still ahead. It has two parts: `01-mtech-coc-practice`, a practice project built on the MTech Import and Export Company scenario, and `02-coc-model-exam-practice`, practice on the model exam. The MTech project includes the planning documents of Project 1, and a working HTML, CSS, PHP, and MySQL system for Project 2, with a database backup and restore, a protection scan, and remote access.

**`0-practical-projects/05-edumanage-system` is complete.** It is a full-stack student management app with a React frontend, an Express API, and a MySQL database. It includes user registration, login with JWT authentication, a protected dashboard, and full student management (add, edit, and delete).

**`01. AI Full-Stack Web Developer Course` is temporarily paused.** I stepped away right around the Vector Embeddings and Semantic Comparator modules, and it is still very much part of the plan.

**`00-fullstack-foundations` is complete.** It holds all my practice work from the three foundation phases, with every week I saved code for. It is the base that everything else in this repository builds on.

---

## 🧭 Learning Journey

Here's the path that got me to where I am now:

```text
Full-Stack Foundations                                  ✅ COMPLETED
          │
          ▼
AI Full-Stack Web Developer Course                      ⏸ PAUSED
          │
          ▼
Practical Full-Stack Project Work (EduManage System)    ✅ COMPLETED
          │
          ▼
COC Exam Practice Project (HTML, CSS, PHP & MySQL)      🚧 IN PROGRESS
```

Each stage built on the last — from styling my first web page, through the foundations of JavaScript, Node, and React, then AI and embeddings, to applying it all in real, practical builds.

---

## 📍 Current Progress

| Learning Area                                                    | Status         |
| ---------------------------------------------------------------- | -------------- |
| [Full-Stack Foundations](./00-fullstack-foundations)             | ✅ Completed   |
| `01. AI Full-Stack Web Developer Course`                         | ⏸ Paused       |
| [EduManage System](./0-practical-projects/05-edumanage-system)   | ✅ Completed   |
| [COC Practice](./0-practical-projects/06-coc-practice)           | 🚧 In progress |

---

## 🗺️ Learning Areas

### 🧱 Full-Stack Foundations
My practice work from three training phases, kept in [`00-fullstack-foundations`](./00-fullstack-foundations):

- 🌐 **Web Development Foundations** — HTML, CSS, responsive design, Bootstrap, UI/UX basics, and deploying my first websites.
- 💻 **Programming & JavaScript Foundations** — Programming fundamentals, JavaScript, algorithms, the DOM, event handling, jQuery, and problem-solving.
- ⚙️ **Backend & React Development** — Git, Node.js, Express.js, MySQL, React, asynchronous JavaScript, React Hooks, APIs, and routing.

### 🤖 AI Full-Stack Web Developer Course *(paused)*
- Project - Netflix Clone
- AI Foundations, History & Terminologies
- The Rise of AI-Powered Applications - From Traditional Logic to AI-Powered Apps
- AI-Powered Application Architecture & Building the Chat Bot (GPT-Clone)
- Beyond Keywords: The Mathematics of Meaning — Vector Embeddings, Cosine Similarity, and a Semantic Comparator demo

This module track is on hold, but it's very much still part of the plan.

### 🏗️ Practical Projects
My real builds, indexed in [`0-practical-projects`](./0-practical-projects):

- **Adidas Website**, **Dwello Real Estate**, **To-Do List**, and **Streaming Platform Clone** — standalone projects that live in their own repositories, each linked from the index.
- **EduManage System** *(completed)* — a full-stack app I built outside the course structure, applying everything from the earlier modules in a real project. It covers a React (Vite) and Tailwind CSS frontend, an Express and MySQL backend, and JWT-based authentication with registration, login, logout, and a protected API.
- **COC Exam Practice** *(in progress)* — my preparation for the COC exam. It has the MTech practice project, with planning documents (BOQ, activity plan, schedule, ERD, scalability and recovery plans) and a dynamic web system built with HTML, external CSS, PHP, and MySQL, plus practice on the model exam.

---

## 🛠️ Technologies

**Frontend:** HTML · CSS · Bootstrap · Tailwind CSS · JavaScript · jQuery · React (Vite) · React Router · Axios

**Backend:** Node.js · Express.js · mysql2 · PHP (mysqli)

**Database:** MySQL · phpMyAdmin

**Authentication:** bcrypt (password hashing) · JSON Web Tokens (jsonwebtoken)

**AI / SDKs *(learning & integration)*:** Google GenAI SDK (`gemini-embedding-001`) · Vector Embeddings · Cosine Similarity

**Tools:** Git · GitHub · VS Code · Postman · MAMP · XAMPP

---

## 📁 Repository Structure

```text
my-learning-journey/
├── 0-practical-projects/
│   ├── 01-adidas-website/            # Link to the standalone repository
│   ├── 02-dwello-real-estate/        # Link to the standalone repository
│   ├── 03-todo-list/                 # Link to the standalone repository
│   ├── 04-streaming-platform-clone/  # Link to the standalone repository
│   ├── 05-edumanage-system/
│   │   ├── client/   # Vite + React + Tailwind CSS frontend
│   │   ├── server/   # Express + MySQL API with JWT authentication
│   │   └── README.md
│   ├── 06-coc-practice/
│   │   ├── 01-mtech-coc-practice/
│   │   │   ├── project-1-documents/    # The question and the answer for the planning documents
│   │   │   ├── project-2-web-system/   # HTML + CSS + PHP + MySQL web system and database files
│   │   │   └── README.md
│   │   └── 02-coc-model-exam-practice/
│   └── README.md
├── 00-fullstack-foundations/
│   ├── 01-web-development-foundations/         # Phase 1: HTML, CSS, Bootstrap
│   ├── 02-programming-javascript-foundations/  # Phase 2: JavaScript, DOM, jQuery
│   ├── 03-backend-react-development/           # Phase 3: Node, Express, MySQL, React
│   └── README.md
├── 01. AI Full-Stack Web Developer Course/
│   ├── 01. Introduction to AI-Powered Application Development/
│   │   ├── 01. Project - Netflix Clone/
│   │   ├── 02. AI Foundations, History & Terminologies/
│   │   └── 03. The Rise of AI-Powered Applications - From Traditional Logic to AI-Powered Apps/
│   ├── 02. AI-Powered Application Architecture & Building the Chat Bot/
│   │   ├── 01. GPT-Clone/
│   │   └── 02. AI Architecture, Model Selection & Advanced Terminology/
│   └── 03_Beyond_Keywords/
│       ├── 01_The_Mathematics_of_Meaning/
│       └── 02_Building_a_Semantic_Comparator_Demo_Practice/
└── README.md
```

Each folder has its own README with the detailed notes, explanations, and documentation for that topic — this top-level README is just the overview.

### 🧱 About the Full-Stack Foundations

The practice work from my three foundation phases, grouped by the week I did it. Only the weeks where I saved practice code have a folder, so the week numbers are not continuous. It is practice work, not production code:

- **Phase 1:** rebuilding the Apple homepage with HTML and CSS, responsive design with media queries, an Apple page with Bootstrap, and a practice portfolio site
- **Phase 2:** algorithms, functions, loops and objects, DOM and events, jQuery, an Apple footer with interactivity, and a snake game
- **Phase 3:** terminal, Bash and Git, Node.js modules and a web server, a MySQL practice project, and four React projects covering components, lists, state and Hooks, and API integration with routing
- The React projects don't include `node_modules`. Run `npm install` inside a project folder to rebuild it from `package.json`

The week-by-week breakdown lives in its own [README](./00-fullstack-foundations/README.md).

### 🎬 About the Netflix Clone

A small educational project built to practice front-end development:

- Built for learning purposes
- Development progress committed to GitHub in 12 commits
- Deployed using Vercel

Full details live inside its own project folder.

### 🏫 About EduManage System

A practical full-stack project, separate from the course curriculum, built to put my accumulated skills to work on something real. It is a learning project and not a production system:

- Register and log in with email and password
- Passwords stored as bcrypt hashes, and sessions handled with JWT
- Protected dashboard, with automatic logout when the token is rejected
- Add, edit, and delete students, with clear validation and error messages
- Responsive layout with a sticky header and table head
- A REST API that checks the token on every students request

Setup steps, the API reference, and security notes live in its own [README](./0-practical-projects/05-edumanage-system/README.md).

### 🧾 About the COC Practice

My preparation for the COC exam (occupational code EISWDDBAL-IV), split into two parts. It is learning work and not a production system, and it is still in progress.

#### 01 · MTech COC Practice Project

A practice project that follows the structure of the two exam projects, with the scenario of the MTech Import and Export Company:

- **Project 1:** the planning documents, with a BOQ, an activity plan, a Gantt schedule, an ERD of the four divisions, and scalability and recovery plans
- **Project 2:** a database with five tables, one external CSS file, five HTML pages, and PHP scripts for login, registration, search, delete, and list
- PHP scripts use prepared statements, so typed values never become part of the SQL
- A database backup that was restored into a separate database to prove it works
- A protection scan, and remote access from another device on the same network

The structure, the setup steps for MAMP and XAMPP, and the known limitations live in its own [README](./0-practical-projects/06-coc-practice/01-mtech-coc-practice/README.md).

#### 02 · COC Model Exam Practice

Practice work on the COC model exam, still in progress.

---

## 📦 What You'll Find in This Repository

| Category          | Description                                  |
| ----------------- | -------------------------------------------- |
| 📝 Learning Notes | Concepts and explanations in my own words    |
| 💻 Practice       | Small exercises and coding drills            |
| 🧪 Experiments    | Things I'm testing out or exploring          |
| 🔨 Projects       | Larger builds that apply what I've learned   |
| 📚 Course Work    | Structured material from courses I'm taking  |
| 📈 Progress       | Where I currently stand in my learning       |

This is a **working repository** — it's meant to show real, ongoing learning, not a polished final product.

---

## 💡 Learning Philosophy

I learn best by building, not just watching. My approach here is:

- Practice over passive tutorials
- Understand the "why," not just the "how"
- Show up consistently
- Document what I learn as I learn it
- Treat mistakes as part of the process

---

## ✅ Progress Tracker

| # | Learning Area                                                  | Status         |
| - | -------------------------------------------------------------- | -------------- |
| 1 | [Full-Stack Foundations](./00-fullstack-foundations)           | ✅ Completed   |
| 2 | `01. AI Full-Stack Web Developer Course`                       | ⏸ Paused       |
| 3 | [EduManage System](./0-practical-projects/05-edumanage-system) | ✅ Completed   |
| 4 | [COC Practice](./0-practical-projects/06-coc-practice)         | 🚧 In progress |

---

> **A developer's personal learning journey — organized, honest, continuously evolving, and documented as they grow.**