/** <src/app.jsx>
 * This file contains the main application component.
 * It uses the Router component from react-router-dom to
 * define the routes of the application.
 * It also uses the Route component to define the different
 * routes of the application.
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Resume from "./components/sections/Resume";
import Contact from "./components/sections/Contact";

function App() {
  return (
      <Router basename="/jaqi-portfolio/">
        <Routes>
          <Route
            path="/"
            element={<Layout />}
          >
            <Route
              index
              element={<Hero />}
            />
            <Route
              path="about"
              element={<About />}
            />
            <Route
              path="resume"
              element={<Resume />}
            />
            <Route
              path="contact"
              element={<Contact />}
            />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
