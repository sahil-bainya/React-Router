# 🚀 RouteX – React Router Demo App

A simple and practical React application demonstrating modern routing using React Router. This project showcases navigation, nested routes, dynamic routing, and API data fetching.

---
<img width="1351" height="629" alt="image" src="https://github.com/user-attachments/assets/d57bab74-61d4-4d48-8e99-a3b676c3701f" />
---
<img width="1345" height="626" alt="image" src="https://github.com/user-attachments/assets/2c0504c2-2027-493e-a512-a15d9e463d69" />


## 📌 Features

* 🔁 Client-side routing with React Router
* 🧩 Nested routes with shared layout (Header + Footer)
* 🔗 Dynamic routes (`/user/:username`)
* 📡 Data fetching using **loader functions**
* 📄 Multiple pages (Home, About, Contact, GitHub)
* 🎨 Styled using Tailwind CSS

---

## ⚛️ React Concepts Used

* `useState` – managing state
* `useEffect` – side effects (initial approach)
* `useCallback` – function optimization
* `useRef` – DOM access
* `useId` – unique IDs
* `useLoaderData` – data from route loader

---

## 🧭 React Router Concepts

* `createBrowserRouter`
* `createRoutesFromElements`
* `Route` & `RouterProvider`
* `Outlet` (layout system)
* `NavLink` (active navigation)
* `loader` (data fetching before render)

---

## 🌐 API Used

GitHub API is used to fetch user data:

```bash
https://api.github.com/users/:username
```

Example:

```bash
https://api.github.com/users/the2rivage
```

---

## 🗂️ Project Structure

```bash
src/
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Github.jsx
│   └── User.jsx
│
├── hooks/
│   └── useCurrencyInfo.js (if used)
│
├── api.js
├── Layout.jsx
├── main.jsx
└── index.css
```

---

## 📦 Installation & Setup

```bash
git clone https://github.com/the2rivage/React-Router.git
cd React-Router
npm install
npm run dev
```

---

## 🧠 What I Learned

* How routing works in React
* How to create layout using `Outlet`
* How to fetch data using loaders
* How to handle dynamic routes
* Structuring a React application

---

## 👨‍💻 Author

**Sahil Bainya**
---

## ⭐ Show your support

If you like this project, give it a ⭐ on GitHub!
