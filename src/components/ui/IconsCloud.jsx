/**
 * <src/components/ui/IconsCloud.jsx />
 * This file renders an animated icon cloud using GSAP.
 */


import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { skillIcons } from "../../data/skillsData";

const IconsCloud = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const icons = containerRef.current.querySelectorAll(".skill-icon");

    icons.forEach(icon => {
      animateIcon(icon);

      // Adds hover effect with random color and scale +10%
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          scale: 1.1,
          duration: 0.3,
          filter: `drop-shadow(0 0 8px ${getRandomColor()}) brightness(1.2)`,
          ease: "power1.out",
        });
      });
      
      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          scale: 1,
          duration: 0.3,
          filter: "none",
          ease: "power1.out",
        });
      });
   

    function animateIcon(icon) {
      gsap.to(icon, {
        x: gsap.utils.random(-100, 100, true),
        y: gsap.utils.random(-80, 80, true),
        duration: gsap.utils.random(3, 5, true),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        repeatRefresh: true,
      });
    }

    function getRandomColor() {
      // Slumpar fram en snygg, tydlig färg
      const colors = ["#ef4444", "#f97316", "#facc15", "#22c55e", "#3b82f6", "#a855f7", "#ec4899"];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  });
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[300px] flex justify-center items-center overflow-hidden">
      <div className="grid grid-cols-5 gap-4">
        {skillIcons.map((icon, idx) => (
          <img
            key={idx}
            src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${icon}.svg`}
            alt={icon}
            className="skill-icon w-8 h-8 sm:w-10 sm:h-10 opacity-80 hover:opacity-100 cursor-pointer transition-opacity duration-300"
          />
        ))}
      </div>
    </div>
  );
  };

export default IconsCloud;
