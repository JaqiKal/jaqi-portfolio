import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import profileImage from "../../assets/images/profile.jpg";

// Load email from environment variable
const emailAddress = import.meta.env.VITE_CONTACT_EMAIL;

const aboutData = {
  description: [
    "Jag har en bakgrund inom logistik och projektledning för mjukvaruprojekt. Teknik har alltid intresserat mig, särskilt hur den förbättrar processer och löser problem.",
    "Med tiden upptäckte jag ett intresse för programmering och att bygga webbapplikationer. Jag arbetar med HTML, CSS, JavaScript, Python, Django, Django REST API, React, Node.js, PostgreSQL, Bootstrap och TailwindCSS.",
    "Som junior fullstack-utvecklare trivs jag både med frontend-design och backend-logik. Jag fokuserar på att skapa användarvänliga applikationer samtidigt som jag hela tiden lär mig nya tekniker.",
    "Jag är baserad i Sverige och öppen för nya möjligheter inom utveckling eller logistik. Oavsett om jag arbetar med teknik eller optimerar logistikflöden, uppskattar jag problemlösning och samarbete.",
  ],

  aboutItems: [
    { label: "Plats", text: "Sverige" },
    { label: "Erfarenhet", text: "Logistik generalist & Junior utvecklare" },
    { label: "Utbildning", text: "Full Stack Developer & Logistics Diploma" },
    { label: "Språk", text: "SVenska, Engelska, Ungerska" },
  ],

};

const About = () => {
  return (
    <section id="about" className="bg-neutral-800 py-12 px-6">
      {/* Grid Container */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
        {/* Profile Image & Contact Section */}
        <div className="col-span-1 flex flex-col items-center md:items-center">
          {/* Profile Image */}
          <div
            className="relative h-24 w-24 bg-cover bg-center rounded-xl md:h-32 md:w-32"
            style={{ backgroundImage: `url(${profileImage})` }}
            onContextMenu={(e) => e.preventDefault()} // Disable right-click
            draggable="false" // Disable image dragging
          >
            {/* Transparent overlay to prevent interaction */}
            <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
        </div>
        
        {/* Contact Section with Icon */}
        {emailAddress && (
          <div className="mt-4 flex flex-col items-center gap-2 text-sm text-white">
            <span className="text-center">Hör gärna av dig, så nätverkar vi 🍵! </span>

            <div className="flex gap-4">
            {/* Email Icon */}
            <a
            href={`mailto:${emailAddress}`}
            className="text-white hover:text-gray-300"
            >
              <EnvelopeIcon className="h-6 w-6 text-gray-300 transition-transform duration-200 hover:scale-110" />
              </a>
              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/jacqueline-kalmar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                <FontAwesomeIcon 
                  icon={faLinkedin} 
                   className="h-6 w-6 transition-transform duration-200 hover:scale-110" 
                />
              </a>
            </div>
          </div>
          )}
        </div>

        {/* About Info */}
        <div className="col-span-2 flex flex-col gap-4">
          {/* Paragraphs are stored as an array, making them easier to manage. */}
          {/* Each paragraph is rendered separately, improving readability & maintainability. */}
          {aboutData.description.map((paragraph, idx) => (
            <p
              key={idx}
              className="prose prose-sm text-gray-300 sm:prose-base"
            >
              {paragraph}
            </p>
          ))}

          {/* About Details */}
          <ul className="grid grid-cols-1 gap-2">
            {aboutData.aboutItems.map(({ label, text }, idx) => (
              <li
                key={idx}
                className="flex items-start gap-x-2"
              >
                <span className="text-sm font-bold text-white">{label}:</span>
                <span className="text-sm text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
