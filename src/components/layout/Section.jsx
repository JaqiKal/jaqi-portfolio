const Section = ({ className = "", sectionId, children }) => {
  return (
    <section
      id={sectionId}
      className={`py-12 px-6 ${className}`}
    >
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default Section;
