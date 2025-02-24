/** <src/app.jsx>
 * This file contains the main application component.
 * It uses the Router component from react-router-dom to
 * define the routes of the application.
 * It also uses the Route component to define the different
 * routes of the application.
 */
import Layout from "./components/layout/Layout";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Resume />
      <Portfolio/>
      <Contact />
    </Layout>
  );
}

export default App;