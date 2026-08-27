# 🚀 Project 01: Netflix Clone

📘 **My Learning Notes, Architecture & Implementation Details**

---

## 🎓 Project Info

* **Project Name:** Netflix Clone (Streaming Platform)
* **Tech Stack:** React (Vite), Axios, CSS Modules, Swiper.js, Lucide React, React Icons
* **API Provider:** The Movie Database (TMDB API)
* **Environment Configuration:** Vite (`import.meta.env.VITE_TMDB_API_KEY`)
* **Deployment:** Vercel (CI/CD connected via GitHub)

---

## 📝 About the Project

This project is a front-end clone of the Netflix streaming platform, built to practice real-world React application architecture using Vite as the build tool. It integrates with The Movie Database (TMDB) API through a centralized Axios instance, dynamically fetching and rendering movie and TV show data across multiple genre categories. The goal of this project was to replicate core UI/UX patterns found in modern streaming applications, including a dynamic hero banner, horizontally scrolling carousels, and a responsive, scroll-aware navigation bar.

Key functionality includes:

* Dynamic hero banner that displays a random Netflix Original on every page load
* Parallel API data fetching across 8 movie/show categories for fast page loads
* Swiper.js-powered carousels with hover-based interactive movie cards
* Scroll-aware sticky header with search and profile dropdown toggles
* Environment-variable-based API key management for secure deployment
* Fully responsive layout across desktop and mobile devices

---

## 🗂️ Project Structure & Architecture

```text
01. Project - Netflix Clone/
├── public/
├── src/
│   ├── assets/              # Static media assets (Logos)
│   ├── Components/          
│   │   ├── Banner/          # Hero banner with dynamic backdrop & controls
│   │   ├── DisplayRow/      # Multi-category async API fetcher
│   │   ├── Footer/          # Responsive footer links & social icons
│   │   ├── Header/          # Dynamic sticky navbar with search & profile toggles
│   │   ├── MovieCard/       # Detailed poster card with hover overlay
│   │   └── SlideShow/       # Swiper.js carousel wrapper
│   ├── Data/                # Static local data fallbacks
│   ├── Utility/             # Axios instance & API route definitions
│   │   ├── MovieInstance.js # Axios instance with TMDB base URL
│   │   └── requestUrls.js   # TMDB endpoints using Vite env vars
│   ├── App.jsx              # Main Assembly Component
│   ├── App.css              # Global styles
│   └── main.jsx             # React DOM entry point
├── package.json
└── vite.config.js
```

---

## 🧩 Key Implementation Modules

### 🛠️ 1. Centralized Axios Instance & Request Utilities

**What it does:** Creates a custom `axios` instance for TMDB API requests and centralizes endpoints inside `requestUrls.js`.

**Why it is used:** Prevents repeating base URLs across multiple files and safely isolates environment variables.

#### Code Snippet (`Utility/MovieInstance.js` & `Utility/requestUrls.js`)

```javascript
// Utility/MovieInstance.js
import axios from "axios";

const movieInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export { movieInstance };
```

---

### 🎨 2. Dynamic Hero Banner (`Banner.jsx`)

**What it does:** Fetches Netflix Originals on mount, selects a random item using `Math.floor(Math.random() * results.length)`, and renders a dynamic backdrop image with truncated overview text.

**Why it is used:** Provides a fresh, dynamic hero display on every page reload matching real-world streaming applications.

#### Key Code Snippet

```javascript
useEffect(() => {
    async function fetchBannerImage() {
        const request = await movieInstance.get(requests.fetchNetflixOriginals);
        setBannerImage(
            request.data.results[Math.floor(Math.random() * request.data.results.length)]
        );
    }
    fetchBannerImage();
}, []);
```

---

### ⚡ 3. Parallel Data Fetching (`DisplayRow.jsx`)

**What it does:** Executes 8 API endpoint requests concurrently using `Promise.all`.

**Why it is used:** Accelerates overall page load speeds by fetching all movie genres in parallel rather than sequentially.

#### Endpoint Categories Fetched

| Category Name | TMDB Endpoint Route |
| --- | --- |
| Trending | `fetchTrending` |
| Netflix Originals | `fetchNetflixOriginals` |
| Top Rated | `fetchTopRatedMovies` |
| Action | `fetchActionMovies` |
| Comedy | `fetchComedyMovies` |
| Horror | `fetchHorrorMovies` |
| Romance | `fetchRomanceMovies` |
| Documentaries | `fetchDocumentaries` |

---

### 🎠 4. Responsive Carousel Slider (`SlideShow.jsx` & `MovieCard.jsx`)

**What it does:** Wraps individual `MovieCard` components inside `Swiper` and `SwiperSlide` elements using `swiper/modules`.

**Why it is used:** Provides smooth horizontal touch and mouse drag controls across desktop and mobile views.

#### Feature Highlights

* Displays `5.8` slides per view for visual overflow previews.
* Detailed hover overlay on `MovieCard` showing genre tags, quality badges (`HD`, `U/A 16+`), and interactive action icons (`Play`, `Add to List`, `Like`, `Dropdown`).

---

### 🔔 5. Scroll-Aware Navigation Bar (`Header.jsx`)

**What it does:** Attaches a `window.addEventListener("scroll")` listener to dynamically add a `.scrolled` CSS class when `window.scrollY > 50`.

**Why it is used:** Improves top navbar legibility as users scroll down past bright banner images.

#### State Features

* `isSearchOpen`: Toggles search input field visibility.
* `isProfileOpen`: Toggles account dropdown menu (`Account`, `Help center`, `Sign out`).

---

### 🚀 6. How to Run Locally

1. **Clone the repository:**

```bash
git clone https://github.com/mohammedabdella027/my-learning-journey.git
```

2. **Navigate to project folder:**

```bash
cd "01. AI Full-Stack Web Developer Course/01. Introduction to AI-Powered Application Development/01. Project - Netflix Clone"
```

3. **Install dependencies:**

```bash
npm install
```

4. **Environment Setup:**

Create a `.env` file in the root directory:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

5. **Start local development server:**

```bash
npm run dev
```
