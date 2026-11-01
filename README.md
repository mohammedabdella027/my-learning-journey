# 🌱 my-learning-journey

**A personal archive of everything I'm learning, building, and figuring out — one project at a time.**

![Status](https://img.shields.io/badge/status-actively%20building%20%26%20learning-brightgreen)
![Focus](https://img.shields.io/badge/focus-Practical%20Projects%20(EduManage%20%26%20COC%20Practice)%20%26%20AI%20Integration-blueviolet)
![Type](https://img.shields.io/badge/type-personal%20learning%20repo-informational)

---

## 👋 About This Repository

This isn't a portfolio and it isn't a single-course repo — it's my **long-term learning journal**. It holds my notes, practice work, experiments, and projects as I grow as a developer.

For a while, the biggest thread running through it was the **AI Full-Stack Web Developer Course**. More recently, I shifted my energy toward **practical project work** — building something real from the ground up instead of moving through more course modules. The first of those projects, **EduManage**, is complete. The second, a **COC exam practice project**, is also complete, and it is how I am preparing for my COC exam, which is still ahead. The course isn't going anywhere; it's paused, not dropped.

---

## 📍 Current Status

**`03-mtech-coc-practice` is complete.** I built it to prepare for my COC exam, which is still ahead. It follows the structure of the two exam projects, using the MTech Import and Export Company scenario. It includes the planning documents of Project 1, and a working HTML, CSS, PHP, and MySQL system for Project 2, with a database backup and restore, a protection scan, and remote access.

**`02-edumanage-system` is complete.** It is a full-stack student management app with a React frontend, an Express API, and a MySQL database. It includes user registration, login with JWT authentication, a protected dashboard, and full student management (add, edit, and delete).

**`01. AI Full-Stack Web Developer Course` is temporarily paused.** I stepped away right around the Vector Embeddings and Semantic Comparator modules, and it is still very much part of the plan.

---

## 🧭 Learning Journey

Here's the path that got me to where I am now:

```text
Web Development Foundations
          │
          ▼
Programming & JavaScript Foundations
          │
          ▼
Backend & React Development
          │
          ▼
Introduction to AI-Powered Application Development
          │
          ▼
AI-Powered Application Architecture, Vectors & Embeddings   ⏸ PAUSED
          │
          ▼
Practical Full-Stack Project Work (EduManage System)   ✅ COMPLETED
          │
          ▼
COC Exam Practice Project (HTML, CSS, PHP & MySQL)   ✅ COMPLETED
```

Each stage built on the last — from styling my first web page, through AI foundations and embeddings, to applying it all in real, practical builds.

---

## 📍 Current Progress

| Learning Area                            | Status                                      |
| ---------------------------------------- | ------------------------------------------- |
| Web Development Foundations              | ✅ Completed                                |
| Programming & JavaScript Foundations     | ✅ Completed                                |
| Backend & React Development              | ✅ Completed                                |
| `01. AI Full-Stack Web Developer Course` | ⏸ Paused                                    |
| `02-edumanage-system`                    | ✅ Completed                                |
| `03-mtech-coc-practice`                  | ✅ Completed                                |

---

## 🗺️ Learning Areas

### 🌐 Web Development Foundations
HTML, CSS, responsive design, Bootstrap, UI/UX basics, and deploying my first websites.

### 💻 Programming & JavaScript Foundations
Programming fundamentals, JavaScript, algorithms, the DOM, event handling, jQuery, and problem-solving.

### ⚙️ Backend & React Development
Git, Node.js, Express.js, MySQL, React, asynchronous JavaScript, React Hooks, APIs, and routing.

### 🤖 AI Full-Stack Web Developer Course *(paused)*
- Project - Netflix Clone
- AI Foundations, History & Terminologies
- The Rise of AI-Powered Applications - From Traditional Logic to AI-Powered Apps
- AI-Powered Application Architecture & Building the Chat Bot (GPT-Clone)
- Beyond Keywords: The Mathematics of Meaning — Vector Embeddings, Cosine Similarity, and a Semantic Comparator demo

This module track is on hold, but it's very much still part of the plan.

### 🏗️ Practical Projects
- **EduManage System** *(completed)* — a full-stack app I built outside the course structure, applying everything from the earlier modules in a real project. It covers a React (Vite) and Tailwind CSS frontend, an Express and MySQL backend, and JWT-based authentication with registration, login, logout, and a protected API.
- **MTech COC Practice Project** *(completed)* — a practice project for my COC exam. It covers planning documents (BOQ, activity plan, schedule, ERD, scalability and recovery plans) and a dynamic web system built with HTML, external CSS, PHP, and MySQL, including login, registration, search, delete, and list pages.

---

## 🛠️ Technologies

**Frontend:** HTML · CSS · Bootstrap · Tailwind CSS · JavaScript · React (Vite) · React Router · Axios

**Backend:** Node.js · Express.js · mysql2 · PHP (mysqli)

**Database:** MySQL · phpMyAdmin

**Authentication:** bcrypt (password hashing) · JSON Web Tokens (jsonwebtoken)

**AI / SDKs *(learning & integration)*:** Google GenAI SDK (`gemini-embedding-001`) · Vector Embeddings · Cosine Similarity

**Tools:** Git · GitHub · VS Code · Postman · MAMP · XAMPP

---

## 📁 Repository Structure

```text
my-learning-journey/
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
├── 02-edumanage-system/
│   ├── client/   # Vite + React + Tailwind CSS frontend
│   ├── server/   # Express + MySQL API with JWT authentication
│   └── README.md
├── 03-mtech-coc-practice/
│   ├── project-1-documents/    # The question and the answer for the planning documents
│   ├── project-2-web-system/   # HTML + CSS + PHP + MySQL web system and database files
│   └── README.md
└── README.md
```

Each folder has its own README with the detailed notes, explanations, and documentation for that topic — this top-level README is just the overview.

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

Setup steps, the API reference, and security notes live in its own [README](./02-edumanage-system/README.md).

### 🧾 About MTech COC Practice Project

A practice project that I built to prepare for the COC exam (occupational code EISWDDBAL-IV). It follows the structure of the two exam projects, with the scenario of the MTech Import and Export Company. It is a learning project and not a production system:

- **Project 1:** the planning documents, with a BOQ, an activity plan, a Gantt schedule, an ERD of the four divisions, and scalability and recovery plans
- **Project 2:** a database with five tables, one external CSS file, five HTML pages, and PHP scripts for login, registration, search, delete, and list
- PHP scripts use prepared statements, so typed values never become part of the SQL
- A database backup that was restored into a separate database to prove it works
- A protection scan, and remote access from another device on the same network

The structure, the setup steps for MAMP and XAMPP, and the known limitations live in its own [README](./03-mtech-coc-practice/README.md).

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

| # | Learning Area                            | Status                                     |
| - | ---------------------------------------- | ------------------------------------------ |
| 1 | Web Development Foundations              | ✅ Completed                               |
| 2 | Programming & JavaScript Foundations     | ✅ Completed                               |
| 3 | Backend & React Development              | ✅ Completed                               |
| 4 | `01. AI Full-Stack Web Developer Course` | ⏸ Paused                                   |
| 5 | `02-edumanage-system`                    | ✅ Completed                               |
| 6 | `03-mtech-coc-practice`                  | ✅ Completed                               |

---

> **A developer's personal learning journey — organized, honest, continuously evolving, and documented as they grow.**