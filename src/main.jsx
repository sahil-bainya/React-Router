import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// React Router ke important functions
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout.jsx";
import { About, Home, Contact, User, Github } from "./components";

// Loader function (API call yaha define hua hai)
import { githubInfoLoader } from "./api.js";

/*
  👇 Ye old way hai routing ka (object format)
  Ab hum JSX-based routing use kar rahe hain (more readable)
*/

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ],
//   },
// ]);

/*
  ✅ New way: JSX-based routing (recommended)
  createRoutesFromElements ke andar hum <Route> likhte hain
*/

const router = createBrowserRouter(
  createRoutesFromElements(
    // Root route
    <Route path="/" element={<Layout />}>
      {/* Default route ("/") → Home component */}
      <Route path="" element={<Home />} />

      {/* "/about" route */}
      <Route path="about" element={<About />} />

      {/* "/contact" route */}
      <Route path="contact" element={<Contact />} />

      {/* 
        "/github" route with loader
        👉 loader pehle data fetch karega
        👉 fir component render hoga (Github.jsx me useLoaderData se access karte hain)
      */}
      <Route path="github" element={<Github />} loader={githubInfoLoader} />

      {/* 
        Dynamic route
        👉 ":username" ek dynamic parameter hai
      */}
      <Route path="user/:username" element={<User />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* RouterProvider poore app me routing enable karta hai */}
    <RouterProvider router={router} />
  </StrictMode>,
);
